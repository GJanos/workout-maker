var requireOption = require("../generic/options");


/**
 * finds the workouttable for logged in user
 */
module.exports = function (objectrepository) {

  const workoutModel = requireOption(objectrepository,"workoutModel");
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
    // ufind by users workout ID
    const workout = await workoutModel
      .findOne({
        _id: req.session.user.workout,
      })
      .populate("exercises");

    res.locals.workout = workout;
    res.locals.username = "Janos";
    return next();
  };
};
