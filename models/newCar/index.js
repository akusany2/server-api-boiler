var newCarSchema = require('./schema'),
mongoose = require('mongoose');

var NewCar = mongoose.model('NewCar', newCarSchema);

module.exports = NewCar;
