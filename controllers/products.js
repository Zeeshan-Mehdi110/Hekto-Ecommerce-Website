const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Product")
const { isSuperAdmin, isAdmin } = require("../utils/utils");
const { verifyuser } = require("../utils/middlewares");
const multer = require('multer');
const Aws = require('aws-sdk')
const uuid = require("uuid");

const path = require('path');
const Category = require("../models/Category");

const router = express.Router();
router.use(['/add', '/edit', '/delete'], verifyuser)

// Configure AWS SDK with your credentials and region
Aws.config.update({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: process.env.AWS_REGION,
  endpoint: `https://s3.${process.env.AWS_REGION}.amazonaws.com`
});

// Create an S3 instance
const s3 = new Aws.S3();

// Multer Configuration
const upload = multer({
  fileFilter: (req, file, cb) => {
    // cb = callback
    const allowedTypes = ['png', 'jpg', 'jpeg', 'gif', 'bmp']
    const ext = path.extname(file.originalname).replace('.', '')
    if (allowedTypes.includes(ext)) {
      cb(null, true)
    } else {
      cb(new Error('File type not allowed'), false)
    }
  }
})




// Adding product
router.post("/add", upload.array('productPictures[]'), async (req, res) => {

  const { name, shortDescription, price, sale_price, discountPercentage, categoryId, brandId,
    color, isFeatured, isTrending, isTop, tags, longDescription, additionalInformation } = req.body

  const record = {
    name,
    shortDescription,
    price,
    sale_price,
    discountPercentage,
    categoryId,
    brandId,
    color,
    isFeatured,
    isTrending,
    isTop,
    tags,
    longDescription,
    additionalInformation,
  }

  if (discountPercentage)
    record.discountPrice = (sale_price - (sale_price * (discountPercentage / 100))).toFixed(2);

  try {
    if (isSuperAdmin(req.user) && isAdmin(req.user))
      throw new Error("Invalid Requests")

    const files = req.files; // Retrieve the array of uploaded files

    if (files && files.length > 0) {
      const filePromises = files.map(async (file) => {
        const uniqueFilename = `products/${uuid.v4()}-${file.originalname}`;
        const params = {
          Bucket: process.env.AWS_BUCKET,
          Key: uniqueFilename, // Generate a unique key for each file
          Body: file.buffer,
        };

        const result = await s3.upload(params).promise();
        // Return the S3 object key
        return result.Location;
      });

      const uploadedFiles = await Promise.all(filePromises);
      record.productPictures = uploadedFiles; // Save the array of S3 object keys as the productPictures field
    }

    let product = new Product(record);

    await product.save()

    const category = await Category.findOne({ _id: categoryId });
    product = {
      ...product.toObject(),
      categoryName: category.name
    };

    res.status(200).json({ product })
  } catch (error) {
    res.status(400).json([error.message]);
  }
});


// Editing Products
router.post("/edit", upload.array('productPictures[]'), async (req, res) => {

  try {
    if (isSuperAdmin(req.user) && isAdmin(req.user))
      throw new Error("Invalid Request")

    // if id is not available
    if (!req.body.id)
      throw new Error("Product id is requird")

    // check for valid object Id using mongoose this will check the id is this id is according to formula of #
    if (!mongoose.isValidObjectId(req.body.id))
      throw new Error("Invalid Id");

    const record = {
      name: req.body.name,
      shortDescription: req.body.shortDescription,
      price: req.body.price,
      sale_price: req.body.sale_price,
      discountPercentage: req.body.discountPercentage,
      categoryId: req.body.categoryId,
      brandId: req.body.brandId,
      color: req.body.color,
      isFeatured: req.body.isFeatured,
      isTrending: req.body.isTrending,
      isTop: req.body.isTop,
      tags: req.body.tags,
      longDescription: req.body.longDescription,
      additionalInformation: req.body.additionalInformation,
    }
    if (req.body.discountPercentage)
      record.discountPrice = (req.body.sale_price - (req.body.sale_price * (req.body.discountPercentage / 100))).toFixed(2);

    const files = req.files; // Retrieve the array of uploaded files

    if (files && files.length > 0) {
      const filePromises = files.map(async (file) => {
        const uniqueFilename = `products/${uuid.v4()}-${file.originalname}`;
        const params = {
          Bucket: process.env.AWS_BUCKET,
          Key: uniqueFilename, // Generate a unique key for each file
          Body: file.buffer,
        };

        const result = await s3.upload(params).promise();

        // Return the S3 object key
        return result.Location;
      });

      const uploadedFiles = await Promise.all(filePromises);
      record.productPictures = uploadedFiles; // Save the array of S3 object keys as the productPictures field
    }


    await Product.findByIdAndUpdate(req.body.id, record);

    let updatedProduct = await Product.findById(req.body.id);
    const category = await Category.findOne({ _id: req.body.categoryId });


    const responseObj = {
      ...updatedProduct.toObject(),
      categoryName: category.name
    };

    res.json({ product: responseObj })

  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// Deleting Products
router.delete('/delete', async (req, res) => {
  try {
    if (isSuperAdmin(req.user) && isAdmin(req.user))
      throw new Error("Invalid Request 1")

    //  if id is not available
    if (!req.body.id)
      throw new Error("Category id is requird")


    // check for valid object Id using mongoose this will check the id is this id is according to formula of #
    if (!mongoose.isValidObjectId(req.body.id))
      throw new Error("Invalid Id 2");


    // check for the valid id
    const product = await Product.findById(req.body.id)
    if (!product)
      throw new Error("Invalid Id 3");

    await Product.findByIdAndDelete(req.body.id)
    res.json({ success: "Product is Deleted" })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})



//Getting Products
router.get("/", verifyuser, async (req, res) => {
  try {
    if (isSuperAdmin(req.user) && isAdmin(req.user))
      throw new Error("Invalid Request")

    const skip = parseInt(req.query.skip ? req.query.skip : 0);
    const recordsPerPage = req.query.limit ? req.query.limit : process.env.RECORDS_PER_PAGE;

    const pipeline = [
      {
        $lookup: {
          from: "categories", // Name of the category collection
          localField: "categoryId", // Field in the products collection
          foreignField: "_id", // Field in the category collection
          as: "category" // Output field name for the joined category
        }
      },
      {
        $unwind: "$category" // Unwind the category array created by $lookup
      },
      {
        $skip: skip
      },
      {
        $limit: parseInt(recordsPerPage)
      },
      {
        $project: {
          _id: 1,
          name: 1,
          price: 1,
          sale_price: 1,
          discountPrice: 1,
          averageRating: 1,
          categoryId: 1,
          active: 1,
          created_on: 1,
          shortDescription: 1,
          longDescription: 1,
          additionalInformation: 1,
          tags: 1,
          isFeatured: 1,
          isTop: 1,
          isTrending: 1,
          color: 1,
          categoryName: "$category.name" // Retrieve the category name field
        }
      }
    ];

    const [products, countResult] = await Promise.all([
      Product.aggregate(pipeline),
      Product.aggregate([{ $count: "totalRecords" }])
    ]);

    const totalRecords = countResult.length > 0 ? countResult[0].totalRecords : 0;

    res.status(200).json({ products, totalRecords });

  } catch (error) {
    if (!res.headersSent) {
      res.status(400).json({ error: error.message });
    }
  }
});


// Client Home Page Products
router.get("/home", async (req, res) => {
  try {

    const limit = req.query.limit ? req.query.limit : 4;

    const pipeline = [
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "category"
        }
      },
      {
        $unwind: "$category"
      },
      {
        $match: {
          active: parseInt(process.env.ACTIVE_STATUS)
        }
      },
      {
        $sort: {
          created_on: -1
        }
      },
      {
        $facet: {
          featuredProducts: [
            {
              $match: {
                isFeatured: true
              }
            },
            {
              $limit: limit
            },
            {
              $project: {
                _id: 1,
                name: 1,
                sale_price: 1,
                discountPrice: 1,
                discountPercentage: 1,
                averageRating: 1,
                categoryId: 1,
                active: 1,
                created_on: 1,
                shortDescription: 1,
                longDescription: 1,
                additionalInformation: 1,
                tags: 1,
                isFeatured: 1,
                isTop: 1,
                isTrending: 1,
                color: 1,
                productPictures: 1,
                categoryName: "$category.name"
              }
            }
          ],
          trendingProducts: [
            {
              $match: {
                isTrending: true
              }
            },
            {
              $limit: limit
            },
            {
              $project: {
                _id: 1,
                name: 1,
                sale_price: 1,
                discountPrice: 1,
                discountPercentage: 1,
                averageRating: 1,
                categoryId: 1,
                active: 1,
                created_on: 1,
                shortDescription: 1,
                longDescription: 1,
                additionalInformation: 1,
                tags: 1,
                isFeatured: 1,
                isTop: 1,
                isTrending: 1,
                productPictures: 1,
                color: 1,
                categoryName: "$category.name"
              }
            }
          ],
          topProducts: [
            {
              $match: {
                isTop: true
              }
            },
            {
              $limit: limit
            },
            {
              $project: {
                _id: 1,
                name: 1,
                sale_price: 1,
                discountPrice: 1,
                discountPercentage: 1,
                averageRating: 1,
                categoryId: 1,
                active: 1,
                created_on: 1,
                shortDescription: 1,
                longDescription: 1,
                additionalInformation: 1,
                tags: 1,
                isFeatured: 1,
                isTop: 1,
                isTrending: 1,
                color: 1,
                productPictures: 1,
                categoryName: "$category.name"
              }
            }
          ],
          latestProducts: [
            {
              $limit: limit * limit
            },

            {
              $group: {
                _id: "$category.name",
                products: {
                  $push: {
                    _id: "$_id",
                    name: "$name",
                    sale_price: "$sale_price",
                    discountPrice: "$discountPrice",
                    discountPercentage: "$discountPercentage",
                    averageRating: "$averageRating",
                    categoryId: "$categoryId",
                    active: "$active",
                    created_on: "$created_on",
                    shortDescription: "$shortDescription",
                    longDescription: "$longDescription",
                    additionalInformation: "$additionalInformation",
                    tags: "$tags",
                    isFeatured: "$isFeatured",
                    isTop: "$isTop",
                    isTrending: "$isTrending",
                    productPictures: "$productPictures",
                  }
                }
              }
            },
            {
              $project: {
                _id: 0,
                category: "$_id",
                products: {
                  $slice: ["$products", 3]
                }
              }
            },
            {
              $limit: 3
            },
            {
              $group: {
                _id: null,
                latestProducts: {
                  $push: {
                    k: "$category",
                    v: "$products"
                  }
                }
              }
            },
            {
              $project: {
                _id: 0,
                latestProducts: {
                  $arrayToObject: "$latestProducts"
                }
              }
            },
          ]
        }
      }];

    const products = await Product.aggregate(pipeline);


    res.status(200).json((products[0]));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Getting one Product Details
router.get("/details/:productId", async (req, res) => {
  try {

    if (!req.params.productId)
      throw new Error("Product Id is Required");

    const product = await Product.findById(req.params.productId);
    res.status(200).json({ product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/dummy", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

module.exports = router;