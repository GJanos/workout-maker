const requireOption = require("../generic/options");
/**
 * deletes ex from db based on id
 */
module.exports = function (objectrepository) {

  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
      await exerciseModel.findOneAndRemove(
          { _id: req.params.id }
      );
      return next();
  };
};
