const Schema = require("mongoose").Schema;
const db = require("../config/db");

const userSchema = new Schema({
  username: String,
  password: String,
  workout: {
    type: Schema.Types.ObjectId,
    ref: "Workout",
  },
});

const User = db.model("User", userSchema);

module.exports = User;
