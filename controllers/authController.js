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
    },
    
    // check token for all routes
    // if token found add it to res.locals.token for that particular request chain
    verifyAuth: function(req, res, next){
      var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
      if(token){
        jwt.verify(token, config.secret, (err, decoded) => {
          // expired, incorrect tokens will be handled in this
          // err.TokenExpiredError for expired tokens
          if(err) res.json({error: true, message: err});
          res.locals.token = decoded;
          next();
        })
      } else{
        var err = {error: true, message: 'No token defined'};
        next(err);
      }
    
    }
    
}
