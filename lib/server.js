'use strict';

var Hapi = require('hapi');
var Mongoose = require('mongoose');
var Plugins = require('./tools/plugins');
var Server = require('./config/server');
var Config = require('./config');
var Basic = require('hapi-auth-basic');
// var Request = require('request');
// var Querystring = require('querystring');
// var CookieParser = require('cookie-parser');

// exports.init = function(cb){
  var server = new Hapi.Server(Server);
  // var io = require('socket.io');
  server.app.environment = Config.get();
  server.connection({port: server.app.environment.PORT});
  
  // var listener = server.listener;
  // var io = require('socket.io')(listener);
  //
  // io.on('connection', function(socket){
  //   console.log('sockets active from server.js');
  //   socket.emit('hello!');
  //   socket.on('burp', function(){
  //     socket.emit('excuse you');
  //   });
  // });
  
  Mongoose.connect(server.app.environment.MONGO_URL);
  
  Mongoose.connection.once('open', function(){
    server.register(Plugins, function(pluginErr){
      if(pluginErr){ return pluginErr; }
      
      // server.auth.strategy('simple', 'basic', false, server.plugins.authentication.authenticate);
      server.start(function(serverErr){
        // return cb(serverErr, server);
      });
    });
  });
// };
  module.exports = server;
