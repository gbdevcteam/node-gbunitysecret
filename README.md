# gbunitysecret



##目标
一个得到加密结果的node.js方法。
当你需要为使用sha1加密运算时，你需要为该方法传入一个私钥和一个公钥，可通过调用该方法实现sha1加密。



##安装
Via npm.
```
npm install gbunitysecret
```



##api列表
* gbunitysecret.parseHmacSha1Secret(publicKey, privateKey)



##API
###gbunitysecret.parseHmacSha1Secret(publicKey, privateKey)
* publicKey: 公钥
* privateKey: 密钥

在 node-gbunitytoken/index.js 中生成token
```
var getSecret = {};
getSecret.parseHmacSha1Secret = function (publicKey, privateKey) {
    var hmac = crypto.createHmac('sha1', privateKey);
    hmac.update(publicKey);
    var secret = encodeURIComponent(hmac.digest('base64'));
    return secret;
};
```



##License
gbunitysecret  is licensed under the MIT.
