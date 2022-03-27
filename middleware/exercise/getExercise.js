const requireOption = require("../generic/options");
/**
 * get-re next postra req.body/global object rereakja az adatokat majd next
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
