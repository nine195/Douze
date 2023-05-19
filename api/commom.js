
// 多维数组转一维数组
function Flattening(list) {
    try {
        if (list instanceof Array) {
            let flattened = [];
            list.forEach((item) => {
                if (Array.isArray(item)) {
                    flattened = flattened.concat(Flattening(item));
                } else {
                    flattened.push(item);
                }
            });
            return flattened;
        } else {
            throw 'Please pass in the array type'
        }
    } catch (error) {
        console.error(error)
    }
};

// 对象转url或者url转对象  is是否进行编码解码，默认进行
function UrlToData(data, is = true) {
    try {
        if ((typeof data === 'object' || typeof data === 'string') && (data != null && !Array.isArray(data))) {
            let params = null;
            if (typeof data === 'object') {

                params = Object.keys(data)
                    .map(key => `${is ? encodeURIComponent(key) : key}=${is ? encodeURIComponent(data[key]) : data[key]}`)
                    .join('&');
            }
            if (typeof data === 'string') {
                params = {};
                const keyValuePairs = data.split('&');
                keyValuePairs.forEach(pair => {
                    const [key, value] = pair.split('=');
                    params[is ? decodeURIComponent(key) : key] = is ? decodeURIComponent(value || '') : (value || '');
                });
            };
            return params

        } else {
            throw 'The parameter needs to be an object or a string'

        }


        // return params;
    } catch (error) {
        console.error(error)
    }

}
// 字符串大小写转换
function LetterCase(str, type) {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
            })
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
            })
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase()
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase()
        case 5:
            return str.toLowerCase()
        default:
            return str
    }
}
// 常用正则验证
function Regular(value, type) { 
    switch (type) {
        case 'phone':
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(value)
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(value)
        case 'card': 
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
        case 'pwd':
            return /^[a-zA-Z]\w{5,17}$/.test(value)
        case 'postal': 
            return /[1-9]\d{5}(?!\d)/.test(value)
        case 'QQ': 
            return /^[1-9][0-9]{4,9}$/.test(value)
        case 'email': 
            return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(value)
        case 'money': 
            return /^\d*(?:.\d{0,2})?$/.test(value)
        case 'IP':
            return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(value)
        case 'date': 
            return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(value) ||
                /^(\d{4})-(\d{2})-(\d{2})$/.test(value)
        case 'number': 
            return /^[0-9]$/.test(value)
        case 'english': 
            return /^[a-zA-Z]+$/.test(value)
        case 'chinese': 
            return /^[\u4E00-\u9FA5]+$/.test(value)
        case 'lower': 
            return /^[a-z]+$/.test(value)
        case 'upper': // 
            return /^[A-Z]+$/.test(value)
        default:
            return false
    }
}


export default{
    Flattening,
    UrlToData,
    LetterCase,
    Regular
}