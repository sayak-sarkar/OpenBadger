if (!module.parent) {
  var colors = require('colors');
  var fs = require('fs');
  var files = fs.readdirSync(__dirname)
    .filter(function (f) { return f !== 'index.js' });

  console.log("starting REPL with the following models in the global namespace:");
  
  files.forEach(function (f) {
    var name = f.charAt(0).toUpperCase() + f.replace('.js', '').substring(1);
    root[name] = require('./' + f);
    console.log("* ".green + name);
  });
  
  var repl = require('repl').start("models> ");
}
