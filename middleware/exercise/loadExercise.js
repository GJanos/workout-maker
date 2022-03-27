/**
 * getre global modellbol betolti az exercise kulonbozo mezoit ha nem talal semmit akkor nem tolt postra semmi
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
