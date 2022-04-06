/**
 * if user selected new esercise then places it
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {

    let workout = res.locals.workout;
    let exercise = res.locals.exercise;

    // is user selected exercise than save it
    if (res.locals.exercise !== undefined) {
      workout.exercises[
        (res.locals.row - 1) * workout.col + (res.locals.col - 1)
      ] = exercise;
    }
    return next();
  };
};
