const requireOption = require("../generic/options");
/**
 * searching for matching user if not found registers a new one to db
 */
module.exports = function (objectrepository) {
  const userModel = requireOption(objectrepository, "userModel");
  const workoutModel = requireOption(objectrepository, "workoutModel");
  return async function (req, res, next) {
    if (req.body.username !== "" && req.body.password !== "") {
      const user = await userModel.findOne({
        username: req.body.username,
      });
      if (user === null) {
        const user = new userModel();
        user.username = req.body.username;
        user.password = req.body.password;
        user.workout = new workoutModel();
        user.workout.row = 1;
        user.workout.col = 1;
        user.save((err) => {
          if (err) return next(err);
          user.workout.save((err) => {
            if (err) return next(err);
          });
        });
        return next();
      } else res.redirect("/register");
    }
  };
};
