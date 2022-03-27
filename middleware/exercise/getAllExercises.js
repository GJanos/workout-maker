const requireOption = require("../generic/options");

/**
 * getre  lekeri az osszes exerciset esetleg a lekero fugv egy bool 	flaget is bilnethetnek hogy ne keregessek ugyan azt folyton le postra semmi
 */
module.exports = function (objectrepository) {

  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return function (req, res, next) {
    
    exerciseModel.find({},(error,allExercises) =>{
      if(error)
        return next(error);
      
      objectrepository.allExercises = allExercises;
      console.log(objectrepository.allExercises);
      return next();
    })

    // const ex1 = {
    //   id: 1,
    //   category: "mell",
    //   name: "peck fly",
    //   note: "nagyon jo sokat igen"
    // }

    // const ex2 = {
    //   id: 2,
    //   category: "mell",
    //   name: "bench press",
    //   note: "nagyon jo keveset igen",
    // };

    // const ex3 = {
    //   id: 3,
    //   category: "mell",
    //   name: "twek topii",
    //   note: "nagyon joxd",
    // };

    // const ex4 = {
    //   id: 4,
    //   category: "mell",
    //   name: "dfasdfad",
    //   note: "nasdasdaasdd",
    // };

    // res.locals.allExercises = [ex1, ex2, ex3, ex4];
  };
};
