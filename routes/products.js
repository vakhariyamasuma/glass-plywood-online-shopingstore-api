var express = require('express');
var router = express.Router();
const crypto = require("crypto");
var productModel = require("../model/productModel")
var categoryModel = require("../model/categoryModel")
var ratingModel = require("../model/ratingModel")

var multer = require('multer');
var upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) { callback(null, './public/images'); },
        filename: async function (req, file, callback) {

            const id = `${crypto.randomBytes(16).toString("hex")}.${file.mimetype.split("/")[1]}`
            try {
                const products = new productModel({
                    prodcutname: req.body.prodcutname,
                    price: req.body.price,
                    description: req.body.description,
                    category: req.body.category,
                    imgUrl: `/images/${id}`
                });

                const savedProducts = await products.save()
                file.originalname = id
                callback(null, file.originalname);
            } catch (error) {
                console.log(error)
            }

        }
    })
})
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Express' });
});

router.post('/file-upload', upload.array("files"), function (req, res, next) {

    res.status(200).send("success")
});

router.get('/get-products', function (req, res) {
    categoryModel.find((err, data) => {
        if (!err) {
            productModel.find((err, data) => {
                if (!err) {
                    res.status(200).send(data);
                }
            })
        }
    })
});

router.post('/get-products-by-category', function (req, res) {
    productModel.find({ category: req.body.category }, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
});

router.post('/get-products-by-id', function (req, res) {
    productModel.find({ _id: req.body.id }, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
});

router.get('/get-category', function (req, res) {
    categoryModel.find((err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
});

router.post('/rate-product', async function (req, res) {
    try {
        const ratings = new ratingModel(req.body);

        const savedRatings = await ratings.save((err, data) => {
            res.status(200).send("success")
        })

    } catch (error) {
        res.status(500).send("An error occured while saving the data")
    }
});

router.post('/get-ratings', function (req, res) {
    ratingModel.find(req.body, (err, data) => {
        if (!err) {
            let totalRating = 0;
            data.map((rating) => {
                totalRating = (+totalRating) + (+rating.rating)
            })
            totalRating = totalRating / data.length
            let ratingData = {
                totalRating: totalRating,
                userRatings: data
            }
            res.status(200).send(ratingData);
        }
    })
});

module.exports = router;
