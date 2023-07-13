const express = require("express");
const Site = require("../models/Site");
const { verifyuser } = require("../utils/middlewares");
const multer = require("multer")
const path = require("path")
const User = require("../models/User");
const Category = require("../models/Category");
const Brand = require("../models/Brand");
const Product = require("../models/Product");
const Aws = require('aws-sdk')
const uuid = require("uuid");

const router = express.Router();
// router.use(verifyuser)

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


// Adding Site
router.post("/add", async (req, res) => {
  const {
    siteName,
    logo,
    address,
    email,
    phoneNumber,
    facebookLink,
    twitterLink,
    instagramLink

  } = req.body;
  try {

    const site = new Site({
      siteName,
      tagline,
      logo,
      address,
      email,
      phoneNumber,
      facebookLink,
      twitterLink,
      instagramLink
    })
    await site.save()
    res.status(200).json({ site })
  } catch (error) {
    res.status(400).json([error.message]);
  }
});


// Editing Site
router.post("/update", verifyuser, upload.single("siteLogo"), async (req, res) => {
  try {
    const site = await Site.findOne();
    if (!site)
      throw new Error("Invalid Id");
    const { siteName, siteAddress, siteEmail, sitePhoneNumber, facebookLink, twitterLink, instagramLink } = req.body

    const record = {
      siteName,
      siteAddress,
      siteEmail,
      sitePhoneNumber,
      facebookLink,
      twitterLink,
      instagramLink
    }

    if (req.file) {
      const uniqueFilename = `site/${uuid.v4()}-${req.file.originalname}`;
      const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: uniqueFilename, // Generate a unique key for each file
        Body: req.file.buffer,
      };

      const result = await s3.upload(params).promise();

      record.siteLogo = result.Location; // Save the S3 object key as the profilePicture field

    }
    await Site.findOneAndUpdate(site._id, record)
    res.json(await Site.findOne())

  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})



router.get("/", async (req, res) => {
  try {
    const site = await Site.findOne();

    const totalUsers = await User.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalBrands = await Brand.countDocuments();
    const totalProducts = await Product.countDocuments();

    res.status(200).json({ site, totalUsers, totalCategories, totalBrands, totalProducts });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/site", async (req, res) => {
  try {
    const site = await Site.findOne();

    res.status(200).json({ site });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;