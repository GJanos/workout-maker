const requireOption = require("../generic/options");
/**
 * exerciset elmenti db-be pesze ha get akkor next
 */
module.exports = function (objectrepository) {

  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {

    
      // exerciseModel.deleteById(objectrepository.exercise._id);

      // deleteSelectedExercise(exerciseModel, objectrepository,req,next);
    req.params.id
      if (objectrepository.exercise !== undefined &&
          req.body.delete !== undefined
        ) {
          try{
            await exerciseModel.findOneAndRemove(
            { _id: objectrepository.exercise._id });
            objectrepository.exercise = undefined;
            return next();
          }catch(err){
            return next(err);
          }
        }else return next();
    
  };
};


// async function deleteSelectedExercise(exerciseModel,objectrepository,req,next){

//   if (
//     objectrepository.exercise !== undefined &&
//     req.body.delete !== undefined
//   ) {
//     await exerciseModel.findOneAndRemove(
//       { _id: objectrepository.exercise._id },
//       function (err, exercise) {
//         if (err) {
//           console.log(err);
//         }
//       }
//     );
//     objectrepository.exercise = undefined;
//     return next();
//   } else return next();

  
// }

// Campground.findByIdAndRemove(req.params.id, function (err) {
//   if (err) {
//     res.redirect("/campgrounds");
//   } else {
//     res.redirect("/campgrounds");
//   }
// });
