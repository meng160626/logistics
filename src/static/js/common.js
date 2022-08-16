/**
 * 格式化手机号
 * @param {String / Number} phone 
 */
const formatPhone = function(phone) {
    phone = phone + '';
    return phone.substring(0, 3) + " " + phone.substring(3, 7) + " " + phone.substring(7, 11);
}

/**
 * 格式化钱数
 * @param {String / Number} money 
 */
const formatMoney = function(money) {
    money = parseFloat(money);
    let str = money.toFixed(2)  // 只取2位小数
    let l = str.split('.')[0] // 获取整数位
    let r = str.split('.')[1] // 获取小数位
    let arr = [] // 用于保存结果
  
    let len = Math.ceil(l.length / 3) // 3位数一个 `,`
    for (let i = 0; i < len; i++) {
      arr.unshift(l.slice(-3 * (i + 1), -3 * i || undefined)) // 如果传(-3,0)获取不到参数，将0换成undefined相当于没传
      if (i !== len - 1) { // 最后一次截取不加 `,`了
        arr.unshift(',')
      }
    }
    if (r === '00') {
      return arr.join('');
    }
    return arr.join('') + '.' + r;
}

export default {
    formatPhone,
    formatMoney
}