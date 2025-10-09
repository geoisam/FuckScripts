// ==UserScript==
// @name         华米运动步数修改
// @namespace    https://geoisam.github.io
// @version      2.0.0
// @description  每天自动修改并同步 微信运动/支付宝运动 步数，需登录 Zepp/Zepp Life 绑定第三方数据，支持多账号处理和消息推送
// @author       geoisam@qq.com
// @icon         data:image/png;base64,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
// @homepage     https://scriptcat.org/script-show-page/4285
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @crontab      * 8-23 once * *
// @connect      api-user.huami.com
// @connect      account.huami.com
// @connect      account-cn.huami.com
// @connect      api-mifit-cn.huami.com
// @connect      qyapi.weixin.qq.com
// @connect      oapi.dingtalk.com
// @connect      open.feishu.cn
// @connect      push.i-i.me
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_info
// @grant        GM_log
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


/* ==UserConfig==
Config:
    data:
        title: 账号#密码（一行一组）
        type: textarea
        description: xxx@xxx.xxx#xxxxxxxx（一行一组或英文逗号隔开）
    min:
        title: 步数最小值（min：1）
        type: number
        default: 17760
        min: 1
        max: 100000
        description: 17760
    max:
        title: 步数最大值（max：100000）
        type: number
        default: 82240
        min: 1
        max: 100000
        description: 82240
    bro:
        title: 浏览器通知（当前脚本）
        type: checkbox
        default: true
Notice:
    wework:
        title: 企业微信消息推送（群机器人）
        type: text
        password: true
        description: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    dingding:
        title: 钉钉群机器人（不加签，关键词：#）
        type: text
        password: true
        description: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    feishu:
        title: 飞书群机器人（不加签，关键词：#）
        type: text
        password: true
        description: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    pushme:
        title: PushMe（push.i-i.me）
        type: text
        password: true
        description: xxxxxxxxxxxxxxxxxxxx
==/UserConfig== */


const webhook = [
    {
        name: "企业微信",
        url: "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=",
        key: GM_getValue("Notice.wework", false),
        msg: {
            "msgtype": "markdown_v2",
            "markdown_v2": {
                get content() {
                    return `> ${pjs.t.timeChina}\n\n ## ${GM_info.script.name}\n ${pjs.t.sendMsg}`
                }
            },
        },
        docs: "https://developer.work.weixin.qq.com/document/path/91770"
    },
    {
        name: "钉钉",
        url: "https://oapi.dingtalk.com/robot/send?access_token=",
        key: GM_getValue("Notice.dingding", false),
        msg: {
            "msgtype": "markdown",
            "markdown": {
                "title": GM_info.script.name,
                get text() {
                    return `> ${pjs.t.timeChina}\n ### ${GM_info.script.name}\n ${pjs.t.sendMsg}`
                }
            },
        },
        docs: "https://open.dingtalk.com/document/orgapp/custom-robots-send-group-messages"
    },
    {
        name: "飞书",
        url: "https://open.feishu.cn/open-apis/bot/v2/hook/",
        key: GM_getValue("Notice.feishu", false),
        msg: {
            "msg_type": "interactive",
            "card": {
                "schema": "2.0",
                "header": {
                    "title": {
                        "tag": "plain_text",
                        "content": GM_info.script.name
                    },
                    "template": "orange"
                },
                "body": {
                    "elements": [{
                        "tag": "markdown",
                        "text_align": "center",
                        get content() {
                            return `#### ${pjs.t.timeChina}\n ${pjs.t.sendMsg}`
                        }
                    }]
                }
            }
        },
        docs: "https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot"
    },
    {
        name: "PushMe",
        url: "https://push.i-i.me/?push_key=",
        key: GM_getValue("Notice.pushme", false),
        msg: {
            "type": "markdown",
            "title": GM_info.script.name,
            get content() {
                return `\n ${pjs.t.sendMsg}`
            }
        },
        docs: "https://push.i-i.me/docs/index"
    }
]

const pjs = {
    t: {
        dataLOG: "",
        timeDELAY: 10,
        timeUTC: new Date(),
        deviceID: "88CC5224060006C4",
        secondNOW: Math.floor(Date.now() / 1000),
    },
    huami: {
        key: "xeNtBVqzDc6tuNTh",
        iv: "MAAAYAAAAAAAAABg"
    }
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

pjs.formatString = function (str) {
    const lines = str.split(/\r?\n/)
    const result = []
    for (const line of lines) {
        if (line.trim() === '') continue
        const pairs = line.split(',')
        for (const pair of pairs) {
            const trimmedPair = pair.trim()
            if (trimmedPair === '') return []
            const parts = trimmedPair.split('#')
            if (
                parts.length !== 2 ||
                parts[0].trim() === "" ||
                parts[1].trim() === ""
            ) {
                return []
            }
            result.push([parts[0].trim(), parts[1].trim()])
        }
    }
    return result
}

pjs.mergeArray = function (group1, group2) {
    const group1Map = group1.reduce((map, [user, pwd]) => {
        map[user] = pwd
        return map
    }, {})
    const group2Map = group2.reduce((map, [user, token]) => {
        map[user] = token
        return map
    }, {})
    const accounts = [...new Set([
        ...group1.map(item => item[0]),
        ...group2.map(item => item[0])
    ])]
    const mergedArray = accounts.map(user => [
        user,
        group1Map[user] || "",
        group2Map[user] || ""
    ])
    return mergedArray
}

pjs.updateArray = function (group1, group2) {
    const map = new Map(group1)
    group2.forEach(([user, token]) => {
        map.set(user, token)
    })
    return Array.from(map)
}

pjs.pushMsg = function (title, text, push = false) {
    GM_log(title + text + "🔚")
    if (!GM_getValue("Config.bro", true) || !push) return
    GM_notification({
        text: text,
        title: GM_info.script.name + title,
        onclick: () => {
            GM_openInTab("https://user.huami.com/universalLogin/#/login?project_redirect_uri=https://www.huami.com/", { active: true, insert: true, setParent: true })
        }
    })
}

pjs.isPhone = function (str) {
    if (/^(1)\d{10}$/.test(str)) {
        pjs.t.user_name = `+86${str}`
        pjs.t.third_name = "huami_phone"
    } else {
        pjs.t.user_name = str
        pjs.t.third_name = "huami"
    }
}

pjs.encryptAES = async function (str, keyStr, ivStr) {
    const text = new TextEncoder().encode(str)
    const keyBuffer = new TextEncoder().encode(keyStr)
    const ivBuffer = new TextEncoder().encode(ivStr)
    const cryptoKey = await crypto.subtle.importKey(
        "raw", keyBuffer, { name: "AES-CBC" }, false, ["encrypt"]
    )
    const encrypted = await crypto.subtle.encrypt(
        { name: "AES-CBC", iv: ivBuffer }, cryptoKey, text
    )
    return Array.from(new Uint8Array(encrypted)).map(b => b.toString(16).padStart(2, "0")).join("")
}

pjs.encryptData = function (data) {
    return new Promise((resolve, reject) => {
        pjs.encryptAES(data, pjs.huami.key, pjs.huami.iv).then((res) => { resolve(res) }).catch((e) => { reject(e) })
    })
}

pjs.getAccessToken = function (account) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "POST",
            url: `https://api-user.huami.com/registrations/${pjs.t.user_name}/tokens`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
            },
            data: new URLSearchParams({
                "client_id": "HuaMi",
                "country_code": "CN",
                "json_response": true,
                "name": pjs.t.user_name,
                "password": account[1],
                "redirect_uri": "https://s3-us-west-2.amazonaws.com/hm-registration/successsignin.html",
                "state": "REDIRECTION",
                "token": "access",
            }).toString(),
            responseType: "json",
            onload(xhr) {
                const res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        const resJSON = JSON.parse(res)
                        if (resJSON.access) {
                            pjs.pushMsg("🟢", `「${account[0]}」Access Token获取成功！`)
                            resolve(resJSON.access)
                        } else {
                            pjs.pushMsg("🟡", `「${account[0]}」用户名或密码错误！`, true)
                            resolve(false)
                        }
                    } else {
                        pjs.pushMsg("🔴", `「${account[0]}」AccessToken Code：${xhr.status} 🔛${res}`)
                        resolve(false)
                    }
                } else if (xhr.status == 429) {
                    pjs.pushMsg("🟡", `「${account[0]}」请求过于频繁！`, true)
                    resolve(false)
                } else {
                    pjs.pushMsg("🔴", `「${account[0]}」AccessToken Code：${xhr.status} 🔛${res}`)
                    resolve(false)
                }
            },
        })
    })
}

pjs.getUserInfo = function (code, account) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://account.huami.com/v2/client/login",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
            },
            data: new URLSearchParams({
                "app_name": "com.xiaomi.hm.health",
                "country_code": "CN",
                "code": code,
                "device_id": "02:00:00:00:00:00",
                "device_model": "android_phone",
                "app_version": "6.12.0",
                "grant_type": "access_token",
                "allow_registration": false,
                "source": "com.xiaomi.hm.health",
                "third_name": pjs.t.third_name,
            }).toString(),
            responseType: "json",
            onload(xhr) {
                const res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        const resJSON = JSON.parse(res)
                        if (resJSON.token_info) {
                            const token = {
                                id: resJSON.token_info.user_id,
                                app: resJSON.token_info.app_token,
                                login: resJSON.token_info.login_token
                            }
                            pjs.pushMsg("🟢", `「${account[0]}」App Token获取成功！`)
                            resolve(token)
                        } else {
                            pjs.pushMsg("🟡", `「${account[0]}」TokenInfo Code：${xhr.status} 🔛${res}`)
                            resolve(false)
                        }
                    } else {
                        pjs.pushMsg("🔴", `「${account[0]}」TokenInfo Code：${xhr.status} 🔛${res}`)
                        resolve(false)
                    }
                } else {
                    pjs.pushMsg("🔴", `「${account[0]}」TokenInfo Code：${xhr.status} 🔛${res}`)
                    resolve(false)
                }
            },
        })
    })
}

pjs.reLoginToken = function (account) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url: `https://account-cn.huami.com/v1/client/renew_login_token?login_token=${account[2]}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
            },
            onload(xhr) {
                const res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        const resJSON = JSON.parse(res)
                        if (resJSON.token_info) {
                            pjs.pushMsg("🟢", `「${account[0]}」Login Token获取成功！`)
                            resolve(resJSON.token_info.login_token)
                        } else {
                            pjs.pushMsg("🟡", `「${account[0]}」LoginToken Code：${xhr.status} 🔛${res}`)
                            resolve(false)
                        }
                    } else {
                        pjs.pushMsg("🔴", `「${account[0]}」LoginToken Code：${xhr.status} 🔛${res}`)
                        resolve(false)
                    }
                } else {
                    pjs.pushMsg("🔴", `「${account[0]}」LoginToken Code：${xhr.status} 🔛${res}`)
                    resolve(false)
                }
            },
        })
    })
}

pjs.getAppToken = function (code, account) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            url: `https://account-cn.huami.com/v1/client/app_tokens?login_token=${code}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
            },
            onload(xhr) {
                const res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        const resJSON = JSON.parse(res)
                        if (resJSON.token_info) {
                            const token = {
                                id: resJSON.token_info.user_id,
                                app: resJSON.token_info.app_token
                            }
                            pjs.pushMsg("🟢", `「${account[0]}」App Token获取成功！`)
                            resolve(token)
                        } else {
                            pjs.pushMsg("🟡", `「${account[0]}」AppToken Code：${xhr.status} 🔛${res}`)
                            resolve(false)
                        }
                    } else {
                        pjs.pushMsg("🔴", `「${account[0]}」AppToken Code：${xhr.status} 🔛${res}`)
                        resolve(false)
                    }
                } else {
                    pjs.pushMsg("🔴", `「${account[0]}」AppToken Code：${xhr.status} 🔛${res}`)
                    resolve(false)
                }
            },
        })
    })
}

pjs.submitSteps = function (info, account) {
    return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
            method: "POST",
            url: `https://api-mifit-cn.huami.com/v1/data/band_data.json?&t=${Date.now()}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
                "app_name": "com.xiaomi.hm.health",
                "apptoken": info.app,
            },
            data: new URLSearchParams({
                "userid": info.id,
                "last_sync_data_time": pjs.t.secondNOW,
                "device_type": 0,
                "last_deviceid": pjs.t.deviceID,
                "data_json": JSON.stringify(pjs.t.dataJSON),
            }).toString(),
            responseType: "json",
            onload(xhr) {
                const res = xhr.responseText
                if (xhr.status == 200) {
                    if (pjs.isJSONParsable(res)) {
                        const resJSON = JSON.parse(res)
                        if (resJSON.code && resJSON.code == 1) {
                            pjs.pushMsg("🟢", `「${account[0]}」步数数据提交成功！`)
                            resolve(1)
                        } else {
                            pjs.pushMsg("🟡", `「${account[0]}」DataSubmit Code：${xhr.status} 🔛${res}`)
                            resolve(false)
                        }
                    } else {
                        pjs.pushMsg("🔴", `「${account[0]}」DataSubmit Code：${xhr.status} 🔛${res}`)
                        resolve(false)
                    }
                } else {
                    pjs.pushMsg("🔴", `「${account[0]}」DataSubmit Code：${xhr.status} 🔛${res}`)
                    resolve(false)
                }
            },
        })
    })
}

return new Promise((resolve, reject) => {
    pjs.t.userData = pjs.formatString(GM_getValue("Config.data", "#"))
    if (pjs.t.userData.length == 0) pjs.pushMsg("🔴", "账号#密码填写格式错误，请重新输入！", true), resolve()
    pjs.t.accountData = pjs.mergeArray(pjs.t.userData, GM_getValue("Config.token", []))
    pjs.t.newDateSH = new Date(pjs.t.timeUTC.setUTCHours(pjs.t.timeUTC.getUTCHours() + 8))
    pjs.t.timeChina = pjs.t.newDateSH.toISOString().split(".")[0].replace("T", " ")
    pjs.t.dateChina = pjs.t.newDateSH.toISOString().split("T")[0]

    pjs.tasksStart = async (accounts) => {
        for (const [index, account] of accounts.entries()) {
            pjs.pushMsg("🔵", `开始处理第 ${index + 1}/${accounts.length} 个账号「${account[0]}」`)
            try {
                let tokenInfo
                pjs.isPhone(account[0])
                pjs.t.todaySteps = pjs.getScopeRandomNum(GM_getValue("Config.min", 17760), GM_getValue("Config.max", 82240))
                pjs.t.dataJSON = [{
                    "data_hr": "",
                    "date": pjs.t.dateChina,
                    "data": [{
                        "start": 0,
                        "stop": 1439,
                        "value": pjs.t.todaySteps,
                        "tz": 32,
                        "did": pjs.t.deviceID,
                        "src": 24
                    }],
                    "summary": JSON.stringify({
                        "v": 6,
                        "slp": {
                            "st": pjs.t.secondNOW,
                            "ed": pjs.t.secondNOW,
                        },
                        "stp": {
                            "ttl": pjs.t.todaySteps,
                        }, "goal": 8000,
                        "tz": "28800"
                    }),
                    "source": 24,
                    "type": 0
                }]
                if (!account[2]) {
                    tokenInfo = await pjs.getNewToken(account)
                } else {
                    tokenInfo = await pjs.renewToken(account)
                    if (!tokenInfo || !tokenInfo.id) tokenInfo = await pjs.getNewToken(account)
                }
                if (!tokenInfo || !tokenInfo.id) {
                    account[3] = 0
                } else {
                    const isSteps = await pjs.submitSteps(tokenInfo, account)
                    isSteps ? account[3] = pjs.t.todaySteps : account[3] = 0
                }
            } catch (e) {
                pjs.pushMsg("🔴", `「${account[0]}」处理出错 🔛${e}`)
            }
            if (index < accounts.length - 1) {
                pjs.pushMsg("🔵", `「${account[0]}」完成，等待 ${pjs.t.timeDELAY} 秒后继续...`)
                await new Promise(resolve => setTimeout(resolve, pjs.t.timeDELAY * 1000))
            }
        }
        pjs.t.dataLOG = accounts.map(account => `|${account[0]}|${account[3]}|\n`).join("")
        pjs.t.sendMsg = `---\n |账号|步数|\n |:---:|:---:|\n${pjs.t.dataLOG}\n ---\n **[Version ${GM_info.script.version}](https://github.com/geoisam)**\n`
        pjs.sendStart(webhook)
        pjs.pushMsg("🟢", "所有账号处理完成，具体请查看日志！", true)
        resolve()
    }

    pjs.getNewToken = async (account) => {
        try {
            const access = await pjs.getAccessToken(account)
            if (!access) return false
            const token = await pjs.getUserInfo(access, account)
            if (!token || !token.login) return false
            const save = pjs.updateArray(GM_getValue("Config.token", []), [[account[0], token.login]])
            GM_setValue("Config.token", save)
            return token
        } catch (e) {
            pjs.pushMsg("🔴", `「${account[0]}」登录出错 🔛${e}`)
        }
    }

    pjs.renewToken = async (account) => {
        try {
            const login = await pjs.reLoginToken(account)
            if (!login) return false
            const save = pjs.updateArray(GM_getValue("Config.token", []), [[account[0], login]])
            GM_setValue("Config.token", save)
            const token = await pjs.getAppToken(login, account)
            if (!token || !token.app) return false
            return token
        } catch (e) {
            pjs.pushMsg("🔴", `「${account[0]}」验证出错 🔛${e}`)
        }
    }

    pjs.sendStart = async (wh) => {
        for (const i of wh) {
            try {
                if (!i.key) continue
                await GM_xmlhttpRequest({
                    method: "POST",
                    url: i.url + i.key,
                    headers: {
                        "content-type": "application/json; charset=UTF-8",
                    },
                    data: JSON.stringify(i.msg),
                    onload(xhr) {
                        pjs.pushMsg("🟣", `「${i.name}」消息推送完成 🔛${xhr.responseText}`)
                        return
                    },
                })
            } catch (e) {
                pjs.pushMsg("🔴", `「${i.name}」消息推送出错 🔛${e}`)
                continue
            }
        }
    }

    pjs.tasksStart(pjs.t.accountData)
})
