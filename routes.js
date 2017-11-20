var router = require('express').Router(),
  multer = require('multer'),
  config = use('config'),
  middlewares = use('middlewares'),
  controllers = loadDirModules('controllers')


// multer upload 
var upload = config.multerUpload()

// verifyAuth adds token in res.locals - if passed
var verifyAuth = middlewares.verifyAuth;

module.exports = router
  .get('/', function (req, res) {
    res.json({ message: 'This is a car app!' })
  })

  // authenticate
  .get('/authenticate', function (req, res) { res.json({ body: 'Authentication route' }) })
  .post('/authenticate', controllers.authController.authenticate)

  // cars
  .get('/cars', controllers.carController.findAll)
  .post('/cars/add', controllers.carController.add)

  // users
  .get('/user/setup', controllers.userController.setup)
  .get('/user', verifyAuth, controllers.userController.index)
  .post('/user', verifyAuth, controllers.userController.post)

  // file uploads
  .get('/upload', upload.single('file'), controllers.uploadController.index)
  .post('/upload', upload.single('file'), controllers.uploadController.upload)
  .get('/uploads', upload.array('files'), controllers.uploadController.index)
  .post('/uploads', upload.array('files'), controllers.uploadController.uploads)