const requireOption = require("../generic/options");
/**
 * exerciset elmenti db-be pesze ha get akkor next
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");

  return async function (req, res, next) {
      const id = req.params.id;
      const body = req.body;
      if(id==="new"){
           let exercise = new exerciseModel();
          exercise.name = body.name || "";
          exercise.note = body.note || "";
          exercise.save((err)=>{
              if(err) return next(err);
              return next()
          })
      }else{
          let exercise = await exerciseModel.findOne({_id: id})
          exercise.name = body.name || "";
          exercise.note = body.note || "";
          exercise.save((err)=>{
              if(err) return next(err);
              return next()
          })
      }


  };
};
