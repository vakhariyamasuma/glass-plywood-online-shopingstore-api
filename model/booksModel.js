const mongoose = require("mongoose");

let booksSchema = new mongoose.Schema({
  book_id: String,
  book_name: String,
  book_no_page: String,
});

const userSchema = new mongoose.Schema({});

module.exports = mongoose.model("books", booksSchema);
