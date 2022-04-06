/**
 * check if ex coordinate are in range and valid, if yes stores them
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    
      if (
        // row and col are in range
        parseInt(req.body.exerciseRow) !== NaN &&
        parseInt(req.body.exerciseCol) !== NaN &&
        req.body.exerciseRow <= res.locals.workout.row &&
        req.body.exerciseCol <= res.locals.workout.col
      ) {
        res.locals.row = req.body.exerciseRow;
        res.locals.col = req.body.exerciseCol;
      }
      return next();
    }
};
