'use strict';

exports.get = function(){
  var env = process.env.NODE_ENV || 'development';

  var common = {
    NODE_ENV: env,
    SPOTIFY_SECRET: process.env.SPOTIFY_SECRET,
    SPOTIFY_EXPIRE: 24
  };

  var environments = {
    development: {
      PORT: process.env.PORT || 8000,
      MONGO_URL: 'mongodb://localhost/musicman-dev'
    },
    test: {
      PORT: process.env.PORT || 0,
      MONGO_URL: 'mongodb://localhost/musicman-test',
      SPOTIFY_EXPIRE: Infinity,
      SPOTIFY_TOKEN: process.env.FIREBASE_TOKEN
    },
    production: {
      PORT: process.env.PORT || 0,
      MONGO_URL: 'mongodb://heroku.mongolab.com/musicman-production'
    }
  };

  var environment = environments[env];

  Object.keys(common).forEach(function(key){
    if(!environment[key]){
      environment[key] = common[key];
    }
  });

  return environment;
};
