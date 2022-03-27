const requireOption = require("../generic/options");
/**
 * exerciset elmenti db-be pesze ha get akkor next
 */
module.exports = function (objectrepository) {

  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
      await exerciseModel.findOneAndRemove(
          { _id: req.params.id });
      return next();
  };
};
