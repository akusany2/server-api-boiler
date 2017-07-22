var router = require('express').Router(),
User = require('../models/User'),
userController = require('../controllers/user'),
bcrypt = require('bcrypt');

router
  .get('/', (req, res) => {
    res.json({token: res.locals.token})
  })
  .post('/', (req, res) => {
    // console.log(req.body);
    res.send('Post user route');
  })
  .get('/setup', userController.setup);

module.exports = router;
