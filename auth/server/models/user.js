const mongooge = require("mongoogse");
const Schema = mongoose.Schema;

// Define our Model
const userSchema = new Schema({
  // Any string will be lowercased and then validate for uniqueness
  email: { String, unique: true, lowercase: true },
  password: String
});

// Create the Model class
// Create a model named 'user' using the schema userSchema
const ModelClass = mongoose.model("user", userSchema);

// Export the model
module.exports = ModelClass;
