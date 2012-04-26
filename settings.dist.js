var environments = {
  development: {
    database: {
      driver: 'mysql',
      host: '127.0.0.1',
      user: 'root',
      database: 'openbadger',
    }
  },
  
  test: {
    database: {
      driver: 'mysql',
      host: '127.0.0.1',
      user: 'root',
      database: 'test_openbadger',
    }
  }
};

module.exports = environments[process.env['NODE_ENV'] || 'development'];