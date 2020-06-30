// 获取类型
function getType(obj) {
    const type = Object.prototype.toString.call(obj)
                         .slice(8, -1)
    return type
}

// 运行exe文件，仅支持ie浏览器
function Run(strPath) {
    try {
        var objShell = new ActiveXObject("wscript.shell");
        objShell.Run(strPath);
        objShell = null;
    }
    catch(e) {
        alert('请使用IE浏览器进行此操作并检查该软件安装路径是否正确!')
    }
}

// 获取当前日期，日期格式：2020-01-01
function getNowDate() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month > 9 ? month : '0' + month;;
    day = day > 9 ? day : '0' + day;
    return `${year}-${month}-${day}`;
}

/* 
    将时间戳转换为日期格式
    @params：
        @timeStr：时间戳字符串
*/
function getTimeStr(timestr) {
    const date = new Date(timestr)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month > 9 ? month : '0' + month;;
    day = day > 9 ? day : '0' + day;
    return `${year}-${month}-${day}`;
}

/* 
    将日期格式转换为时间戳
    @params：
        @dateStr：日期格式字符串（2020-01-11）
*/
function getUnixTime(dateStr){
    var newstr = dateStr.replace(/-/g,'/'); 
    var date =  new Date(newstr); 
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}

// 验证手机号
function checkPhone(phone) {
    const reg = /^1[356789]\d{9}/
    return reg.test(phone)
}

// 验证邮箱
function checkEmail(email) {
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    return reg.test(email)
}