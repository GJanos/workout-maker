var expect = require("chai").expect;
var getTablePlacementMW = require("../middleware/workout/getTablePlacement");
var workoutModel = require("../models/workout");

describe("makeNewTable middleware ", function () {
  it("selected row and col are fit for every condition so new exercise will be placed there", function (done) {
    const mw = getTablePlacementMW({});

    const workout = new workoutModel();
    workout.row = 3;
    workout.col = 3;
    workout.exercises = [];

    const restMock = {
      locals: {
        workout: workout,
      },
    };

    mw(
      {
        body: {
          exerciseRow: 2,
          exerciseCol: 2,
        },
      },
      restMock,
      () => {
        expect(restMock.locals.row).to.eql(2);
        expect(restMock.locals.col).to.eql(2);
        done();
      }
    );
  });

  // second part

  it("selected row and col are not fit for every condition so new exercise not will be placed there", function (done) {
    const mw = getTablePlacementMW({});

    const workout = new workoutModel();
    workout.row = 3;
    workout.col = 3;
    workout.exercises = [];

    //kovacs.ors@edu.bme.gu
    const restMock = {
      locals: {
        workout: workout,
      },
    };

    mw(
      {
        body: {
          exerciseRow: 4,
          exerciseCol: "2",
        },
      },
      restMock,
      () => {
        expect(restMock.locals.row).to.eql(undefined);
        expect(restMock.locals.col).to.eql(undefined);
        done();
      }
    );
  });
});
