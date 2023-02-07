var express = require('express');
var router = express.Router();
var orderModel = require("../model/orderModel")


/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', { title: 'Express' });
});

router.post('/create-order', async function (req, res, next) {
    try {
        const orders = new orderModel(req.body);
        const savedOrder = await orders.save((err, data) => {
            if (!err) {
                res.status(200).send("success")
            }
        })

    } catch (error) {
        res.status(500).send("Error")
    }

});

router.post('/get-orders', function (req, res) {
    orderModel.find(req.body, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
    })
});

module.exports = router;
