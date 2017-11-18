var router = require('express').Router(),
  authController = use('controllers/authenticate'),
  NewCarController = use('controllers/newCar'),
  userController = use('controllers/user');

var verifyAuth = use('controllers/authenticate').verifyAuth;

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
  .get('/user', verifyAuth, (req, res) => {
    res.json({ token: res.locals.token })
  })
  .post('/user', verifyAuth,  (req, res) => {
    // console.log(req.body);
    res.send('Post user route');
  })
  .get('/user/setup', userController.setup);


