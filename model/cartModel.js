const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
    prodcutname: {
        type: String,
        require: true,
    },
    productId: {
        type: String,
        require: true,
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
    quantity: {
        type: String,
        require: true,
        unique: false
    },
    size: {
        type: String,
        require: true,
        unique: false
    },
    imgUrl: {
        type: String,
        require: true,
        unique: false
    },
    userId: {
        type: String,
        require: true,
        unique: false
    },
    status: {
        type: Boolean,
        require: true,
        unique: false
    }
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;
