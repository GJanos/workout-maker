//generic
var AuthMW = require("../middleware/generic/auth");
var RenderMW = require("../middleware/generic/render");

//user
var GetUserMW = require("../middleware/user/getUser");
var CheckRegisterMW = require("../middleware/user/checkRegister");
var SaveUserMW = require("../middleware/user/saveUser");
var CheckLoginMW = require("../middleware/user/checkLogin");

//exercise
var GetExerciseMW = require("../middleware/exercise/getExercise");
var CheckExerciseMW = require("../middleware/exercise/checkExercise");
var SaveExerciseMW = require("../middleware/exercise/saveExercise");
var GetAllExercisesMW = require("../middleware/exercise/getAllExercises");
var LoadExerciseMW = require("../middleware/exercise/loadExercise");
var GetSelectedExerciseMW = require("../middleware/exercise/getSelectedExercise");
var DeleteExerciseMW = require("../middleware/exercise/deleteExercise");

//workout
var GetWorkoutMW = require("../middleware/workout/getWorkout");
var GetTableSizeMW = require("../middleware/workout/getTableSize");
var GetTablePlacementMW = require("../middleware/workout/getTablePlacement");
var SaveWorkoutMW = require("../middleware/workout/saveWorkout");
var MakeNewTableMW = require("../middleware/workout/makeNewTable");

// var userModel = require("../models/user");
var workoutModel = require("../models/workout");
var exerciseModel = require("../models/exercise");

module.exports = function (app) {
  var objectRepository = {
    // userModel: userModel,
    workoutModel: workoutModel,
    exerciseModel: exerciseModel,
  };

  

  app.use(
    "/register",
    GetUserMW(objectRepository),
    CheckRegisterMW(objectRepository),
    SaveUserMW(objectRepository),
    RenderMW(objectRepository, "register")
  );

  app.get(
    "/main",
    AuthMW(objectRepository),
    GetWorkoutMW(objectRepository),
    RenderMW(objectRepository, "main")
  );

  app.use(
    "/exercise/new",
    AuthMW(objectRepository),
    GetExerciseMW(objectRepository),
    CheckExerciseMW(objectRepository),
    SaveExerciseMW(objectRepository),
    RenderMW(objectRepository, "exerciseMaker", "static")
  );

  app.use(
    "/exercise/edit/",
    AuthMW(objectRepository),
    GetAllExercisesMW(objectRepository),
    GetSelectedExerciseMW(objectRepository),
    SaveExerciseMW(objectRepository),
    RenderMW(objectRepository, "exerciseEditor", "dinamic")
  );

  app.get(
    "/exercise/delete",
    AuthMW(objectRepository),
    GetAllExercisesMW(objectRepository),
    GetSelectedExerciseMW(objectRepository),
    DeleteExerciseMW(objectRepository),
    RenderMW(objectRepository, "exerciseDeleter", "dinamic")
  );

  app.post(
    "/exercise/delete/:id",
    AuthMW(objectRepository),
    // GetAllExercisesMW(objectRepository),
    // GetSelectedExerciseMW(objectRepository),
    DeleteExerciseMW(objectRepository),
    // RenderMW(objectRepository, "exerciseDeleter", "dinamic")
  );

  // app.use(
  //   "/workout/new",
  //   AuthMW(objectRepository),
  //   GetWorkoutMW(objectRepository),
  //   GetAllExercisesMW(objectRepository),
  //   GetSelectedExerciseMW(objectRepository),
  //   GetTableSizeMW(objectRepository),
  //   GetTablePlacementMW(objectRepository),
  //   MakeNewTableMW(objectRepository),
  //   SaveWorkoutMW(objectRepository),
  //   RenderMW(objectRepository, "workoutMaker")
  // );

  app.use(
    "/",
    GetUserMW(objectRepository),
    CheckLoginMW(objectRepository),
    RenderMW(objectRepository, "index")
  );

  app.use((err ,req, res, next) => {
    res.end("Problem occured!");
    console.log(err);
  });
};
