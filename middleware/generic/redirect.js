/**
 * Using the template engine render the values into the template
 */
module.exports = function (url) {
  return function (req, res) {
      return res.redirect(url);
  };
};
