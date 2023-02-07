var express = require('express');
var router = express.Router();
var cartModel = require("../model/cartModel")


/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Express' });
});

router.post('/add-to-cart', async function (req, res) {
    try {
        const cart = new cartModel(req.body);
        const savedToCart = await cart.save((err, data) => {
            if (!err) {
                res.status(200).send("success")
            } else {
                res.status(400).send(err)
            }
        })

    } catch (error) {
        res.status(500).send("Error")
    }
});

router.post('/get-cart', function (req, res, next) {
    cartModel.find(req.body, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
});

router.post('/remove-product-from-cart', function (req, res, next) {
    cartModel.findOneAndRemove({ _id: req.body._id }, (err, data) => {
        if (!err) {
            res.status(200).send("success");
        }
    })
});

router.post('/remove-all-from-cart', function (req, res, next) {
    cartModel.deleteMany({ _id: req.body }, (err, data) => {
        if (!err) {
            res.status(200).send("success");
        }
    })
});




module.exports = router;
