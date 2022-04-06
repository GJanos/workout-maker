// connecting mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/G7YF6Y", { useNewUrlParser: true });

module.exports = mongoose;
