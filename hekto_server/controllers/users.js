const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/Users");
const mongoose = require("mongoose");
// const { createJWTToken } = require('../utils/util');
// const { verifyUser } = require('../utils/middlewares');

const router = express.Router();
// router.use(['/profile-settings', '/add', '/edit', '/delete'], verifyUser);

router.post("/login", async (req, res) => {

  try {
    if (!req.body.email) throw new Error("Email is required");
    if (!req.body.password) throw new Error("Password is required");
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("Email or password is incorrect");
    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Email or password is incorrect");

    //promise ko hum await kr skty hn bcz isky andar async task perform hty hn
    const token = await createJWTToken(user, 12);
    res.json({ token, user });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ errors });
    }
    res.status(400).json({ error: error.message });
  }
});

router.get("/profile-settings", async (req, res) => {

  try {
    res.json({
      test: 'test'
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

});

router.post("/signup", async (req, res) => {
  const userExist = await User.findOne({ email: req.body.email });

  try {
    if (userExist) throw new Error("This email is already registered");
    if (!req.body.password) throw new Error("Password is required");

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    await user.save();

    //promise ko hum await kr skty hn bcz isky andar async task perform hty hn
    const token = await createJWTToken(user, 12);
    res.json({ token, user });

  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = {};

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json({ errors });
    }
    res.status(400).json({ error: error.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });

    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// router.post('/edit/:userId', async (req, res) => {
router.post("/edit", async (req, res) => {
  try {
    if (!req.body.id) throw new Error("User id is required");
    if (!mongoose.isValidObjectId(req.body.id))
      throw new Error("User id is invalid");
    if (req.user._id.toString() !== req.body.id) // to string is used to convert req.user._id to string because this returns new ObjectId("6439f4ca31d7babed61963e0") that is object user id and we need only string to compare it.
      throw new Error("Invalid request s");

    const user = await User.findById(req.body.id);
    if (!user) throw new Error("User does not exists");

    await User.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      age: req.body.age,
      salary: req.body.salary,
    });

    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    if (!req.body.id) throw new Error("User id is required");
    if (!mongoose.isValidObjectId(req.body.id))
      throw new Error("User id is invalid");

    const user = await User.findById(req.body.id);
    if (!user) throw new Error("User does not exists");

    await User.findByIdAndDelete(req.body.id);

    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    // const users = await User.find({age: 30});
    // const users = await User.find({age:  { $gt: 30 } });

    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
