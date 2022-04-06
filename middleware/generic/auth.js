/**
 * If the user is not logged in, redirects to /
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (req.session.authenticated) {
      return next();
    } else res.redirect("/");
  };
};
