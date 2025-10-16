// ==UserScript==
// @name         宿舍校园网自动登录
// @namespace    https://geoisam.github.io
// @version      0.1.0
// @description  自动登录宿舍校园网
// @author       geoisam@qq.com
// @icon         https://www.tsinghua.edu.cn/favicon.ico
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @match        *://10.10.0.76/*
// @match        *://10.10.0.253/*
// @run-at       document-end
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


// 学号
const uid = ""
// 密码
const pwd = ""

setInterval(() => {
    var userid = document.querySelector("#userid")
    var passwd = document.querySelector("#passwd")
    if (userid && passwd) {
        userid.value = uid
        passwd.value = pwd
        let loginsubmit = document.querySelector("#loginsubmit")
        if (loginsubmit) {
            loginsubmit.click()
        }
    }
}, 99)

let logoutsubmit = document.querySelector("#logoutsubmit");
if (logoutsubmit) {
    clearInterval(login);
}
