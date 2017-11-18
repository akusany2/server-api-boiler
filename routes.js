var router = require('express').Router(),
  multer = require('multer'),
  config = use('config'),
  middlewares = use('middlewares'),
  authController = use('controllers/authController'),
  NewCarController = use('controllers/carController'),
  userController = use('controllers/userController'),
  uploadController = use('controllers/uploadController');

// multer upload 
var upload = config.multerUpload()
  ;
// verifyAuth adds token in res.locals - if passed
var verifyAuth = middlewares.verifyAuth;

module.exports = router
  .get('/', function (req, res) {
    res.json({ message: 'This is a car app!' })
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

  // file uploads
  .get('/upload', upload.single('file'), uploadController.index)
  .post('/upload', upload.single('file'), uploadController.upload)
  .get('/uploads', upload.array('files'), uploadController.index)
  .post('/uploads', upload.array('files'), uploadController.uploads)