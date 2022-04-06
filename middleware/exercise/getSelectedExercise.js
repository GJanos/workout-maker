const requireOption = require("../generic/options");
/**
 * gtts selected ex id from req.params.id and stores it
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
    res.locals.exercise = await exerciseModel.findOne({ _id: req.params.id });
    return next();
  };
};
