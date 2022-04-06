//generic
var AuthMW = require("../middleware/generic/auth");
var RenderMW = require("../middleware/generic/render");

//user
var CheckRegisterMW = require("../middleware/user/checkRegister");
var CheckLoginMW = require("../middleware/user/checkLogin");

//exercise
var GetExerciseMW = require("../middleware/exercise/getExercise");
var SaveExerciseMW = require("../middleware/exercise/saveExercise");
var GetAllExercisesMW = require("../middleware/exercise/getAllExercises");
var GetSelectedExerciseMW = require("../middleware/exercise/getSelectedExercise");
var DeleteExerciseMW = require("../middleware/exercise/deleteExercise");

//workout
var GetWorkoutMW = require("../middleware/workout/getWorkout");
var GetTableSizeMW = require("../middleware/workout/getTableSize");
var GetTablePlacementMW = require("../middleware/workout/getTablePlacement");
var SaveWorkoutMW = require("../middleware/workout/saveWorkout");
var MakeNewTableMW = require("../middleware/workout/makeNewTable");

//navigation
var RedirectMW = require("../middleware/generic/redirect");

// models for mongoose db
var workoutModel = require("../models/workout");
var exerciseModel = require("../models/exercise");
var userModel = require("../models/user");

module.exports = function (app) {
  var objectRepository = {
    userModel: userModel,
    workoutModel: workoutModel,
    exerciseModel: exerciseModel,
  };

  // main page
  app.get(
    "/main",
    AuthMW(objectRepository),
    GetWorkoutMW(objectRepository),
    RenderMW("main")
  );

  // exercise related
  app.post(
    "/exercise/edit/:id",
    AuthMW(objectRepository),
    SaveExerciseMW(objectRepository),
    RedirectMW("/exercise")
  );

  app.get(
    "/exercise/edit/:id",
    AuthMW(objectRepository),
    GetExerciseMW(objectRepository),
    RenderMW("exerciseEditor")
  );

  app.get(
    "/exercise/:id",
    AuthMW(objectRepository),
    GetExerciseMW(objectRepository),
    RenderMW("exerciseView")
  );

  app.get(
    "/exercise",
    AuthMW(objectRepository),
    GetAllExercisesMW(objectRepository),
    RenderMW("exerciseList")
  );

  app.get(
    "/exercise/delete/:id",
    AuthMW(objectRepository),
    DeleteExerciseMW(objectRepository),
    RedirectMW("/exercise")
  );

  // workout related
  app.get(
    "/workout/exercise/:id",
    AuthMW(objectRepository),
    GetWorkoutMW(objectRepository),
    GetAllExercisesMW(objectRepository),
    GetSelectedExerciseMW(objectRepository),
    RenderMW("workoutMaker")
  );

  app.post(
    "/workout/exercise/:id",
    AuthMW(objectRepository),
    GetWorkoutMW(objectRepository),
    GetSelectedExerciseMW(objectRepository),
    GetTableSizeMW(objectRepository),
    GetTablePlacementMW(objectRepository),
    MakeNewTableMW(objectRepository),
    SaveWorkoutMW(objectRepository),
    RedirectMW("/workout")
  );

  app.get(
    "/workout",
    AuthMW(objectRepository),
    GetWorkoutMW(objectRepository),
    GetAllExercisesMW(objectRepository),
    RenderMW("workoutMaker")
  );

  app.post(
    "/workout",
    AuthMW(objectRepository),
    GetWorkoutMW(objectRepository),
    GetTableSizeMW(objectRepository),
    SaveWorkoutMW(objectRepository),
    RedirectMW("/workout")
  );

  // register
  app.get("/register", RenderMW("register"));

  app.post("/register", CheckRegisterMW(objectRepository), RedirectMW("/"));

  // login
  app.get("/", RenderMW("index"));

  app.post("/", CheckLoginMW(objectRepository), RedirectMW("/main"));

  // error handling
  app.use((err, req, res, next) => {
    res.end("Problem occured!");
    console.log(err);
  });
};
