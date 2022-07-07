const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },

    price: { type: Number, required: true },

    company: { type: String },

    image: { type: String, required: true },

    description: { type: String, required: true },

    oldprice: { type: Number },

    discount: { type: String },

    stock: { type: Number, required: true },

    category: { type: String },

    productType: { type: String },

    qty: { type: Number, default: 1, required: true },

    size: { type: String, default: "s", enum: ["s", "m", "l", "xl"] },

    reviews: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User" },

        rating: { type: Number, default: 1, enum: [1, 2, 3, 4, 5] },

        text: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
