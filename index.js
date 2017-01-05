var crypto = require('crypto');

var getSecret = {};
getSecret.parseHmacSha1Secret = function (publicKey, privateKey) {
    var hmac = crypto.createHmac('sha1', privateKey);
    hmac.update(publicKey);
    var secret = encodeURIComponent(hmac.digest('base64'));
    return secret;
};

module.exports = getSecret;