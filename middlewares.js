var User = use('models/User'),
  jwt = require('jsonwebtoken'),
  config = use('config'),
  bcrypt = require('bcrypt');


module.exports = {
  // check token for all routes
  // if token found add it to res.locals.token for that particular request chain
  verifyAuth: (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
      jwt.verify(token, config.secret, (err, decoded) => {
        // expired, incorrect tokens will be handled in this
        // err.TokenExpiredError for expired tokens
        if (err) res.json({ error: true, message: err });
        res.locals.token = decoded;
        next();
      })
    } else {
      var err = { error: true, message: 'No token defined' };
      next(err);
    }

  }
}