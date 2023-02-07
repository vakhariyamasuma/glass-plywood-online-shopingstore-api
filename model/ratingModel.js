const mongoose = require("mongoose");
const ratingSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    rating: {
        type: String,
        require: true,
    },
    productId: {
        type: String,
        require: true,
    },
});

const Rating = mongoose.model("ratings", ratingSchema);
module.exports = Rating;
