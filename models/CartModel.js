const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        qty: Number,
        price: Number,
      },
    ],
    total: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
