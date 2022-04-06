/**
 * check if table size in range, valid and are different then before, if column changed deletes table
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (
      // correct size
      req.body.tableRow < 8 &&
      req.body.tableCol < 8 &&
      req.body.tableRow >= 1 &&
      req.body.tableCol >= 1 &&
      // correct format
      parseInt(req.body.tableRow) !== NaN &&
      parseInt(req.body.tableCol) !== NaN &&
      //different size than previous
      req.body.tableRow !== res.locals.workout.row &&
      req.body.tableCol !== res.locals.workout.col
    ) {
      // changed column size
      if (req.body.tableCol - res.locals.workout.col !== 0) {
        res.locals.workout.exercises = [];
      }
      res.locals.workout.row = req.body.tableRow;
      res.locals.workout.col = req.body.tableCol;
    }
    return next();
  };
};
