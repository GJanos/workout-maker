/**
 * get-re next postra req.body/global object rereakja az adatokat majd next
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    if (req.body.name !== undefined && req.body.note){
      res.locals.name = req.body.name;
      res.locals.note = req.body.note;
      return next();
    }else return next();
  };
};
