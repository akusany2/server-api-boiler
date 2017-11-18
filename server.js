require('./bootstrap');

var express = require('express'),
  compression = require('compression'),
  app = express(),
  bodyParser = require('body-parser'),
  config = use('config');

// Connection to db
require('./models/connection');

var newCarRoute = require('./routes/newCar'),
authenticateRoute = require('./routes/authenticate')
userRoute = require('./routes/user');

var verifyAuth = require('./controllers/authenticate').verifyAuth;

app
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token')
    res.setHeader('Access-Control-Allow-Credentials', true)

    next()
  })

  .use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
  // .use(compression())

  // .use(express.static('./public'))

  // .get('/', express.static('./public'))
  .get('/api/', function(req, res){
    res.send('cars app')
  })
  .use('/api/cars', newCarRoute)
  .use('/api/authenticate', authenticateRoute)
  .use('/api/user', verifyAuth, userRoute)
  // error handler
  .use(function(err, req, res, next){
    res.json(err);
  });

app.listen(config.port);
console.log(`Server listening to localhost:${config.port}`);
