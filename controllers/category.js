const express = require("express");
const mongoose = require("mongoose");
const Category = require("../models/Category")
const verifyUser = require("../utils/middlewares")


const router = express.Router();
router.use(verifyUser)



// Adding Categories
router.post("/add", async (req, res) => {
    const {
        name,
        description
    } = req.body;
  try {

    const category = new Category({
        name,
        description
    })
    await category.save()
    res.status(200).json({category})
  } catch (error) {
    res.status(400).json([error.message]);
}
});


// Editing Categories
router.post("/edit", async (req, res) => {

    try {

        // if id is not available
        if (!req.body.id)
            throw new Error("Category id is requird")


        // check for valid object Id using mongoose this will check the id is this id is according to formula of #
        if (!mongoose.isValidObjectId(req.body.id))
        throw new Error("Invalid Id");


        const category = await Category.findById(req.body.id)
        if (!Category)
            throw new Error("Invalid Id");

            const {
                name
            } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(req.body.id, {
            name,
        });
        res.json({ category: updatedCategory })

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// Deleting Categories
router.delete('/delete', async (req, res) => {
  try {
    //  if id is not available
    if (!req.body.id)
      throw new Error("Category id is requird")


    // check for valid object Id using mongoose this will check the id is this id is according to formula of #
    if (!mongoose.isValidObjectId(req.body.id))
      throw new Error("Invalid Id");


    // check for the valid id
    const category = await Category.findById(req.body.id)
    if (!category)
      throw new Error("Invalid Id");

    await Category.findByIdAndDelete(req.body.id)
    res.json({ success: true })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})


router.get("/", async(req, res) =>{
  try{
    let categories = await Category.find();

    res.status(200).json(categories);
  }catch(err){
    res.status(400).json({ error: err.message })
  }
})

module.exports = router;