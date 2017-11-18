require('./bootstrap');

var express = require('express'),
  compression = require('compression'),
  app = express(),
  bodyParser = require('body-parser'),
  config = use('config'),
  routes = use('routes');

// Connection to db
require('./models/connection');


app
  .use(config.cors)

  .use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
  // .use(compression())

  // .use(express.static('./public'))

  // .get('/', express.static('./public'))
  
  .use('/api', routes)
  // error handler
  .use(function(err, req, res, next){
    res.json(err);
  });

app.listen(config.port);
console.log(`Server listening to localhost:${config.port}`);
