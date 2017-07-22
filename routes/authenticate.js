var router = require('express').Router(),
authController = require('../controllers/authenticate');

router
  .get('/', function(req, res) {res.json({body: 'Authentication route'})})
  .post('/', authController.authenticate);

module.exports = router;
