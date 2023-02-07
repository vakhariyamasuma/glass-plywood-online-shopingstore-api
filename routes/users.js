const { json } = require("express");
var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
const userModel = require("../model/userModel");

mongoose.connect(
  "mongodb+srv://masuma:yellowyellow@cluster0.ovanf.mongodb.net/material"
);
router.use(express.urlencoded({ extended: false }));

var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("database is connected successfully");
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("users");
});

router.post("/registration", async (req, res) => {
  try {
    const users = new userModel({
      name: req.body.name,
      account_type: req.body.account_type,
      email: req.body.email,
      gender: req.body.gender,
      state_city: `${req.body.state_city[0]}/${req.body.state_city[1]}`,
      mobile_number: req.body.mobile_number,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      address: req.body.address,
    });

    const registeredUser = await users.save();
    var data = {
      name: req.body.name,
      account_type: req.body.account_type,
      email: req.body.email,
      gender: req.body.gender,
      state_city: `${req.body.state_city[0]}/${req.body.state_city[1]}`,
      mobile_number: req.body.mobile_number,
      address: req.body.address,
      status: "success",
    };
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/login", function (req, res) {
  userModel.find(req.body, (err, data) => {
    if (!err) {
      let userExist = data.length ? true : false;
      if (userExist) {
        let userData = {
          email: data[0].email,
          name: data[0].name,
          account_type: data[0].account_type,
          gender: data[0].gender,
          state_city: data[0].state_city,
          mobile_number: data[0].mobile_number,
          address: data[0].address,
          userId: data[0]._id
        };
        res.status(200).send(userData);
      } else {
        res.status(404).send("User does not exist");
      }
    }
  });
});

module.exports = router;
