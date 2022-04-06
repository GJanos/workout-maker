const requireOption = require("../generic/options");
/**
 * if id = new makes a placeholder object otherwise finds one ex from db and stores it
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
      const id = req.params.id;
      if(id==="new"){
        res.locals.exercise = {name: "", note:""};
      }else{
        res.locals.exercise = await exerciseModel.findOne({_id: id});
      }
      return next();
  };
};
