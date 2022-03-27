const requireOption = require("../generic/options");
/**
 * exerciset elmenti db-be pesze ha get akkor next
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return function (req, res, next) {

      // console.log(req.body);    
      // if (res.locals.exercise === undefined) {
        
      //   if (req.body.name !== undefined && req.body.note !== undefined) {
      //     console.log("uj elem hozzaadva");
      //     const newExercise = new exerciseModel();
      //     newExercise.name = req.body.name;
      //     newExercise.note = req.body.note;
      //     newExercise.save(function (err) {
      //       if (err) return handleError(err);
      //     });
      //     return next();
      //   } else{
          
      //     return next();
      //   } 
      // }else{
        
      //   if (
      //     req.body.note !== "" &&
      //     req.body.note !== res.locals.exercise.note
      //   ) {
      //     res.locals.exercise.note = req.body.note;
      //     res.locals.exercise.save(function (err) {
      //       if (err) return handleError(err);
      //     });
      //     console.log(`sdaaasda  ${req.body.note} valamiii`);
      //   } 
        
      //   return next();
      // }

      // ha nem valasztott ki exerciset
      // if (objectrepository.exercise === undefined){

      //   // ezelott sem volt kivalasztott exercise mar
      //   if(objectrepository.selectedExercise === undefined){
      //     return next();
      //   }else{
      //     // ha volt mar kivalasztott exercise de nem megfelelo a note
      //     if(req.body.note === "" &&
      //       req.body.note === objectrepository.selectedExercise.note){
      //       res.
      //       res.locals.exercise.save(function (err) {
      //         if (err) return handleError(err);
      //       });
      //     }else{
      //       objectrepository.selectedExercise.
      //     }
          
      //   }

      // }

      
      // exercise/new -bol erkezve uj objectet hoz letre es azt elmenti
      if (res.locals.name !== undefined && res.locals.note !== undefined) {
        console.log(req.body);
        const newExercise = new exerciseModel();
        newExercise.name = res.locals.name;
        newExercise.note = res.locals.note;
        newExercise.save(function (err) {
            if (err) return handleError(err);
          });
        return next();
          
      }else{
        // valasztott mar exerciset a legordulobol
        if (objectrepository.exercise !== undefined) {
          // nem ures es nem is azonos a note szoveg
          if (
            req.body.note !== "" &&
            req.body.note !== objectrepository.exercise.note
          ) {
            //szoveget megvaltoztatja es azt elmenti
            objectrepository.exercise.note = req.body.note;
            objectrepository.exercise.save(function (err) {
              if (err) return handleError(err);
            });
            // kitorli a kivalasztott elemet hogy ujrainduljon a selection process
            objectrepository.exercise = undefined;
          }
          return next();
        } else return next();
      }
      

      

  };
};
