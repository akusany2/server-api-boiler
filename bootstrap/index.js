
var path = require('path')

// gobal require for root related path
global.use = function (pathname) {
  // console.log(path.join(__dirname, '../', pathname))
  return require(path.join(__dirname, '../', pathname))
}
