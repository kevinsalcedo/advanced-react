const Authentication = require("./controllers/authentication");

module.exports = function(app) {
  // get maps to GET request to
  // PARAMS: req - incoming request
  //         res - response to send back
  //         next - errorhandling
  app.post("/signup", Authentication.signup);
};
