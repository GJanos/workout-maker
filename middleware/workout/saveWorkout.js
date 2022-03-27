/**
 * local vagy body.n levo objectet menti db-be post hatasara getre next
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    
    
    console.log(res.locals.workout.exercises);
    console.log(res.locals);
    
    return next();
  };
};
