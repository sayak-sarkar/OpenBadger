var vows = require('vows');
var assert = require('assert');

vows.describe('wut').addBatch({
  'will pass' : function () {
    assert.ok(true);
  },
}).export(module)