var Gogo = require('gogo');
var dbconf = require('../settings.js').database;
Gogo.initialize(dbconf)

module.exports = Gogo.Base.extend({
  table: 'user',
  schema: {
    id: Gogo.Field.Id,
    email: Gogo.Field.Varchar(255),
    lastlogin: Gogo.Field.Time
  },
  validators: {
    email: Gogo.Validator.Email
  }
}).makeTable();
