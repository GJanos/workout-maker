const requireOption = require("../generic/options");
/**
 * searches for matching user, if found authenticates it
 */
module.exports = function (objectrepository) {
  const userModel = requireOption(objectrepository, "userModel");
  return async function (req, res, next) {
    if (req.body.username !== "" && req.body.password !== "") {
      const user = await userModel.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (user !== null) {
        req.session.authenticated = true;
        req.session.user = user;
        return res.redirect(`/main/${req.session.user._id}`);
        
      } else return res.redirect("/");
    }
    return next();
  };
};
