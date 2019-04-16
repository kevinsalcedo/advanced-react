module.exports = function(app) {
  // get maps to GET request to
  // PARAMS: req - incoming request
  //         res - response to send back
  //         next - errorhandling
  app.get("/", function(req, res, next) {
    res.send(["waterbottle", "phone", "paper"]);
  });
};
