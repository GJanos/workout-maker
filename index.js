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




const express = require("express");
const app = express();

// to use ejs templating
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// to use req.body
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// to use sessions
const session = require("express-session");
app.use(
  session({
    secret: "csodalatos titok",
    cookie: {
      maxAge: 300000,
    },
    resave: true,
    saveUninitialized: false,
  })
);

/**
 * Include all the routes
 */
require("./routes/route")(app);

app.listen(3000, function () {
  console.log("started express on port 3000");
});
