// ==UserScript==
// @name         油猴中文网签到
// @namespace    https://geoisam.github.io
// @version      1.1.0
// @description  油猴中文网DSU每日自动签到
// @author       geoisam@qq.com
// @icon         data:image/png;base64,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
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @crontab      * * once * *
// @connect      bbs.tampermonkey.net.cn
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_log
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


/* ==UserConfig==
Config:
    mode:
        title: 签到模式
        type: select
        default: todaysay
        values: [todaysay, fastreply, empty]
    text:
        title: 今日话说
        type: textarea
        description: 不允许纯数字或纯字母
    emoji:
        title: 签到心情
        type: select
        default: 随机
        values: [随机, 开心, 难过, 郁闷, 无聊, 怒, 擦汗, 奋斗, 慵懒, 衰]
==/UserConfig== */


const FuckD = {
    mode: GM_getValue("Config.mode", "todaysay"),
    text: GM_getValue("Config.text", false),
    emoji: GM_getValue("Config.emoji", "随机"),
    mood: ["kx", "ng", "ym", "wl", "nu", "ch", "fd", "yl", "shuai"],
    ua: {
        pc: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81",
    },
    data: {
        // kx：开心、ng：难过、ym：郁闷、wl：无聊、nu：怒、ch：擦汗、fd：奋斗、yl：慵懒、shuai：衰
        "qdxq": "kx",
        // 1：todaysay、2：fastreply、3：empty
        "qdmode": 1,
        "todaysay": "",
        "fastreply": 0,
    },
}

const FuckF = {
    getRandomNum(num) {
        return Math.floor(Math.random() * num)
    },

    log(title, text, push = false) {
        GM_log(title + text + "🔚")
        if (!push) return
        GM_notification({
            text: text,
            title: GM_info.script.name + title,
            onclick: () => {
                GM_openInTab("https://bbs.tampermonkey.net.cn/?fromuid=27974", { active: true, insert: true, setParent: true })
            },
        })
    },

    xhr(options) {
        return new Promise((resolve, reject) => {
            const seconds = Date.now()
            GM_xmlhttpRequest({
                ...options,
                timeout: 15000,
                ontimeout() {
                    reject(new Error(`请求超时！用时 ${(Date.now() - seconds) / 1000} 秒`))
                },
                onload(xhr) {
                    if (xhr.status == 200) {
                        resolve(xhr.responseText)
                    } else {
                        reject(new Error(`请求失败，用时 ${(Date.now() - seconds) / 1000} 秒，状态码：${xhr.status}`))
                    }
                },
                onerror(err) {
                    reject(new Error(`请求发生异常！用时 ${(Date.now() - seconds) / 1000} 秒 🔛${err}`))
                },
            })
        })
    },
}

return new Promise((resolve, reject) => {
    switch (FuckD.emoji) {
        case "开心":
            FuckD.data.qdxq = "kx"
            break
        case "难过":
            FuckD.data.qdxq = "ng"
            break
        case "郁闷":
            FuckD.data.qdxq = "ym"
            break
        case "无聊":
            FuckD.data.qdxq = "wl"
            break
        case "怒":
            FuckD.data.qdxq = "nu"
            break
        case "擦汗":
            FuckD.data.qdxq = "ch"
            break
        case "奋斗":
            FuckD.data.qdxq = "fd"
            break
        case "慵懒":
            FuckD.data.qdxq = "yl"
            break
        case "衰":
            FuckD.data.qdxq = "shuai"
            break
        default:
            FuckD.data.qdxq = FuckD.mood[FuckF.getRandomNum(FuckD.mood.length)]
    }

    switch (FuckD.mode) {
        case "todaysay":
            FuckD.data.qdmode = 1
            FuckD.data.todaysay = FuckD.text || new Date().toISOString()
            break
        case "fastreply":
            FuckD.data.qdmode = 2
            FuckD.data.fastreply = 1
            break
        default:
            FuckD.data.qdmode = 3
    }

    FuckF.signStart = async () => {
        try {
            const initCheck = await FuckF.xhr({
                url: "https://bbs.tampermonkey.net.cn/",
                headers: {
                    "user-agent": FuckD.ua.pc,
                },
            })
            if (initCheck) {
                const formhash = initCheck.match(/formhash=(.*?)"/)
                if (formhash) {
                    const dsuSign = await FuckF.xhr({
                        method: "POST",
                        url: "https://bbs.tampermonkey.net.cn/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1",
                        headers: {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            "referer": "https://bbs.tampermonkey.net.cn/",
                            "user-agent": FuckD.ua.pc,
                        },
                        data: new URLSearchParams({
                            "formhash": formhash[1],
                            ...FuckD.data
                        }).toString(),
                    })
                    if (dsuSign) {
                        const result = dsuSign.replace(/\s/g, "")
                        FuckF.log("🔵", result)
                        const res = result.match(/class="c">(.*?)<\/div><\/div>\]\]/)
                        if (res) {
                            const signed = res[1].match(/成功/)
                            if (signed) {
                                FuckF.log("🟢", res[1], true)
                            } else {
                                FuckF.log("🟣", res[1], true)
                            }
                        }
                    }
                } else {
                    FuckF.log("🟡", "请先登录才能继续操作！", true)
                }
            }
        } catch (e) {
            FuckF.log("🔴", e.message, true)
        }
        resolve()
    }

    FuckF.signStart()
})
