// ==UserScript==
// @name         华米运动步数修改
// @namespace    https://geoisam.github.io
// @version      1.0.2
// @description  每天自动修改并同步 微信运动/支付宝运动 步数，需自行下载 Zepp Life App 注册并登录绑定第三方数据
// @author       geoisam@qq.com
// @icon         data:image/png;base64,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
// @homepage     https://scriptcat.org/script-show-page/4285
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @crontab      * 8-23 once * *
// @connect      api-user.zepp.com
// @connect      account.zepp.com
// @connect      account-cn.zepp.com
// @connect      api-mifit-cn.zepp.com
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_log
// ==/UserScript==


/* ==UserConfig==
Config:
    user:
        title: 账号（手机号/邮箱）
        type: text
    pwd:
        title: 密码（字母+数字>=8）
        type: text
        min: 8
        password: true
    min:
        title: 步数最小值（min：1）
        type: number
        default: 17760
        min: 1
        max: 100000
    max:
        title: 步数最大值（max：100000）
        type: number
        default: 82240
        min: 1
        max: 100000
==/UserConfig== */


const pjs = {
    timesLOG: 0,
    loginURL: "https://user.zepp.com/universalLogin/index.html#/login?project_redirect_uri=https://www.huami.com/",
    dataJSON: "%5B%7B%22data_hr%22%3A%22%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F9L%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FVv%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F0v%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F9e%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F0n%5C%2Fa%5C%2F%5C%2F%5C%2FS%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F0b%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F1FK%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FR%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F9PTFFpaf9L%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FR%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F0j%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F9K%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FOv%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2Fzf%5C%2F%5C%2F%5C%2F86%5C%2Fzr%5C%2FOv88%5C%2Fzf%5C%2FPf%5C%2F%5C%2F%5C%2F0v%5C%2FS%5C%2F8%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FSf%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2Fz3%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F0r%5C%2FOv%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FS%5C%2F9L%5C%2Fzb%5C%2FSf9K%5C%2F0v%5C%2FRf9H%5C%2Fzj%5C%2FSf9K%5C%2F0%5C%2F%5C%2FN%5C%2F%5C%2F%5C%2F%5C%2F0D%5C%2FSf83%5C%2Fzr%5C%2FPf9M%5C%2F0v%5C%2FOv9e%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FS%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2Fzv%5C%2F%5C%2Fz7%5C%2FO%5C%2F83%5C%2Fzv%5C%2FN%5C%2F83%5C%2Fzr%5C%2FN%5C%2F86%5C%2Fz%5C%2F%5C%2FNv83%5C%2Fzn%5C%2FXv84%5C%2Fzr%5C%2FPP84%5C%2Fzj%5C%2FN%5C%2F9e%5C%2Fzr%5C%2FN%5C%2F89%5C%2F03%5C%2FP%5C%2F89%5C%2Fz3%5C%2FQ%5C%2F9N%5C%2F0v%5C%2FTv9C%5C%2F0H%5C%2FOf9D%5C%2Fzz%5C%2FOf88%5C%2Fz%5C%2F%5C%2FPP9A%5C%2Fzr%5C%2FN%5C%2F86%5C%2Fzz%5C%2FNv87%5C%2F0D%5C%2FOv84%5C%2F0v%5C%2FO%5C%2F84%5C%2Fzf%5C%2FMP83%5C%2FzH%5C%2FNv83%5C%2Fzf%5C%2FN%5C%2F84%5C%2Fzf%5C%2FOf82%5C%2Fzf%5C%2FOP83%5C%2Fzb%5C%2FMv81%5C%2FzX%5C%2FR%5C%2F9L%5C%2F0v%5C%2FO%5C%2F9I%5C%2F0T%5C%2FS%5C%2F9A%5C%2Fzn%5C%2FPf89%5C%2Fzn%5C%2FNf9K%5C%2F07%5C%2FN%5C%2F83%5C%2Fzn%5C%2FNv83%5C%2Fzv%5C%2FO%5C%2F9A%5C%2F0H%5C%2FOf8%5C%2F%5C%2Fzj%5C%2FPP83%5C%2Fzj%5C%2FS%5C%2F87%5C%2Fzj%5C%2FNv84%5C%2Fzf%5C%2FOf83%5C%2Fzf%5C%2FOf83%5C%2Fzb%5C%2FNv9L%5C%2Fzj%5C%2FNv82%5C%2Fzb%5C%2FN%5C%2F85%5C%2Fzf%5C%2FN%5C%2F9J%5C%2Fzf%5C%2FNv83%5C%2Fzj%5C%2FNv84%5C%2F0r%5C%2FSv83%5C%2Fzf%5C%2FMP%5C%2F%5C%2F%5C%2Fzb%5C%2FMv82%5C%2Fzb%5C%2FOf85%5C%2Fz7%5C%2FNv8%5C%2F%5C%2F0r%5C%2FS%5C%2F85%5C%2F0H%5C%2FQP9B%5C%2F0D%5C%2FNf89%5C%2Fzj%5C%2FOv83%5C%2Fzv%5C%2FNv8%5C%2F%5C%2F0f%5C%2FSv9O%5C%2F0ZeXv%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F1X%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F9B%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2FTP%5C%2F%5C%2F%5C%2F1b%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F0%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F9N%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2F%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%5C%2Fv7%2B%22%2C%22date%22%3A%222025-08-17%22%2C%22data%22%3A%5B%7B%22start%22%3A0%2C%22stop%22%3A1439%2C%22value%22%3A%22UA8AUBQAUAwAUBoAUAEAYCcAUBkAUB4AUBgAUCAAUAEAUBkAUAwAYAsAYB8AYB0AYBgAYCoAYBgAYB4AUCcAUBsAUB8AUBwAUBIAYBkAYB8AUBoAUBMAUCEAUCIAYBYAUBwAUCAAUBgAUCAAUBcAYBsAYCUAATIPYD0KECQAYDMAYB0AYAsAYCAAYDwAYCIAYB0AYBcAYCQAYB0AYBAAYCMAYAoAYCIAYCEAYCYAYBsAYBUAYAYAYCIAYCMAUB0AUCAAUBYAUCoAUBEAUC8AUB0AUBYAUDMAUDoAUBkAUC0AUBQAUBwAUA0AUBsAUAoAUCEAUBYAUAwAUB4AUAwAUCcAUCYAUCwKYDUAAUUlEC8IYEMAYEgAYDoAYBAAUAMAUBkAWgAAWgAAWgAAWgAAWgAAUAgAWgAAUBAAUAQAUA4AUA8AUAkAUAIAUAYAUAcAUAIAWgAAUAQAUAkAUAEAUBkAUCUAWgAAUAYAUBEAWgAAUBYAWgAAUAYAWgAAWgAAWgAAWgAAUBcAUAcAWgAAUBUAUAoAUAIAWgAAUAQAUAYAUCgAWgAAUAgAWgAAWgAAUAwAWwAAXCMAUBQAWwAAUAIAWgAAWgAAWgAAWgAAWgAAWgAAWgAAWgAAWREAWQIAUAMAWSEAUDoAUDIAUB8AUCEAUC4AXB4AUA4AWgAAUBIAUA8AUBAAUCUAUCIAUAMAUAEAUAsAUAMAUCwAUBYAWgAAWgAAWgAAWgAAWgAAWgAAUAYAWgAAWgAAWgAAUAYAWwAAWgAAUAYAXAQAUAMAUBsAUBcAUCAAWwAAWgAAWgAAWgAAWgAAUBgAUB4AWgAAUAcAUAwAWQIAWQkAUAEAUAIAWgAAUAoAWgAAUAYAUB0AWgAAWgAAUAkAWgAAWSwAUBIAWgAAUC4AWSYAWgAAUAYAUAoAUAkAUAIAUAcAWgAAUAEAUBEAUBgAUBcAWRYAUA0AWSgAUB4AUDQAUBoAXA4AUA8AUBwAUA8AUA4AUA4AWgAAUAIAUCMAWgAAUCwAUBgAUAYAUAAAUAAAUAAAUAAAUAAAUAAAUAAAUAAAUAAAWwAAUAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAeSEAeQ8AcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBcAcAAAcAAAcCYOcBUAUAAAUAAAUAAAUAAAUAUAUAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcCgAeQAAcAAAcAAAcAAAcAAAcAAAcAYAcAAAcBgAeQAAcAAAcAAAegAAegAAcAAAcAcAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcCkAeQAAcAcAcAAAcAAAcAwAcAAAcAAAcAIAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcCIAeQAAcAAAcAAAcAAAcAAAcAAAeRwAeQAAWgAAUAAAUAAAUAAAUAAAUAAAcAAAcAAAcBoAeScAeQAAegAAcBkAeQAAUAAAUAAAUAAAUAAAUAAAUAAAcAAAcAAAcAAAcAAAcAAAcAAAegAAegAAcAAAcAAAcBgAeQAAcAAAcAAAcAAAcAAAcAAAcAkAegAAegAAcAcAcAAAcAcAcAAAcAAAcAAAcAAAcA8AeQAAcAAAcAAAeRQAcAwAUAAAUAAAUAAAUAAAUAAAUAAAcAAAcBEAcA0AcAAAWQsAUAAAUAAAUAAAUAAAUAAAcAAAcAoAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAYAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBYAegAAcAAAcAAAegAAcAcAcAAAcAAAcAAAcAAAcAAAeRkAegAAegAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAEAcAAAcAAAcAAAcAUAcAQAcAAAcBIAeQAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBsAcAAAcAAAcBcAeQAAUAAAUAAAUAAAUAAAUAAAUBQAcBYAUAAAUAAAUAoAWRYAWTQAWQAAUAAAUAAAUAAAcAAAcAAAcAAAcAAAcAAAcAMAcAAAcAQAcAAAcAAAcAAAcDMAeSIAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcAAAcBQAeQwAcAAAcAAAcAAAcAMAcAAAeSoAcA8AcDMAcAYAeQoAcAwAcFQAcEMAeVIAaTYAbBcNYAsAYBIAYAIAYAIAYBUAYCwAYBMAYDYAYCkAYDcAUCoAUCcAUAUAUBAAWgAAYBoAYBcAYCgAUAMAUAYAUBYAUA4AUBgAUAgAUAgAUAsAUAsAUA4AUAMAUAYAUAQAUBIAASsSUDAAUDAAUBAAYAYAUBAAUAUAUCAAUBoAUCAAUBAAUAoAYAIAUAQAUAgAUCcAUAsAUCIAUCUAUAoAUA4AUB8AUBkAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAAfgAA%22%2C%22tz%22%3A32%2C%22did%22%3A%22DA932FFFFE8816E7%22%2C%22src%22%3A24%7D%5D%2C%22summary%22%3A%22%7B%5C%22v%5C%22%3A6%2C%5C%22slp%5C%22%3A%7B%5C%22st%5C%22%3A1755407692%2C%5C%22ed%5C%22%3A1755407692%2C%5C%22dp%5C%22%3A0%2C%5C%22lt%5C%22%3A0%2C%5C%22wk%5C%22%3A0%2C%5C%22usrSt%5C%22%3A-1440%2C%5C%22usrEd%5C%22%3A-1440%2C%5C%22wc%5C%22%3A0%2C%5C%22is%5C%22%3A0%2C%5C%22lb%5C%22%3A0%2C%5C%22to%5C%22%3A0%2C%5C%22dt%5C%22%3A0%2C%5C%22rhr%5C%22%3A0%2C%5C%22ss%5C%22%3A0%7D%2C%5C%22stp%5C%22%3A%7B%5C%22ttl%5C%22%3A17760%2C%5C%22dis%5C%22%3A10627%2C%5C%22cal%5C%22%3A510%2C%5C%22wk%5C%22%3A41%2C%5C%22rn%5C%22%3A50%2C%5C%22runDist%5C%22%3A7654%2C%5C%22runCal%5C%22%3A397%2C%5C%22stage%5C%22%3A%5B%7B%5C%22start%5C%22%3A327%2C%5C%22stop%5C%22%3A341%2C%5C%22mode%5C%22%3A1%2C%5C%22dis%5C%22%3A481%2C%5C%22cal%5C%22%3A13%2C%5C%22step%5C%22%3A680%7D%2C%7B%5C%22start%5C%22%3A342%2C%5C%22stop%5C%22%3A367%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A2295%2C%5C%22cal%5C%22%3A95%2C%5C%22step%5C%22%3A2874%7D%2C%7B%5C%22start%5C%22%3A368%2C%5C%22stop%5C%22%3A377%2C%5C%22mode%5C%22%3A4%2C%5C%22dis%5C%22%3A1592%2C%5C%22cal%5C%22%3A88%2C%5C%22step%5C%22%3A1664%7D%2C%7B%5C%22start%5C%22%3A378%2C%5C%22stop%5C%22%3A386%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A1072%2C%5C%22cal%5C%22%3A51%2C%5C%22step%5C%22%3A1245%7D%2C%7B%5C%22start%5C%22%3A387%2C%5C%22stop%5C%22%3A393%2C%5C%22mode%5C%22%3A4%2C%5C%22dis%5C%22%3A1036%2C%5C%22cal%5C%22%3A57%2C%5C%22step%5C%22%3A1124%7D%2C%7B%5C%22start%5C%22%3A394%2C%5C%22stop%5C%22%3A398%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A488%2C%5C%22cal%5C%22%3A19%2C%5C%22step%5C%22%3A607%7D%2C%7B%5C%22start%5C%22%3A399%2C%5C%22stop%5C%22%3A414%2C%5C%22mode%5C%22%3A4%2C%5C%22dis%5C%22%3A2220%2C%5C%22cal%5C%22%3A120%2C%5C%22step%5C%22%3A2371%7D%2C%7B%5C%22start%5C%22%3A415%2C%5C%22stop%5C%22%3A427%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A1268%2C%5C%22cal%5C%22%3A59%2C%5C%22step%5C%22%3A1489%7D%2C%7B%5C%22start%5C%22%3A428%2C%5C%22stop%5C%22%3A433%2C%5C%22mode%5C%22%3A1%2C%5C%22dis%5C%22%3A152%2C%5C%22cal%5C%22%3A4%2C%5C%22step%5C%22%3A238%7D%2C%7B%5C%22start%5C%22%3A434%2C%5C%22stop%5C%22%3A444%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A2295%2C%5C%22cal%5C%22%3A95%2C%5C%22step%5C%22%3A2874%7D%2C%7B%5C%22start%5C%22%3A445%2C%5C%22stop%5C%22%3A455%2C%5C%22mode%5C%22%3A4%2C%5C%22dis%5C%22%3A1592%2C%5C%22cal%5C%22%3A88%2C%5C%22step%5C%22%3A1664%7D%2C%7B%5C%22start%5C%22%3A456%2C%5C%22stop%5C%22%3A466%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A1072%2C%5C%22cal%5C%22%3A51%2C%5C%22step%5C%22%3A1245%7D%2C%7B%5C%22start%5C%22%3A467%2C%5C%22stop%5C%22%3A477%2C%5C%22mode%5C%22%3A4%2C%5C%22dis%5C%22%3A1036%2C%5C%22cal%5C%22%3A57%2C%5C%22step%5C%22%3A1124%7D%2C%7B%5C%22start%5C%22%3A478%2C%5C%22stop%5C%22%3A488%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A488%2C%5C%22cal%5C%22%3A19%2C%5C%22step%5C%22%3A607%7D%2C%7B%5C%22start%5C%22%3A489%2C%5C%22stop%5C%22%3A499%2C%5C%22mode%5C%22%3A4%2C%5C%22dis%5C%22%3A2220%2C%5C%22cal%5C%22%3A120%2C%5C%22step%5C%22%3A2371%7D%2C%7B%5C%22start%5C%22%3A500%2C%5C%22stop%5C%22%3A511%2C%5C%22mode%5C%22%3A3%2C%5C%22dis%5C%22%3A1268%2C%5C%22cal%5C%22%3A59%2C%5C%22step%5C%22%3A1489%7D%2C%7B%5C%22start%5C%22%3A512%2C%5C%22stop%5C%22%3A522%2C%5C%22mode%5C%22%3A1%2C%5C%22dis%5C%22%3A152%2C%5C%22cal%5C%22%3A4%2C%5C%22step%5C%22%3A238%7D%5D%7D%2C%5C%22goal%5C%22%3A8000%2C%5C%22tz%5C%22%3A%5C%2228800%5C%22%7D%22%2C%22source%22%3A24%2C%22type%22%3A0%7D%5D",
}

pjs.isJSONParsable = function (str) {
    try {
        JSON.parse(str)
        return true
    } catch (e) {
        return false
    }
}

pjs.getScopeRandomNum = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

pjs.pushMsg = function (title, text) {
    if (pjs.timesLOG > 0) return
    pjs.timesLOG += 1
    title = "华米运动" + title
    GM_log(title + text)
    GM_notification({
        text: text,
        title: title,
        onclick: () => {
            GM_openInTab(pjs.loginURL, { active: true, insert: true, setParent: true })
        }
    })
}

pjs.isPhone = function (str) {
    if (/^(1)\d{10}$/.test(str)) {
        pjs.user_name = `+86${str}`
        pjs.third_name = "huami_phone"
    } else {
        pjs.user_name = str
        pjs.third_name = "huami"
    }
}

pjs.getDataJson = function (originalData, steps) {
    const today = new Date().toISOString().split('T')[0]
    let modifiedData = originalData.replace(/.*?date%22%3A%22(.*?)%22%2C%22data/, (match, raw) => {
        return match.replace(raw, today)
    })
    modifiedData = modifiedData.replace(/.*?ttl%5C%22%3A(.*?)%2C%5C%22dis/, (match, raw) => {
        return match.replace(raw, steps)
    })
    return modifiedData
}

pjs.getAccessToken = function () {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "POST",
            url: `https://api-user.zepp.com/registrations/${pjs.user_name}/tokens`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
            },
            data: `client_id=HuaMi&country_code=CN&json_response=true&name=${pjs.user_name}&password=${GM_getValue("Config.pwd", 0)}&redirect_uri=https://s3-us-west-2.amazonaws.com/hm-registration/successsignin.html&state=REDIRECTION&token=access`,
            responseType: "json",
            onload: (xhr) => {
                let res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        res = JSON.parse(res)
                        resolve(res.access)
                    } else {
                        GM_log(`Code：${xhr.status}🔴\n\n${res}`)
                        resolve(false)
                    }
                } else if (xhr.status == 429) {
                    pjs.pushMsg("Token获取失败🟡", "请求过于频繁，请变更IP或稍后再试！")
                    resolve(false)
                } else {
                    GM_log(`Code：${xhr.status}🔴\n\n${xhr}`)
                    resolve(false)
                }
            },
        })
    })
}

pjs.getUserInfo = function (code) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://account.zepp.com/v2/client/login",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
            },
            data: `app_name=com.xiaomi.hm.health&country_code=CN&code=${code}&device_id=fuck1069-2002-7869-0129-757geoi6sam1&device_model=android_phone&app_version=6.12.0&grant_type=access_token&allow_registration=false&dn=account.zepp.com,api-user.zepp.com,api-mifit.zepp.com,api-watch.zepp.com,app-analytics.zepp.com,api-analytics.huami.com,auth.zepp.com&source=com.xiaomi.hm.health&third_name=${pjs.third_name}`,
            responseType: "json",
            onload: (xhr) => {
                let res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        res = JSON.parse(res)
                        const token_info = {
                            id: res.token_info.user_id,
                            token: res.token_info.app_token
                        }
                        resolve(token_info)
                    } else {
                        GM_log(`Code：${xhr.status}🔴\n\n${res}`)
                        resolve(false)
                    }
                } else {
                    GM_log(`Code：${xhr.status}🔴\n\n${xhr}`)
                    resolve(false)
                }
            },
        })
    })
}

pjs.submitSteps = function (id, token) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "POST",
            url: `https://api-mifit-cn.zepp.com/v1/data/band_data.json?&t=${Date.now()}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
                "apptoken": token,
            },
            data: `userid=${id}&last_sync_data_time=1755407692&device_type=0&last_deviceid=DA932FFFFE8816E7&data_json=${pjs.getDataJson(pjs.dataJSON, pjs.todaySteps)}`,
            responseType: "json",
            onload: (xhr) => {
                if (xhr.status == 200) {
                    pjs.pushMsg("步数提交成功🟢", `今日步数：${pjs.todaySteps}`)
                    resolve(true)
                } else {
                    GM_log(`Code：${xhr.status}🔴\n\n${xhr}`)
                    resolve(false)
                }
            },
        })
    })
}

return new Promise((resolve, reject) => {
    pjs.isPhone(GM_getValue("Config.user", 0))
    pjs.todaySteps = pjs.getScopeRandomNum(GM_getValue("Config.min", 17760), GM_getValue("Config.max", 82240))
    pjs.tasksStart = async function () {
        try {
            const result = await pjs.getAccessToken()
            result ? pjs.getInfoStart(result) : (pjs.pushMsg("Token获取失败🔴", "请尝试手动运行或查看运行日志"), resolve())
        } catch (e) {
            reject(e)
        }
    }
    pjs.getInfoStart = async function (code) {
        try {
            const result = await pjs.getUserInfo(code)
            result ? pjs.submitStart(result.id, result.token) : (pjs.pushMsg("用户登录失败🔴", "请尝试手动运行或查看运行日志"), resolve())
        } catch (e) {
            reject(e)
        }
    }
    pjs.submitStart = async function (id, token) {
        try {
            const result = await pjs.submitSteps(id, token)
            result ? resolve() : (pjs.pushMsg("步数提交失败🔴", "请尝试手动运行或查看运行日志"), resolve())
        } catch (e) {
            reject(e)
        }
    }
    pjs.tasksStart()
})
