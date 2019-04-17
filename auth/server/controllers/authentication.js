const User = require("../models/user");
const jwt = require("jwt-simple");
const config = require("../config");

function tokenForUser(user) {
  // as a convention, jwt's have sub (subject) prop
  // subject = user.id
  // iat = issued at time
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide an email and password" });
  }

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
    res.json({ token: tokenForUser(user) });
  });
};
