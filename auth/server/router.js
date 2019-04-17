const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

// session = cookie session
// false bc we want token auth
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  // get maps to GET request to
  // PARAMS: req - incoming request
  //         res - response to send back
  //         next - errorhandling
  app.post("/signup", Authentication.signup);

  // Should be protected - verify with localLogin strategy
  app.post("/signin", requireSignin, Authentication.signin);

  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
};
