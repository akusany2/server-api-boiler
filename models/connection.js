var mongoose = require('mongoose'),
config = require('../config');

mongoose.connect(config.database, {
  useMongoClient: true
});

var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   var NewCarDb = mongoose.model('NewCar', mongoose.Schema({name: String}));
//   var newCar = new NewCarDb({
//     name: 'hola'
//   });
//   console.log(newCar.name);
//   console.log('Connected');
// });



module.exports = db;
