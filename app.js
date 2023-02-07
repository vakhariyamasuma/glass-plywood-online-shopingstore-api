var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var products = require("./routes/products");
var orders = require("./routes/orders")
var cart = require("./routes/cart")

// var bookRouter = require("./routes/books");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(upload.any());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", products);
app.use("/orders", orders);
app.use("/cart", cart);
// app.use("/books", bookRouter);

module.exports = app;
