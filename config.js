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
  }
}

module.exports = config;
