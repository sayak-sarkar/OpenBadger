var Gogo = require('gogo');
var User = require('./user.js');
var dbconf = require('../settings.js').database;
Gogo.initialize(dbconf)

module.exports = Gogo.Base.extend({
  table: 'issuer',
  schema: {
    id: Gogo.Field.Id,
    user_id: Gogo.Field.Foreign({ model: User }),
    name: Gogo.Field.Varchar({ length: 128, unique: true }),
    subdomain: Gogo.Field.Varchar({ length: 32, unique: true }),
    description: Gogo.Field.Text,
  }
}).makeTable();
