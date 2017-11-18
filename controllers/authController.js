var User = use('models/User'),
jwt = require('jsonwebtoken'),
config = use('config'),
bcrypt = require('bcrypt');

module.exports = {
  authenticate: function(req, res){
    
      User.findOne({
        name: req.body.name
      }, function(err, user){
    
        if(err) throw err;
    
        if(!user) {
          res.json({success: false, message: 'Auth failed. Username not found.'});
        } else if(user){
    
          // check if password matches
          bcrypt.compare(req.body.password, user.password, function(err, status){
            
            if(status == false){
              res.json({success: false, message: 'Auth failed. Wrong password.'});
            } else{
              //if user is found and password is correct, create token
              var token = jwt.sign({ payload: {name: user.name, role: user.role} }, config.secret, { expiresIn: '2h' });
    
              res.json({
                success: true,
                message: 'Authenticated.',
                token: token
              })
            }
          });
    
        }
    
      });
    }
    
}
