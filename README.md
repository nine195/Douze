下载
```
npm install douze-api
```
使用
```js
const Douze=require('douze-api')
```
api
```js
/**
 * 时间格式化
 * @param {(string|number)} Timestamp
 * @param {String} type 
 * @returns {String} '2023-01-01 01:01:00'
 * year: ["YYYY", 'yyyy'], month: ['MM'],day: ["DD", 'dd'],hour: ["hh", 'HH'],minute: ["mm"],second: ["ss", 'SS'],
 * 
 */
Douze.Time(1672506060000,'YYYY-MM-DD hh:mm:ss');
/**
 * 人性化时间
 * @param {(string|number)} datetime
 */
Douze.formatTime(1672506060000);
/**
 * 多维数组转一维
 * @param {array} list
 * @returns {array} [1,2,3,4]
 */
Douze.Flattening([1,[2,[3],[4]]])

/**
 * url转object，或obj转url
 * @param {object,string} data
 * @param {Boolean} is 是否编码解码
 * @returns {array} name=Douze&age=18  || {name:Douze,age:18}
 */
Douze.UrlToData({name:'Douze',age:18},false)
Douze.UrlToData('name=Douze&age=18 ',false)

/**
 * 字符串大小写转换 
 * @param {string} str
 * @param {number} type  1:首字母大写  2：首字母小写  3：大小写转换  4：全部大写  5：全部小写
 * @returns {string} 'abcd'
 */
Douze.LetterCase('ABCD',5);


/**
 * 字符串大小写转换 
 * @param {string} value
 * @param {string} type 
 * phone =>手机号码
 * tel => 座机
 * card => 身份证
 * pwd =>  密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
 * postal => 邮政编码
 * QQ => QQ号
 * email => 邮箱
 * money => 金额(小数点2位)
 * IP => Ip
 * date =>  日期时间
 * number =>  数字
 * english => 英文
 * chinese => 中文
 * lower => 小写
 * upper => 大写
 * @returns {Boolean} true || false
 */
Douze.Regular('nine195@qq.com',email)
```
```
陆续更新~
有更好的建议可以联系我：
wx:Nine195
qq:1959762008
email：nine195@qq.com
代码地址：https://github.com/nine195/Douze
```
