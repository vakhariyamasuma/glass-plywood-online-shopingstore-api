var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var booksModel = require("../model/booksModel");

mongoose.connect(
  "mongodb+srv://masuma:yellowyellow@cluster0.ovanf.mongodb.net/datademo"
);
var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  booksModel.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Failed to retrieve the Course List: " + err);
    }
  });
});

router.get("/text-bbok", function (req, res, next) {
  res.send("Hii there i am text-book");
});

router.get("/reading-book", function (req, res, next) {
  res.send("Hii there i am reading-book");
});

module.exports = router;
