const express = require("express");
const router = express.Router();

const ProductModel = require("../models/ProductModel");

// get all products
router.get("/", async (req, res) => {
  try {
    const Products = await ProductModel.find();

    if (!Products) return res.status(401).send("No Products Available");

    return res.json(Products);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server Error");
  }
});

//get a specific products by productType
router.get("/:productType", async (req, res) => {
  try {
    const { productType } = req.params;

    const products = await ProductModel.find({ productType });

    if (!products) return res.status(401).send("No Products Available");

    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server Error");
  }
});


// get a single product by id
router.get("/productDetail/:id",async(req,res)=>{
  try {
    const { id } = req.params;

    const product = await ProductModel.findById({ _id:id });

    if (!product) return res.status(401).send("No Product Found");

    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server Error");
  }
})

module.exports = router;
