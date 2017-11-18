var config = {
  port: process.env.PORT ? process.env.PORT : 3003,
  secret: 'hakunamatata',
  database: `mongodb://localhost:27017/carapp`
}

module.exports = config;
