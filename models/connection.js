var mongoose = require('mongoose'),
config = use('config');

mongoose.connect(config.database, {
  useMongoClient: true
});

var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected');
// });


module.exports = db;
