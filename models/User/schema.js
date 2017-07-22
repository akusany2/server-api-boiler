var Schema = require('mongoose').Schema;

var UserSchema = {
  name: String,
  email: String,
  password: String,
  role: String,
  active: Boolean,
  createdAt: Date,
  updatedAt: Date
}

module.exports = Schema(UserSchema);
