const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    prodcutname: {
        type: String,
        require: true,
        unique: true
    },

    description: {
        type: String,
        require: true,
        unique: false
    },
    category: {
        type: String,
        require: true,
        unique: false,
        sparse: true
    },
    price: {
        type: String,
        require: true,
        unique: false
    },
    imgUrl: {
        type: String,
        require: true,
        unique: false
    },
    // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },

}, { timestamps: true });

const Product = mongoose.model("products", productSchema);
module.exports = Product;
