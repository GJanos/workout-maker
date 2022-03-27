/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectRepository, viewName, options) {
  return function (req, res) {
    if(options === "static"){
      return res.render(viewName, res.locals);
    }
    else if (options === "dinamic") {
      return res.render(viewName, objectRepository);
    }
  };
};
