const requireOption = require("../generic/options");
/**
 * gets selected user, and places it into res.locals, so render can work with it
 */
module.exports = function (objectrepository) {
  const userModel = requireOption(objectrepository, "userModel");

  return async function (req, res, next) {
    res.locals.user = await userModel.findOne({ _id: req.params.id });
    return next();
  };
};
