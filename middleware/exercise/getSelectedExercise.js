const requireOption = require("../generic/options");
/**
 * ha get akkor next, ha post akkor req.bodyra rarakja az infokat id alapjan talalja meg megfeleli exercise-t ha res.body.hasproperty("{i}") == true akkor i az index és innen meg tudjuk találni, ha body.hasproperty("{userModel.id}") == true akkor skippel, mert nem történt változtatás a selectben alapbol globalis modellre pakol
 *
 * egesz nehezites a lenyilo gombok miatt van es hogy az ott kivalasztott ertek fugv-ben kell renderelni az oldalt...
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return function (req, res, next) {
    // hogy az ejs.be amikor re.rendernek beadom a res.localst lassa a ejs file hogy letezett ez a property
    

    
    if (req.body.id !== undefined) {
      exerciseModel.findOne({_id: req.body.id},(error, exercise) =>{
         if (error || !exercise) return next(error);

         objectrepository.exercise = exercise;
         console.log(objectrepository.exercise);
         return next();
      })
    }
    else{
      
      if (objectrepository.exercise !== undefined){
        return next();
      }
      objectrepository.exercise = undefined;
      return next();
    }
    
    // let findSelectedExercise = () => {
    //   let indexOfSelectedExercise;
    //   res.locals.allExercises.forEach(function (exercise, index) {
    //     if (req.body[`${index + 1}`] !== undefined) {
    //       indexOfSelectedExercise = index + 1;
    //     }
    //   });
    //   if (indexOfSelectedExercise !== null) {
    //     let selectedExercise = res.locals.allExercises.find(
    //       (exercise) => exercise.id === indexOfSelectedExercise
    //     );
    //     return selectedExercise;
    //   }
    // };

    // res.locals.exercise = findSelectedExercise();
    // return next();
  };
};
