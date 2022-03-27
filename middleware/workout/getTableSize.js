/**
 * postra ha mas a merete mint alapbol a benne levo tabla merete akkor ujat csinal getre ujratoltéskor kondicionálisan vagy a global 
    workoutModel meretei lesznek a sor oszloptextmezoben vagy ha az undefined akkor nem lesz ereteke ezt mindet 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (req.body.tableRow !== undefined &&
        req.body.tableCol !== undefined) {
      if (
        req.body.tableRow < 8 &&
        req.body.tableCol < 8 &&
        req.body.tableRow >= 1 &&
        req.body.tableCol >= 1 &&
        parseInt(req.body.tableRow) !== NaN &&
        parseInt(req.body.tableCol) !== NaN &&
        req.body.tableRow !== res.locals.workout.row &&
        req.body.tableCol !== res.locals.workout.col
      ) {
        res.locals.workout.row = req.body.tableRow;
        res.locals.workout.col = req.body.tableCol;
        res.locals.workout.tableChanged = true;
      }
    }
     
    return next();
  };
};
