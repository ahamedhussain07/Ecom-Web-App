const express = require("express");
const router = express.Router();

const ProductModel = require("../models/ProductModel");

// get all products
router.get("/", async (req, res) => {
  try {
    const Products = await ProductModel.find();
    console.log("apiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    console.log("form api",Products)
    if (!Products) return res.status(401).send("No Products Available");

    return res.status(200).json(Products);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server Error");
  }
});

module.exports = router;
