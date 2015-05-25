'use strict';

var User = require('../../../models/user');

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/users/{id}',
    config: {
      description: 'find a user',
      handler: function(request, reply){
        if(request.auth.credentials._id){ return reply(request.auth.credentials._id); }

        var user = new User({spotId: request.auth.credentials.firebaseId});
        user.save(function(){
          return reply(user._id);
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'users.find'
};
