/**
 * megnezi hogy letezik e mar ez a felhasznalo, ha igen redirect /register ha nem akkor nextet hiv
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
