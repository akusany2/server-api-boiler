var User = use('models/User'),
  bcrypt = require('bcrypt');

module.exports = {
  setup: (req, res) => {
    
      var saltRounds = 10,
      myPlaintextPassword = `asd`;
    
      bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    
        if (err) throw err;
        
        // create sample user
        var user = new User({
          name: 'Ankit',
          email: 'asd@asd.com',
          password: hash,
          role: 'admin',
          active: true,
          createdAt: new Date()
        });
    
        user.save(function(err, user){
          if (err) throw err;
          res.status(200).json(user)
        });
    
      });
    
    
  },
  index: (req, res) => {
    res.json({ token: res.locals.token })
  },
  post: (req, res) => {
    res.send('Post user route');
  }
}
