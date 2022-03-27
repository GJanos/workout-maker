const Schema = require("mongoose").Schema;
const db = require("../config/db");

const workoutSchema = new Schema({
  row: Number,
  col: Number,
  ownerName: String,
  _exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise",
    },
  ],
});


const Workout = db.model("Workout", workoutSchema);

module.exports = Workout;
