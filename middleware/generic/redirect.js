/**
 * redirects user to given url
 */
module.exports = function (url) {
  return function (req, res) {
      return res.redirect(url);
  };
};
