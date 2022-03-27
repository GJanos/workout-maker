/**
 * ellenorzi megfeleloek e a szamok, rangeben vannak e kisebek mint tablameret ha nincs akkor redirect ide postra, getre next
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (
      req.body.exerciseRow !== undefined &&
      req.body.exerciseCol !== undefined
    ) {
      if (
        req.body.exerciseRow <= res.locals.workout.row &&
        req.body.exerciseCol <= res.locals.workout.col 

      ) {
        res.locals.exercise.row = req.body.exerciseRow;
        res.locals.exercise.col = req.body.exerciseCol;
      }
    }

    return next();
  };
};
