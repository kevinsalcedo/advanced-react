const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypyt = require("bcrypt-nodejs");

// Define our Model
const userSchema = new Schema({
  // Any string will be lowercased and then validate for uniqueness
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Save Hook, encrypt password
// Before saving a user, salt the password
userSchema.pre("save", function(next) {
  // Get instance of user model
  const user = this;

  // Generate 10 round salt
  bcrypyt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    // Hash salt + password
    bcrypyt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }
      // Set password to resulting salted hash
      user.password = hash;
      next();
    });
  });
});

// Add an instance method to compare a candidate pass to the actual
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  // bcrypt does password comparison for us
  bcrypyt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Create the Model class
// Create a model named 'user' using the schema userSchema
const ModelClass = mongoose.model("user", userSchema);

// Export the model
module.exports = ModelClass;
