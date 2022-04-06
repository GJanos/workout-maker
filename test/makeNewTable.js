var expect = require("chai").expect;
var makeNewTableMW = require("../middleware/workout/makeNewTable");
var exerciseModel = require("../models/exercise");
var workoutModel = require("../models/workout");

describe("makeNewTable middleware ", function () {
  it("res.locals.exercise is defined, places exercise in workout", function (done) {
    const mw = makeNewTableMW({});

    const ex = new exerciseModel();
    ex.name = "sit up";
    ex.note = "gerincedre figyelj";

    const workout = new workoutModel();
    workout.row = 3;
    workout.col = 3;
    workout.exercises = [];

    mw(
      {},
      {
        locals: {
          workout: workout,
          exercise: ex,
          row: 2,
          col: 2,
        },
      },
      () => {
        expect(workout.exercises[4].name).to.eql("sit up");
        done();
      }
    );
  });

  // second part

  it("res.locals.exercise is undefined", function (done) {
    const mw = makeNewTableMW({});

    const workout = new workoutModel();
    workout.row = 3;
    workout.col = 3;
    workout.exercises = [];

    mw(
      {},
      {
        locals: {
          workout: workout,
          exercise: undefined,
          row: 2,
          col: 2,
        },
      },
      () => {
        expect(typeof exercise).to.eql("undefined");
        expect(workout.exercises.length).to.eql(0);
        done();
      }
    );
  });
});
