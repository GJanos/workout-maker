const Schema = require("mongoose").Schema;
const db = require("../config/db");

const workoutSchema = new Schema({
  row: Number,
  col: Number,
  exercises: [],
});


const Workout = db.model("Workout", workoutSchema);

module.exports = Workout;
