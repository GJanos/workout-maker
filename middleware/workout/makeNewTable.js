/**
 * ha az alap tablatol elteri meretet adott meg a felhasznalo akkor kreal post keresre ez a mdlw egy uj ures tablat a meretekkel es kivalasztott exerciset elmenti 
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {

    // create new table if changed
    if (res.locals.workout.tableChanged) {
      res.locals.workout.exercises = [];
      for (let i = 0; i < res.locals.workout.row; i++) {
        res.locals.workout.exercises.push([]);
        for (let j = 0; j < res.locals.workout.col; j++) {
          res.locals.workout.exercises[i].push(null);
        }
      }
    }

    // is user selected exercise than save it
    if (res.locals.exercise !== undefined) {
      for (let i = 0; i < res.locals.workout.row; i++) {
        for (let j = 0; j < res.locals.workout.col; j++) {
          if (i === res.locals.exercise.row-1 && j === res.locals.exercise.col-1)
            res.locals.workout.exercises[i][j] = res.locals.exercise;
        }
      }
    }
    

    return next();
  };
};
