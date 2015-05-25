/* eslint no-reserved-keys: 0 */

'use strict';

var Mongoose = require('mongoose');
var SpotifyApi = require('spotify-web-api-node');

var spotify = new SpotifyApi({
  clientId: 'cb95aa216fe74c4d8231fa9fe432c364',
  clientSecret: 'd515f02d3a59460f936884c71138051e',
  redirectUri: 'http://localhost:8000/callback'
});

var scopes = ['user-read-private', 'user-read-email'];
var state = generateRandomString(16);

var authorizeUrl = spotify.createAuthorizeURL(scopes, state);

// var code = 'AQCa5Bx8Wx0qMSAZJqn4HRr24yYKdMQOjJ5tzCzQKqTVw4axgqZaBeaR6s8fLnjl1uR_Un2oOoCUoPJnPbHIMCqkJobeivY2DCpCykcloQ0GHJFJl2929eLe8I6cbNtU2A7EDeEfAaqCi9EYbQ7dgkj8BUIqpYgFyT7wM5ieWo7ACVNjxVWDAzsTC9_39rXHy3eErt11rYayFrMOUobKfnc3x5lIVM525cuP6kMjL79-gLLaAJ4L_Q';

spotify.clientCredentialsGrant()
  .then(function(data) {
    // console.log('The access token expires in ' + data.body['expires_in']);
    // console.log('The access token is ' + data.body['access_token']);
    console.log(data.body);
    // Save the access token so that it's used in future calls
    spotify.setAccessToken(data.body['access_token']);
  }, function(err) {
        console.log('Something went wrong when retrieving an access token', err);
  });
  console.log('The credentials are ' + spotify.getCredentials());
  console.log('The access token is ' + spotify.getAccessToken());
console.log('The refresh token is ' + spotify.getRefreshToken());
console.log('The redirectURI is ' + spotify.getRedirectURI());
console.log('The client ID is ' + spotify.getClientId());
console.log('The client secret is ' + spotify.getClientSecret());
// spotify.getUser('theblitzkrieg')
//   .then(function(data) {
//     console.log('Some information about this user', data.body);
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });
// spotify.authorizationCodeGrant(code)
//   .then(function(data) {
//     console.log('The token expires in ' + data.body['expires_in']);
//     console.log('The access token is ' + data.body['access_token']);
//     console.log('The refresh token is ' + data.body['refresh_token']);
//
//     // Set the access token on the API object to use it in later calls
//     spotify.setAccessToken(data.body['access_token']);
//     spotify.setRefreshToken(data.body['refresh_token']);
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });
// spotify.getMe()
//   .then(function(data) {
//     console.log('Some information about the authenticated user', data.body);
//   }, function(err) {
//     console.log('Something went wrong!', err);
//   });






console.log(spotify.getCredentials);








function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}



module.exports = Spotify;
