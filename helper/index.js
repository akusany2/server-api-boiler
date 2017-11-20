
var path = require('path'),
fs = require('fs')  

// gobal require for root related path
global.use = function (pathname) {
  return require(path.join(__dirname, '../', pathname))
}


// auto load modules from folder
global.loadDirModules = function (dir) {
  var obj = {}
  fs.readdirSync(dir).forEach((file) => {
    
    var fileName = file.split('.')[0];
    var pathName = path.join(dir, '/', file);
    
    obj[fileName] = use(pathName)
  })
  return obj
}