import config from './config.js';

//qs转换
const qsStringify = function(obj, sep, eq) {
    sep = sep || '&';
    eq = eq || '=';
    let str = "";
    for (let k in obj) {
        str += k + eq + unescape(obj[k]) + sep
    }
    return str.slice(0, -1)
};

//qs解析
const qsParse = function(str) {
    let obj = new Object(); 
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
        let index = strs[i].indexOf("=")
        obj[strs[i].slice(0, index)] = unescape(strs[i].slice(index + 1));
    }
    return obj;
}

/**
 * 基础请求
 * @param {*} params 
 */
const request = function(options = {}) {
    const _config = config.requestBaseConfig;
    options.dataType = options.dataType || _config.dataType;
    options.url = options.url.indexOf('http') > -1 ? options.url : _config.baseUrl + options.url;

    // TODO：token增加等操作
	if (wx.getStorageSync('token')) {
		options.header.Cookie = "access_token=" + uni.getStorageSync('token');  // 部分机型会缓存cookie,导致账户串号
	}

    return uni.request(options);
}

/**
 * get请求(json格式)
 * @param {Object} options 
 */
export const requestGet = function(options) {
	options.method = 'GET';
	if(!options.header) options.header = {};
	options.header['Content-Type'] = 'application/json;charset=UTF-8';
	request(options);
}

/**
 * post请求(json格式)
 * @param {Object} options 
 */
export const requestPost = function(options) {
	options.method = 'POST';
	if(!options.header) options.header = {};
	options.header['Content-Type'] = 'application/json;charset=UTF-8';
	request(options);
}