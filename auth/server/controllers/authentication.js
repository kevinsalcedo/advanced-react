const User = require("../models/user");

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If exists, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
  });

  // If user exists, return error
  const user = new User({ email, password });

  // Else, create and save user record
  user.save(function(err) {
    if (err) {
      return next(err);
    }

    // Respond to recquest
    res.json({ success: true });
  });
};
