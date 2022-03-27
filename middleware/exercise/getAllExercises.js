const requireOption = require("../generic/options");

/**
 * getre  lekeri az osszes exerciset esetleg a lekero fugv egy bool 	flaget is bilnethetnek hogy ne keregessek ugyan azt folyton le postra semmi
 */
module.exports = function (objectrepository) {

  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
    res.locals.allExercises = await exerciseModel.find();
    return next()
  };
};
