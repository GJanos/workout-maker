/**
 * adott usert elmenti a res.bodyból (kesobb midnenkepp majd a userModel-t fogom globalisan adigatni)  majd nextet hiv getre siman next
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
