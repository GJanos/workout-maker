const requireOption = require("../generic/options");
/**
 * getre next, postra pedig megnezi req.body.name alapjan van e ilyen exercise, ha van ide vissza redirectel /exercise/new-ra ha uj akkor nextet hiv
 */
module.exports = function (objectrepository) {
  const exerciseModel = requireOption(objectrepository, "exerciseModel");
  return async function (req, res, next) {

    if (res.locals.name !== undefined && res.locals.note !== undefined){

      let ex;
      try{
        ex = await exerciseModel.findOne({
          name: res.locals.name,
        });
      }catch(error){
        return next(error);
      }
      if (!ex) {
        res.redirect("/exercise/new");
      } else return next();

    } else return next();
  };
};
