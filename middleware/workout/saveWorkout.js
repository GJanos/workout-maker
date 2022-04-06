/**
 * saves workout
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    
    
    res.locals.workout.save((err) => {
      if (err) return next(err);
      return next();
    });
  };
};
