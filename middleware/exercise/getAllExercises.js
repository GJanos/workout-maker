const requireOption = require("../generic/options");

/**
 * finds all the exercises from db then puts it into res.locals
 */
module.exports = function (objectrepository) {

  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
    res.locals.allExercises = await exerciseModel.find();
    return next()
  };
};
