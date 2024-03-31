var express = require("express");
var router = express.Router();
const User = require("../models/userModel");

/* GET users listing. */
router.post("/", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
    next();
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
