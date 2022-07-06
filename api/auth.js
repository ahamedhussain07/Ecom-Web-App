const express = require("express");
const router = express.Router();

const UserModel = require("../models/UserModel");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const { userId } = req;
    
    const user = await UserModel.findById(userId);

    if (!user) return res.status(401).send("No User Found");

    return res.status(200).json({user});
  } catch (e) {
    console.log(e);
    return res.status(500).send("Server Error");
  }
});

module.exports = router;
