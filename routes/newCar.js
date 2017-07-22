var router = require('express').Router(),
config = require('../config'),
NewCarController = require('../controllers/newCar');

router
  .get('/', NewCarController.findAll)
  .post('/add', NewCarController.add);

module.exports = router;
