# gbunitytoken



##目标
一个生成token的node.js方法。
当你需要获取一个token值，你需要为该方法传入一个私钥和一个公钥，可通过调用该方法返回相应的token值。



##安装
Via npm.
```
npm install gbunitytoken
```



##Table of apis
* gbunitytoken.parseHmacSha1Token(publicKey, privateKey)



##API
###gbunitytoken.parseHmacSha1Token(publicKey, privateKey)
* publicKey: 公钥
* privateKey: 密钥

生成token
在 node-gbunitytoken/index.js 中
```
var getToken = {};
getToken.parseHmacSha1Token = function(publicKey, privateKey){
  var hmac = crypto.createHmac('sha1', privateKey);
  hmac.update(publicKey);
  var token= encodeURIComponent(hmac.digest('base64'));
  return token;
};
module.exports = getToken;
```



##License
gbunitytoken  is licensed under the MIT.
