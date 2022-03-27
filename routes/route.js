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
var SaveExerciseMW = require("../middleware/exercise/saveExercise");
var GetAllExercisesMW = require("../middleware/exercise/getAllExercises");
var DeleteExerciseMW = require("../middleware/exercise/deleteExercise");

//workout
var GetWorkoutMW = require("../middleware/workout/getWorkout");
var GetTableSizeMW = require("../middleware/workout/getTableSize");
var GetTablePlacementMW = require("../middleware/workout/getTablePlacement");
var SaveWorkoutMW = require("../middleware/workout/saveWorkout");
var MakeNewTableMW = require("../middleware/workout/makeNewTable");

var RedirectMW = require("../middleware/generic/redirect");

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
    RenderMW("register")
  );

  app.get(
    "/main",
    GetWorkoutMW(objectRepository),
    RenderMW("main")
  );

  app.post(
    "/exercise/edit/:id",
    SaveExerciseMW(objectRepository),
      RedirectMW("/exercise")
  );

  app.get(
      "/exercise/edit/:id",
      GetExerciseMW(objectRepository),
      RenderMW("exerciseEditor")
  );

  app.get(
      "/exercise/:id",
      GetExerciseMW(objectRepository),
      RenderMW("exerciseView")
  )

  app.get(
      "/exercise",
      GetAllExercisesMW(objectRepository),
      RenderMW("exerciseList")
  )

  app.get(
    "/exercise/delete/:id",
    DeleteExerciseMW(objectRepository),
      RedirectMW("/exercise")
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
    RenderMW("index")
  );

  app.use((err ,req, res, next) => {
    res.end("Problem occured!");
    console.log(err);
  });
};
