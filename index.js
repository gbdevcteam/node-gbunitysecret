/*function： parseHmacSha1Token
 *var hmac = require('crypto').createHmac('sha1', privateKey);
 *hmac.update(publicKey);
 *var token= encodeURIComponent(hmac.digest('base64'));
 */  

var getToken = {};
getToken.parseHmacSha1Token = function(publicKey, privateKey){
  var crypto = require('crypto');
  var hmac = crypto.createHmac('sha1', privateKey);
  hmac.update(publicKey);
  var token= encodeURIComponent(hmac.digest('base64'));
  return token;
}

module.exports = getToken;
// module.exports = {
//   parseHmacSha1Token: function (publicKey, privateKey) {
//       return parseHmacSha1Token(publicKey, privateKey);
//   }
// }
