var path = require('path'),
  multer = require('multer'),
  crypto = require('crypto')

var config = {
  port: process.env.PORT ? process.env.PORT : 3003,
  secret: 'hakunamatata',
  database: `mongodb://localhost:27017/serverApi`,

  // server settings
  cors: (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', `http://localhost:${config.port}`)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token')
    res.setHeader('Access-Control-Allow-Credentials', true)

    next()
  },

  multerUpload: () => {
    var storage = multer.diskStorage({
      destination: './uploads/',
      filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        cb(null, file.originalname.split(ext)[0] + '@' + Date.now() + ext)
      }
    })
    return multer({ storage: storage })
  }
}

module.exports = config;
