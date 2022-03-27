const Schema = require("mongoose").Schema;
const db = require("../config/db");

const exerciseSchema = Schema({
  name: String,
  note: String,
});

const Exercise = db.model("Exercise", exerciseSchema);

module.exports = Exercise;

