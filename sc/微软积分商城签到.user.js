// ==UserScript==
// @name         微软积分商城签到
// @namespace    https://geoisam.github.io
// @version      3.3.0
// @description  每天自动完成 Microsoft Rewards 任务获取积分奖励，✅搜索、✅活动、✅阅读、✅签入
// @author       geoisam@qq.com
// @icon         data:image/png;base64,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
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @crontab      */20 * * * *
// @connect      bing.com
// @connect      login.live.com
// @connect      rewards.bing.com
// @connect      prod.rewardsplatform.microsoft.com
// @connect      hotapi.nntool.cc
// @connect      hot.baiwumm.com
// @connect      cnxiaobai.com
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
    search:
        title: 搜索任务（有一定概率会被风控）
        type: checkbox
        default: true
    others:
        title: 其他任务（活动/阅读/签入、地区CN）
        type: checkbox
        default: true
    span:
        title: 搜索间隔（至少20、即间隔 10-30 秒）
        type: number
        default: 20
        min: 20
        unit: ±10秒
    api:
        title: 搜索词接口（单机模式为随机汉字组合）
        type: select
        default: offline
        values: [offline, hot.nntool.cc, hot.baiwumm.com, hot.cnxiaobai.com]
Notice:
    bro:
        title: 浏览器通知（当前脚本）
        type: checkbox
        default: true
==/UserConfig== */


const FuckD = {
    auth: {
        code: "https://login.live.com/oauth20_authorize.srf",
        token: "https://login.live.com/oauth20_token.srf",
        client: "0000000040170455",
        scope: "service::prod.rewardsplatform.microsoft.com::MBI_SSL",
        redirect: "https://login.live.com/oauth20_desktop.srf",
    },
    ua: {
        pc: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81",
        m: "Mozilla/5.0 (Linux; Android 16; MCE16 Build/BP3A.250905.014; ) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.0.0 Mobile Safari/537.36 BingSapphire/31.4.2110003555",
    },
    api: {
        mode: GM_getValue("Config.api", "offline"),
        arr: [
            ["hot.baiwumm.com", {
                url: "https://hot.baiwumm.com/api/",
                hot: ["weibo", "douyin", "baidu", "toutiao", "thepaper", "qq", "netease", "zhihu"],
            }],
            ["hot.cnxiaobai.com", {
                url: "https://cnxiaobai.com/DailyHotApi/",
                hot: ["weibo", "douyin", "baidu", "toutiao", "thepaper", "qq-news", "netease-news", "zhihu"],
            }],
            ["hot.nntool.cc", {
                url: "https://hotapi.nntool.cc/",
                hot: ["weibo", "douyin", "baidu", "toutiao", "thepaper", "qq-news", "netease-news", "zhihu"],
            }],
        ],
    },
    bing: {
        hash: "5A3E3F932AC4D763485937D26CF515A0",
        repo: "https://github.com/geoisam/FuckScripts/",
        time: 3210,
        span: GM_getValue("Config.span", 20),
        code: false,
        token: false,
        error: 0,
        tasks: {
            get sign() {
                return FuckD.sign.date
            },
            get read() {
                return FuckD.read.date
            },
            get promos() {
                return FuckD.promos.date
            },
            get search() {
                return FuckD.search.date
            },
        }
    },
    sign: {
        times: 0,
        point: -1,
        end: 0,
    },
    read: {
        times: 0,
        point: 0,
        end: 0,
    },
    promos: {
        times: 0,
        token: 0,
        end: 0,
    },
    search: {
        word: {
            list: [],
            index: 0,
        },
        times: 0,
        progressNow: 0,
        pc: {
            progress: 0,
            max: 1,
        },
        m: {
            progress: 0,
            max: 1,
        },
        index: 0,
        end: 0,
    },
}


const FuckF = {
    getRandomNum(num) {
        return Math.floor(Math.random() * num)
    },

    getScopeRandomNum(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    },

    getRandomArr(arr) {
        return arr.sort(() => {
            return Math.random() - 0.5
        })
    },

    getRandomUUID(only = false) {
        const uuid = crypto.randomUUID()
        const sid = uuid.replace(/-/g, "").toUpperCase()
        return only ? sid : uuid
    },

    getRandomChineseChar() {
        const codePoint = Math.floor(Math.random() * (0x9FFF - 0x4E00 + 1)) + 0x4E00
        return String.fromCodePoint(codePoint)
    },

    generateRandomChineseStr(minLength = 1, maxLength = 100) {
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength
        let result = ""
        for (let i = 0; i < length; i++) {
            result += this.getRandomChineseChar()
        }
        return result
    },

    getTimestamp(start = 0, end = 13) {
        const timestamp = Date.now()
        const num = Number(timestamp.toString().substring(start, end))
        return num
    },

    getDatetime(num = true) {
        const timeUTC = new Date()
        const newDateChina = new Date(timeUTC.setUTCHours(timeUTC.getUTCHours() + 8))
        const dateChina = newDateChina.toISOString().split("T")[0]
        const dateChinaNum = dateChina.replaceAll("-", "")
        const dateSplit = dateChina.match(/(.*)-(.*)-(.*)/)
        const dateChinaSlash = `${dateSplit[2]}/${dateSplit[3]}/${dateSplit[1]}`
        return num ? dateChinaNum : dateChinaSlash
    },

    isJSON(s) {
        try {
            const j = JSON.parse(s)
            const p = Array.isArray(j) || (typeof j === "object" && j !== null)
            return p ? true : false
        } catch (e) {
            return false
        }
    },

    async hashCheck(str) {
        const encoder = new TextEncoder()
        const data = encoder.encode(str)
        const hashBuffer = await crypto.subtle.digest("SHA-256", data)
        const hex = Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, "0"))
            .join("")
            .toUpperCase()
        return hex.substring(0, 32)
    },

    log(title, text, push = false) {
        GM_log(title + text + "🔚")
        if (!GM_getValue("Notice.bro", true) || !push) return
        GM_notification({
            text: text,
            title: GM_info.script.name + title,
            onclick: () => {
                GM_openInTab(FuckD.bing.repo, { active: true, insert: true, setParent: true })
            },
        })
    },

    xhr(options, only = false) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                ...options,
                timeout: 5000,
                ontimeout() {
                    this.log("🔴", `请求超时！`)
                    reject()
                },
                onload(xhr) {
                    if (xhr.status == 200) {
                        if (only) {
                            resolve(xhr.finalUrl)
                        } else {
                            resolve(xhr.responseText)
                        }
                    } else {
                        this.log("🔴", `请求失败，状态码：${xhr.status} 🔛${xhr.responseText}`)
                        reject()
                    }
                },
                onerror(err) {
                    this.log("🔴", `请求发生异常！ 🔛${err}`)
                    reject()
                },
            })
        })
    },

    initCheck() {
        const header = ["geoi", "sam"].every(str => GM_info.script.header.includes(str))
        const fraudTips = "\u6e29\u99a8\u63d0\u793a\uff1a\u60a8\u53ef\u80fd\u662f\u76d7\u7248\u811a\u672c\u7684\u53d7\u5bb3\u8005\uff0c\u8bf7\u6ce8\u610f\u9632\u8303\u8bc8\u9a97\uff01"
        if (!header) this.log("\ud83d\udfe3", fraudTips, true)
    },
}

FuckF.getRandomApiHot = function () {
    const lastIndex = parseInt(GM_getValue("Config.index", -1))
    const filteredArr = FuckD.api.hot.filter((name, index) => index != lastIndex)
    const randomIndex = FuckF.getRandomNum(filteredArr.length)
    GM_setValue("Config.index", randomIndex)
    return filteredArr[randomIndex]
}

FuckF.getCode = async (url) => {
    try {
        const message = "Authorize Code 获取"
        const result = await FuckF.xhr({
            url: url,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.pc,
                "referer": "https://rewards.bing.com/",
            },
        }, true)
        const code = result.match(/M\.[\w+\.]+(\-\w+){4}/)
        if (code) {
            // FuckF.log("🟢", `${message}成功！🔛${code[0]}`)
            return code[0]
        }
        FuckF.log("🔴", `${message}失败！🔛${result}`)
        return false
    } catch (e) {
        return null
    }
}

FuckF.getToken = async (url) => {
    try {
        const message = "Refresh Token 获取"
        const result = await FuckF.xhr({
            url: url,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.pc,
                "referer": "https://rewards.bing.com/",
            },
        })
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result)
            const refresh = res.refresh_token
            const access = res.access_token
            if (refresh && access) {
                // FuckF.log("🟢", `${message}成功！🔛${refresh}`)
                GM_setValue("Config.token", refresh)
                FuckD.bing.token = access
                return true
            }
        }
        FuckF.log("🔴", `${message}失败！🔛${result}`)
        return false
    } catch (e) {
        return null
    }
}

FuckF.renewToken = async () => {
    if (FuckD.bing.error > 2) return false
    let url, code, token, refreshToken = GM_getValue("Config.token", false)
    FuckF.okCallback = (err = false) => {
        if (FuckD.bing.error > 2) {
            FuckD.sign.end++
            FuckD.read.end++
            FuckF.renewToken()
        }
        FuckD.bing.error++
        if (err) GM_setValue("Config.token", false)
        setTimeout(() => { FuckF.renewToken() }, FuckD.bing.time)
    }
    if (!refreshToken) {
        url = `${FuckD.auth.code}?client_id=${FuckD.auth.client}&scope=${FuckD.auth.scope}&response_type=code&redirect_uri=${FuckD.auth.redirect}`
        code = await FuckF.getCode(url)
        if (!code) {
            FuckF.okCallback()
        } else {
            url = `${FuckD.auth.token}?client_id=${FuckD.auth.client}&code=${code}&redirect_uri=${FuckD.auth.redirect}&grant_type=authorization_code`
            token = await FuckF.getToken(url)
        }
    } else {
        url = `${FuckD.auth.token}?client_id=${FuckD.auth.client}&refresh_token=${refreshToken}&scope=${FuckD.auth.scope}&grant_type=REFRESH_TOKEN`
        token = await FuckF.getToken(url)
    }
    if (!token) {
        FuckF.okCallback(true)
    } else {
        return true
    }
}

FuckF.getRewardsInfo = async () => {
    try {
        const message = "Rewards Dashboard 获取"
        const result = await FuckF.xhr({
            url: "https://rewards.bing.com/api/getuserinfo?type=1&X-Requested-With=XMLHttpRequest",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.pc,
                "referer": "https://rewards.bing.com/",
            },
        })
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result)
            const data = res.dashboard
            if (data) {
                // FuckF.log("🟢", `${message}成功！🔛${data}`)
                return data
            }
        }
        FuckF.log("🔴", `${message}失败！🔛${result}`)
        return false
    } catch (e) {
        return null
    }
}

FuckF.taskSign = async () => {
    if (FuckD.sign.date == FuckD.bing.dateNowNum || FuckD.sign.end > 0 || FuckD.sign.times > 2) {
        FuckD.sign.end++
        return true
    }
    if (!FuckD.bing.token) await FuckF.renewToken()
    if (FuckD.sign.point >= 0) {
        FuckD.sign.end++
        if (FuckD.sign.date != FuckD.bing.dateNowNum) {
            FuckD.sign.date = FuckD.bing.dateNowNum
            FuckF.log("🟣", "哇！哥哥好棒！签入任务完成了！", true)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    } else {
        try {
            const result = await FuckF.xhr({
                method: "POST",
                url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
                headers: {
                    "content-type": "application/json; charset=utf-8",
                    "user-agent": FuckD.ua.m,
                    "authorization": `Bearer ${FuckD.bing.token}`,
                    "x-rewards-partnerid": "startapp",
                    "x-rewards-appid": "SAAndroid/31.4.2110003555",
                    "x-rewards-ismobile": "true",
                    "x-rewards-country": "cn",
                    "x-rewards-language": "zh",
                    "x-rewards-flights": "rwgobig",
                },
                data: JSON.stringify({
                    "amount": 1,
                    "attributes": {},
                    "id": FuckF.getRandomUUID(),
                    "type": 103,
                    "country": "cn",
                    "risk_context": {},
                    "channel": "SAAndroid",
                }),
            })
            FuckD.sign.times = 0
            if (result && FuckF.isJSON(result)) {
                const res = JSON.parse(result)
                const point = res.response.activity.p
                FuckD.sign.point = point ? point : 0
            } else {
                FuckD.sign.times++
            }
            // FuckF.log("🔵", `签入任务响应：🔛${result}`)
            return false
        } catch (e) {
            return null
        }
    }
}

FuckF.getReadPro = async () => {
    let readArr = { "max": 1, "progress": 0 }
    try {
        const result = await FuckF.xhr({
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=SAAndroid&options=613",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
            },
        })
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result)
            const pro = res.response.promotions
            if (pro) {
                for (const o of pro) {
                    if (o.attributes.offerid == "ENUS_readarticle3_30points") {
                        readArr = { "max": Number(o.attributes.max), "progress": Number(o.attributes.progress) }
                        // FuckF.log("🔵", `阅读任务详情：🔛${o.attributes}`)
                    }
                }
            }
        }
        return readArr
    } catch (e) {
        return readArr
    }
}

FuckF.taskRead = async () => {
    if (FuckD.read.end > 0 || FuckD.read.times > 2) {
        FuckD.read.end++
        return true
    }
    if (!FuckD.bing.token) await FuckF.renewToken()
    const readPro = await FuckF.getReadPro()
    if (readPro.progress > FuckD.read.point) {
        FuckD.read.times = 0
        FuckD.read.point = readPro.progress
    } else {
        FuckD.read.times++
    }
    if (readPro.progress >= readPro.max) {
        FuckD.read.end++
        if (FuckD.read.date != FuckD.bing.dateNowNum) {
            FuckD.read.date = FuckD.bing.dateNowNum
            FuckF.log("🟣", "哇！哥哥好棒！阅读任务完成了！", true)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    } else {
        try {
            FuckD.read.date = 0
            const result = await FuckF.xhr({
                method: "POST",
                url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
                headers: {
                    "content-type": "application/json; charset=utf-8",
                    "user-agent": FuckD.ua.m,
                    "authorization": `Bearer ${FuckD.bing.token}`,
                    "x-rewards-appid": "SAAndroid/31.4.2110003555",
                    "x-rewards-ismobile": "true",
                    "x-rewards-country": "cn",
                    "x-rewards-language": "zh",
                },
                data: JSON.stringify({
                    "amount": 1,
                    "attributes": {
                        "offerid": "ENUS_readarticle3_30points",
                    },
                    "country": "cn",
                    "id": FuckF.getRandomUUID(),
                    "type": 101,
                    "risk_context": {},
                    "channel": "SAAndroid",
                }),
            })
            // FuckF.log("🔵", `阅读任务响应：🔛${result}`)
            return false
        } catch (e) {
            return null
        }
    }
}

FuckF.getRewardsToken = async () => {
    try {
        const message = "Request Verification Token 获取"
        const result = await FuckF.xhr({
            url: "https://rewards.bing.com/",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.pc,
                "referer": "https://rewards.bing.com/",
            },
        })
        const res = result.replace(/\s/g, "")
        const code = res.match(/RequestVerificationToken/)
        if (code) {
            const token = res.match(/RequestVerificationToken"type="hidden"value="(.*?)"\/>/)
            // FuckF.log("🟢", `${message}成功！🔛${data}`)
            if (token) return token[1]
        }
        FuckD.promos.times++
        FuckF.log("🔴", `${message}失败！🔛${result}`)
        return false
    } catch (e) {
        return null
    }
}

FuckF.taskPromos = async () => {
    if (FuckD.promos.end > 0 || FuckD.promos.times > 2) {
        FuckD.promos.end++
        return true
    }
    const dashboard = await FuckF.getRewardsInfo()
    if (!dashboard) return false
    const requestToken = await FuckF.getRewardsToken()
    if (!requestToken) return false
    const dateNow = FuckF.getDatetime(true)
    let promosArr = []
    let morePromos = dashboard.morePromotions
    let dailySetPromos = dashboard.dailySetPromotions[dateNow]
    const streakProtection = dashboard.streakProtectionPromo.streakProtectionStatus
    morePromos = Array.isArray(morePromos) ? morePromos : []
    dailySetPromos = Array.isArray(dailySetPromos) ? dailySetPromos : []
    for (const item of [...dailySetPromos, ...morePromos]) {
        if (item.complete == false) {
            promosArr.push({ id: item.offerId, hash: item.hash })
        }
    }
    if (streakProtection && streakProtection == "False") {
        try {
            FuckF.xhr({
                method: "POST",
                url: "https://rewards.bing.com/api/togglestreakasync?X-Requested-With=XMLHttpRequest",
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                    "user-agent": FuckD.ua.pc,
                    "referer": "https://rewards.bing.com/",
                },
                data: `isOn=true&activityAmount=1&form=&__RequestVerificationToken=${requestToken}`
            })
        } catch (e) { }
    }
    if (promosArr.length < 1) {
        FuckD.promos.end++
        if (FuckD.promos.date != FuckD.bing.dateNowNum) {
            FuckD.promos.date = FuckD.bing.dateNowNum
            FuckF.log("🟣", "哇！哥哥好棒！活动任务完成了！", true)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    } else {
        try {
            FuckD.promos.date = 0
            for (const item of promosArr) {
                const result = await FuckF.xhr({
                    method: "POST",
                    url: "https://rewards.bing.com/api/reportactivity?X-Requested-With=XMLHttpRequest",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                        "user-agent": FuckD.ua.pc,
                        "referer": "https://rewards.bing.com/",
                    },
                    data: new URLSearchParams({
                        "id": item.id,
                        "hash": item.hash,
                        "timeZone": "480",
                        "activityAmount": "1",
                        "dbs": "0",
                        "form": "",
                        "type": "",
                        "__RequestVerificationToken": requestToken,
                    }).toString(),
                })
                // FuckF.log("🔵", `活动任务响应：🔛${result}`)
                await new Promise(resolve => setTimeout(resolve, FuckD.bing.time / 2))
            }
            FuckD.promos.times++
            return false
        } catch (e) {
            return null
        }
    }
}

FuckF.getQueryWord = async () => {
    let sentence = FuckF.generateRandomChineseStr(3, 33)
    if (FuckD.api.mode != "offline") {
        if (FuckD.search.word.index < 1 || FuckD.search.word.list.length < 1) {
            const apiHot = FuckF.getRandomApiHot()
            try {
                const result = await FuckF.xhr({
                    url: FuckD.api.url + apiHot
                })
                if (result && FuckF.isJSON(result)) {
                    const res = JSON.parse(result)
                    if (res.code == 200) {
                        FuckD.search.word.index = 1
                        for (let i = 0; i < res.data.length; i++) {
                            FuckD.search.word.list.push(res.data[i].title)
                        }
                        FuckD.search.word.list = FuckF.getRandomArr(FuckD.search.word.list)
                        // FuckF.log("🔵", `搜索词列表：🔛${FuckD.search.word.list}`)
                        sentence = FuckD.search.word.list[FuckD.search.word.index]
                        return sentence
                    }
                }
            } catch (e) { }
        } else {
            FuckD.search.word.index++
            if (FuckD.search.word.index > FuckD.search.word.list.length - 1) {
                FuckD.search.word.index = 0
            }
            sentence = FuckD.search.word.list[FuckD.search.word.index]
            return sentence
        }
        FuckF.log("🟡", "当前搜索词接口异常！已临时使用随机汉字组合！")
    }
    return sentence
}

FuckF.taskSearch = async () => {
    if (FuckD.search.end > 0) return true
    const dashboard = await FuckF.getRewardsInfo()
    if (!dashboard) return false
    let pcReport, mReport
    const searchInfo = dashboard.userStatus.counters
    if (searchInfo.pcSearch) {
        FuckD.search.pc.progress = searchInfo.pcSearch[0].pointProgress
        FuckD.search.pc.max = searchInfo.pcSearch[0].pointProgressMax
        pcReport = `\n电脑搜索：${FuckD.search.pc.progress}/${FuckD.search.pc.max}\n`
    } else {
        FuckD.search.pc.max = 0
        pcReport = ""
    }
    if (searchInfo.mobileSearch) {
        FuckD.search.m.progress = searchInfo.mobileSearch[0].pointProgress
        FuckD.search.m.max = searchInfo.mobileSearch[0].pointProgressMax
        mReport = `\n移动设备搜索：${FuckD.search.m.progress}/${FuckD.search.m.max}\n`
    } else {
        FuckD.search.m.max = 0
        mReport = ""
    }
    if (FuckD.search.times > 2 || FuckD.search.index >= FuckD.search.limit) {
        FuckD.search.end++
        FuckF.log("🔵", `本次运行共搜索 ${FuckD.search.index} 次！\n${pcReport}${mReport}`)
        return true
    }
    if (searchInfo.dailyPoint[0].pointProgress == FuckD.search.progressNow) {
        FuckD.search.times++
    } else {
        FuckD.search.times = 0
        FuckD.search.progressNow = searchInfo.dailyPoint[0].pointProgress
    }
    if (FuckD.search.pc.progress >= FuckD.search.pc.max && FuckD.search.m.progress >= FuckD.search.m.max) {
        FuckD.search.end++
        if (FuckD.search.date != FuckD.bing.dateNowNum) {
            FuckD.search.date = FuckD.bing.dateNowNum
            FuckF.log("🟣", "哇！哥哥好棒！搜索任务完成了！", true)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    } else {
        FuckD.search.date = 0
        const keyword = await FuckF.getQueryWord()
        const query = `https://${FuckD.bing.host}/search?q=${keyword}&form=QBLH&qs=ds`
        const referer = `https://${FuckD.bing.host}/?form=QBLH&qs=ds`
        let headers
        if (FuckD.search.pc.progress < FuckD.search.pc.max) {
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.pc,
            }
        } else {
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.m,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
            }
        }
        const result = await FuckF.xhr({
            url: query,
            headers: {
                "referer": referer,
                ...headers
            },
        })
        if (result) {
            const res = result.replace(/\s+/g, "")
            const data0 = res.match(/["']?_ig=["']?([^"']+)["']?_iid=["']?([^"']+)["']?_cid=["']?([^"']+)["']?/)
            const data1 = res.match(/target=["']?_blank["']?href=["']?([^"']+)["']?h=["']?ID=([^"']+)["']?/)
            if (data0 && data1) {
                const ncheader = `https://bing.com/rewardsapp/ncheader?ver=${FuckF.getTimestamp(5)}&IID=${data0[2]}&IG=${data0[1]}&ajaxreq=1`
                const click = `https://${FuckD.bing.host}/fd/ls/GLinkPingPost.aspx?IG=${data0[1]}&ID=${data1[2]}&url=${data1[1]}`
                await FuckF.xhr({
                    method: "POST",
                    url: ncheader,
                    headers: {
                        "referer": query,
                        ...headers
                    },
                })
                await FuckF.xhr({
                    url: click,
                    headers: {
                        "referer": query,
                        ...headers
                    },
                })
            }
        }
        FuckD.search.index++
        return false
    }
}

return new Promise((resolve, reject) => {
    if (!GM_info.script.header.includes(FuckD.bing.repo)) resolve()
    FuckD.search.limit = FuckF.getScopeRandomNum(3, 7)
    FuckD.bing.dateNowNum = Number(FuckF.getDatetime())
    const tasksArr = GM_getValue("Config.tasks", false)
    FuckD.sign.date = tasksArr ? tasksArr.sign : 0
    FuckD.read.date = tasksArr ? tasksArr.read : 0
    FuckD.promos.date = tasksArr ? tasksArr.promos : 0
    FuckD.search.date = tasksArr ? tasksArr.search : 0
    FuckF.hashCheck(GM_info.script.header + FuckD.bing.repo).then(hash => {
        FuckF.log("🟣", `${hash}初始化完成！`)
        hash == FuckD.bing.hash || resolve()
    })
    if (FuckD.api.mode != "offline") {
        const defaultApiName = "hot.baiwumm.com"
        const currentApiName = GM_getValue("Config.api", defaultApiName)
        const apiConfigMap = new Map(FuckD.api.arr)
        const getConfigApi = apiConfigMap.get(currentApiName) || apiConfigMap.get(defaultApiName)
        FuckD.api.url = getConfigApi.url
        FuckD.api.hot = getConfigApi.hot
        if (!apiConfigMap.has(currentApiName)) {
            GM_setValue("Config.api", "offline")
            FuckF.log("🟡", "当前搜索词接口配置错误！已替换为单机模式！")
        }
    }

    FuckF.tasksEnd = function () {
        if (FuckD.sign.end > 0 && FuckD.read.end > 0 && FuckD.promos.end > 0 && FuckD.search.end > 0) {
            FuckF.initCheck()
            FuckF.log("🟣", `${FuckD.bing.hash}运行完成！`)
            resolve()
        }
    }

    FuckF.signStart = async () => {
        try {
            const result = await FuckF.taskSign()
            if (!result) {
                setTimeout(() => { FuckF.signStart() }, FuckD.bing.time)
            } else {
                FuckF.tasksEnd()
            }
        } catch (e) {
            FuckD.sign.end++
            FuckF.tasksEnd()
        }
    }

    FuckF.readStart = async () => {
        try {
            const result = await FuckF.taskRead()
            if (!result) {
                setTimeout(() => { FuckF.readStart() }, FuckD.bing.time)
            } else {
                FuckF.tasksEnd()
            }
        } catch (e) {
            FuckD.read.end++
            FuckF.tasksEnd()
        }
    }

    FuckF.promosStart = async () => {
        try {
            const result = await FuckF.taskPromos()
            if (!result) {
                setTimeout(() => { FuckF.promosStart() }, FuckD.bing.time)
            } else {
                FuckF.tasksEnd()
            }
        } catch (e) {
            FuckD.promos.end++
            FuckF.tasksEnd()
        }
    }

    FuckF.searchStart = async () => {
        try {
            const result = await FuckF.taskSearch()
            if (!result) {
                const spanMIN = (FuckD.bing.span - 10) * 1000
                const spanMAX = (FuckD.bing.span + 10) * 1000
                const timespan = FuckF.getScopeRandomNum(spanMIN, spanMAX)
                FuckF.log("🔵", `第 ${FuckD.search.index}/${FuckD.search.limit} 次搜索完成，等待 ${timespan / 1000} 秒后继续...`)
                setTimeout(() => { FuckF.searchStart() }, timespan)
            } else {
                FuckF.tasksEnd()
            }
        } catch (e) {
            FuckD.search.end++
            FuckF.tasksEnd()
        }
    }

    FuckF.tasksStart = async () => {
        try {
            let url = await FuckF.xhr({
                url: "https://bing.com/"
            }, true)
            url = new URL(url)
            FuckD.bing.host = url ? url.host : "www.bing.com"
            const result = await FuckF.getRewardsInfo()
            if (!result) {
                FuckF.log("🔴", "账号状态失效，请检查Microsoft登录状态或重新登录！")
                resolve()
            }
            FuckF.initCheck()
            if (GM_getValue("Config.others", true)) {
                await FuckF.renewToken()
                FuckF.promosStart()
                FuckF.signStart()
                FuckF.readStart()
            }
            if (GM_getValue("Config.search", true)) FuckF.searchStart()
        } catch (e) {
            reject(e)
        }
        // setInterval(() => { FuckF.log("🔵", `「签入：${FuckD.sign.end}」「阅读：${FuckD.read.end}」「活动：${FuckD.promos.end}」「搜索：${FuckD.search.end}」`) }, 8888)
    }

    FuckF.tasksStart()
})
