var router = require('express').Router(),
  authController = use('controllers/authController'),
  NewCarController = use('controllers/carController'),
  userController = use('controllers/userController');

// verifyAuth adds token in res.locals - if passed
var verifyAuth = authController.verifyAuth;

module.exports = router
  .get('/', function (req, res) {
    res.json({message: 'This is a car app!'})
  })

  // authenticate
  .get('/authenticate', function (req, res) { res.json({ body: 'Authentication route' }) })
  .post('/authenticate', authController.authenticate)

  // cars
  .get('/cars', NewCarController.findAll)
  .post('/cars/add', NewCarController.add)

  // users
  .get('/user/setup', userController.setup)
  .get('/user', verifyAuth, userController.index)
  .post('/user', verifyAuth, userController.post)
  


