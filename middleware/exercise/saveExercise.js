const requireOption = require("../generic/options");
/**
 * in case of faulty parameters redirects to try again, then maked and finds ex
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
    const id = req.params.id;
    const body = req.body;
    let exercise;

    if (body.name === "" || body.note === "") {
      return res.redirect(`/exercise/edit/${id}`);
    }

    if (id === "new") {
      exercise = new exerciseModel();
    } else {
      exercise = await exerciseModel.findOne({ _id: id });
    }
    exercise.name = body.name;
    exercise.note = body.note;
    exercise.save((err) => {
      if (err) return next(err);
      return next();
    });
  };
};
