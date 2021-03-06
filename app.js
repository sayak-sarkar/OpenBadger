
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var path = require('path');
var hogan = require('hogan.js');
var hoganadapter = require('./lib/hogan-express.js');

var app = module.exports = express.createServer();

// default view engine
app.set('view engine', 'hogan.js');
app.register('hogan.js', hoganadapter.init(hogan));

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.use(express.static(path.join(__dirname, "static")));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  
  // pull out the subdomain from a request.
  app.use(function (request, response, next) {
    var matches = request.headers.host.match(/([a-z0-9_\-]+)\.(.+)\.(.+)/);
    var subdomain = matches ? matches[1] : null;
    request.subdomain = subdomain;
    next();
  })
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.login);
app.get('/index', routes.index);
app.get('/org/edit', routes.org_editor);
app.get('/badge', routes.badge);


if (!module.parent) {
  app.listen(3000, function(){
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
  });
}
