if (!module.parent) {
  var fs = require('fs');
  var files = fs.readdirSync(__dirname)
    .filter(function (f) { return f !== 'index.js' });

  files.forEach(function (f) {
    var name = f.charAt(0).toUpperCase() + f.replace('.js', '').substring(1);
    root[name] = require('./' + f);
  });
  
  var repl = require('repl').start("models> ");
}
