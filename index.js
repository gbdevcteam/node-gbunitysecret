var crypto = require('crypto');

var getToken = {};
getToken.parseHmacSha1Token = function(publicKey, privateKey){
  var hmac = crypto.createHmac('sha1', privateKey);
  hmac.update(publicKey);
  var token= encodeURIComponent(hmac.digest('base64'));
  return token;
};

module.exports = getToken;