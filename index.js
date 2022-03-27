// const exerciseModel = require("./models/exercise");
// const workoutModel = require("./models/workout");

// // exerciseModel.remove({});
// const deleteAllData = async () => {
//   try {
//     await workoutModel.deleteMany({});
//     console.log("All Data successfully deleted");
//   } catch (err) {
//     console.log(err);
//   }
// };

// //deleteAllData();

// const ex1 = new exerciseModel();
// ex1.name = "pull up";
// ex1.note = "slowly with full range of motion 5x5";
// ex1.save(function (err) {
//   if (err) return handleError(err)});

// const wo1 = new workoutModel();
// //wo1._exercises = [ex1, ex2, ex3];
// wo1.save(function (err) {
//   if (err) return handleError(err)});
  // if error res.next(error) vagy fene tudja
  // vagy akar same oldalra is visszavihet, es mondjuk body ala egy modal windowba belerakja js az insertHTMl-el a hibakodot
  //amit ha letezik condicionally megjelenitunk




var express = require("express");
var app = express();
app.set("view engine", "ejs");

// app.use(express.static("static"));
app.use(express.static(__dirname + "/public"));

var bodyParser = require("body-parser");
// var session = require("express-session");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Include all the routes
 */
require('./routes/route')(app);

// // app.get("/", (req, res, next) => {
// //   res.render("index",res.locals);
// // });

// // app.get("/main", (req, res, next) => {
// //   res.render("main", res.locals);
// // });

// // app.get("/register", (req, res, next) => {
// //   res.render("register", res.locals);
// // });

// /*
// app.post("/main", (req, res, next) => {
//   if(req.body.main !== undefined){
//     delete req.body.main;
//     console.log("main gombra kattint");
//     return res.redirect("/main"); //  /main/:userid ??
//   }
//   if (req.body.workoutMaker !== undefined) {
//     delete req.body.workoutMaker;
//     console.log("workoutMaker gombra kattint");
//     return res.redirect("/workout");
//   }
//   if (req.body.exerciseMaker !== undefined) {
//     delete req.body.exerciseMaker;
//     console.log("exerciseMaker gombra kattint");
//     return res.redirect("/exercise/new");
//   }
//   if (req.body.exerciseEditor !== undefined) {
//     delete req.body.exerciseEditor;
//     console.log("exerciseEditor gombra kattint");
//     return res.redirect("/exercise/edit");
//   }
//   if (req.body.exerciseDelete !== undefined) {
//     delete req.body.exerciseDelete;
//     console.log("exerciseDelete gombra kattint");
//     return res.redirect("/exercise/delete");
//   }
// });
// xdddddddddd 
// */


// // app.post("/", (req, res, next) => {
// //   if(req.body.register !== undefined){
// //     console.log("=> register");
// //     return res.redirect("/register");
// //   }
// //   if (req.body.username !== "" && req.body.password !== "") {
// //     console.log("=> main");
// //     return res.redirect("/main");
// //   }
  
// //   console.log("Failed to log in");
// //   return res.redirect("/");
  
    
// // });

// // app.get("/exercise/new", (req, res, next) => {
// //   res.render("exerciseEditor", res.locals);
// // });

// // app.post("/exercise/new", (req, res, next) => {
// //   console.log(req.body);
// // });



app.listen(3000, function () {
  console.log("started express on port 3000");
});
