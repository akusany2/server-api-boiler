var NewCar = require('../models/newCar');


var findAll = function(req, res) {
  NewCar.find((err, data) => {
    res.json(data)
  });
}

var add = function(req, res){
  var newCar = new NewCar({
    name: req.body.name
  });
  newCar.save(function(err, newCar){
    if(err) throw err;
    res.json({success: true, message: 'New car saved'})
  })
}

module.exports = {
  findAll: findAll,
  add: add
}
