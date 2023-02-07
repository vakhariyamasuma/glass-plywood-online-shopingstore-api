const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    mobile_number: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    products: {
        type: [Object],
        require: true,
    },
    total: {
        type: String,
        require: true,
    },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
