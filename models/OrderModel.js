const mongoose = require('mongoose');
const Schema = mongoose.Schema

const orderSchema = new Schema({
    isDelivered:Boolean,
    orderId :Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    orderedProduct:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Cart'
    }]
},{timestamps:true})

module.exports = mongoose.model('Order',orderSchema);

