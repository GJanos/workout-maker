/**
 * ha helyes a req.body es meg nincs ilyen felhasznalo+jelszo kombo akkor redirect /main re ha van ilyen redirect / re ha hibas akkor is
 */
module.exports = function (objectrepository) {
  return function (req, res, next) {
    return next();
  };
};
