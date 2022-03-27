var requireOption = require("../generic/options");


/**
 * res.localsra lekeri db-tol a workout tablazatot getre, postra next
 */
module.exports = function (objectrepository) {

  const workoutModel = requireOption(objectrepository,"workoutModel");

  return function (req, res, next) {


    // const ex1 = {
    //   id: 1,
    //   category: "mell",
    //   name: "peck fly",
    //   note: "nagyon jo sokat igen",
    // };

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

    // const workout = {
    //   id: 1,
    //   row: 2,
    //   col: 3,
    //   ownerName: "janos",
    //   exercises: [
    //     [ex1, ex2, null],
    //     [ex3, ex2, ex1],
    //   ],
    // };
    // res.locals.workout = workout;
    // res.locals.username = "janos";
    return next();
  };
};
