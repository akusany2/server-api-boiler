var router = require('express').Router(),
  authController = use('controllers/authController'),
  NewCarController = use('controllers/carController'),
  userController = use('controllers/userController');

var verifyAuth = authController.verifyAuth;

module.exports = router
  .get('/', function (req, res) {
    res.send('cars app')
  })

  // authenticate
  .get('/authenticate', function (req, res) { res.json({ body: 'Authentication route' }) })
  .post('/authenticate', authController.authenticate)

  // cars
  .get('/cars', NewCarController.findAll)
  .post('/cars/add', NewCarController.add)

  // users
  .get('/user/setup', userController.setup)
  .use('/user', verifyAuth, (router) => {
    router.get('/', userController.index)
      .post('/', userController.post)
      
  })


