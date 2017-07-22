var UserSchema = require('./schema'),
mongoose = require('mongoose');

var User = mongoose.model('User', UserSchema);

module.exports = User;
