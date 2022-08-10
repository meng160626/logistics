/**
 * 格式化手机号
 * @param {String / Number} phone 
 */
const formatPhone = function(phone) {
    phone = phone + '';
    return phone.substring(0, 3) + " " + phone.substring(3, 7) + " " + phone.substring(7, 11);
}

export default {
    formatPhone
}