var userDb = require('../models/User');

var setup = (req, res) => {

  var saltRounds = 10,
  myPlaintextPassword = `asd`;

  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {

    if(err) throw err;
    var user = new User({
      name: 'Ankit',
      email: 'asd@asd.com',
      password: hash,
      role: 'admin',
      active: true,
      createdAt: new Date()
    });

    user.save(function(err, user){
      if(err) throw err;
      res.status(200);
    });

  });


}

module.exports = {
  setup: setup
}
