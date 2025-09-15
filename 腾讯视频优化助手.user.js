// ==UserScript==
// @name         腾讯视频优化助手
// @namespace    https://geoisam.github.io
// @version      2.0.3
// @description  优化腾讯视频（WeTV）浏览与观影体验，支持电脑端和移动端
// @author       geoisam@qq.com
// @icon         data:image/x-icon;base64,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Q/8A50P/AOdD/wDnQ/+Pux7//5gA//+YAP//mAD//5gA//+YAP//mAD//5cAgAAAAAAAAAAAAAAAAACI/+4AiP//AIj//wCI//8Aq7j/AOdD/wDnQ/8A50P/v/nQ////////////////////////////7/7z/4Dzof8Q6U7/AOdD/wDnQ/8A50P/AOdD/wDnQ/9vxCb//5gA//+YAP//mAD//5gA//+YAP//mAD//5kAXgAAAAAAAAAAAIj//wCI//8AiP//AIj//wCruP8A50P/AOdD/wDnQ/+/+dD//////////////////////////////////////9/85/8w62b/AOdD/wDnQ/8A50P/AOdD/wDnQ/+gthn//5gA//+YAP//mAD//5gA//+YAP//lwDOAAAAAAAAAAAAiP//AIj//wCI//8AiP//AKu4/wDnQ/8A50P/AOdD/7/50P///////////////////////////////////////////7/50P8A50P/AOdD/wDnQ/8A50P/AOdD/2DJKf//mAD//5gA//+YAP//mAD//5gA//+YAP8AAAAAAAAAAACI//8AiP//AIj//wCI//8Aq7j/AOdD/wDnQ/8A50P/v/nQ//////////////////////////////////////+/+dD/IOpa/wDnQ/8A50P/AOdD/wDnQ/8A50P/v6wQ//+YAP//mAD//5gA//+YAP//mAD//5gAvgAAAAAAAAAAAIj/7gCI//8AiP//AIj//wClxP8A50P/AOdD/wDnQ/+/+dD////////////////////////////f/Of/X/CJ/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/4C/If//mAD//5gA//+YAP//mAD//5gA//+YAP//lwBAAAAAAAAAAAAAiP/eAIj//wCI//8AiP//AJ/Q/wDnQ/8A50P/AOdD/6/3xP/////////////////f/Of/X/CJ/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/yDdO/+gtRn//5gA//+YAP//mAD//5gA//+YAP//mAD//5kAXgAAAAAAAAAAAAAAAACI/74AiP//AIj//wCI//8An9D/AOdD/wDnQ/8A50P/kPSt///////f/Of/X/CJ/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/wDnQ/9gySr/36IJ//+YAP//mAD//5gA//+YAP//mAD//5kA7v+ZAFAAAAAAAAAAAAAAAAAAAAAAAIf/rgCI//8AiP//AIj//wCU5/8A50P/AOdD/wDnQ/8Q6U7/MOtm/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/wDnQ/8g3Tv/oLUZ//+YAP//mAD//5gA//+YAP//mAD//5gA//+YAN7/lwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAh/+AAIj//wCI//8AiP//AI7z/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/wDnQ/8Q4j//gL8h/++dBP//mAD//5gA//+YAP//mAD//5gA//+YAP//mACe/5cAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/0AAiP//AIj//wCI//8AiP//AOFP/wDnQ/8A50P/AOdD/wDnQ/8A50P/AOdD/wDnQ/8A50P/YMkq/9+iCf//mAD//5gA//+YAP//mAD//5gA//+YAP//mQDu/5kAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI/94AiP//AIj//wCI//8Az3L/AOdD/wDnQ/8A50P/AOdD/wDnQ/8g3Tv/gL8h/9+iCf//mAD//5gA//+YAP//mAD//5gA//+YAP//mAD//5gArv+XACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIj/fgCI//8AiP//AIj//wC9lf8A50P/AOdD/wDnQ/9Qzi7/oLUZ//+YAP//mAD//5gA//+YAP//mAD//5gA//+YAP//mAD//5gA3v+ZAF4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIr/bgCI/94AiP//EqW43mDJKv+gtRn/750E//+YAP//mAD//5gA//+YAP//mAD//5gA//+YAP//mAD//5kA7v+ZAH7/nwAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/5gA3v+YAP//mAD//5gA//+YAP//mAD//5gA//+YAP//mAD//5gA3v+YAJ7/lwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/mQB+/5gA//+YAP//mAD//5gA//+YAP//mAD//5gA3v+ZAF7/lwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/mABu/5kAzv+YAN7/mAC+/5gAkP+aADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////wf///4A///+AD//4AAP/8AAA//AAAH/wAAAf4AAAD+AAAAfgAAAD4AAAAOAAAADgAAAAYAAAAGAAAABgAAAA4AAAAeAAAAPgAAAH4AAAD/AAAD/wAAB/+AAB//wAB///gA///8B////h/////////////8=
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @require      https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.js
// @resource     swalStyle https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.css
// @match        http*://*.v.qq.com/*
// @match        http*://*.film.qq.com/*
// @match        http*://*.video.qq.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_openInTab
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// ==/UserScript==


const pjs = {
    option: [{
        name: "only_history_message",
        value: true
    }, {
        name: "display_barrage_none",
        value: true
    }, {
        name: "remove_watermark_logo",
        value: true
    }, {
        name: "filter_grayscale_zero",
        value: true
    }],
    getValue(name, value) {
        return GM_getValue(name, value)
    },
    setValue(name, value) {
        GM_setValue(name, value)
    }
}

const main = {
    initValue() {
        pjs.option.forEach((v) => {
            pjs.getValue(v.name) === undefined && pjs.setValue(v.name, v.value)
        })
    },

    addPluginStyle() {
        GM_addStyle(`
.swal2-title { margin-bottom: 1.25em !important;}
.pjs-popup { font-size: 14px !important;font-weight: bold !important;}
.pjs-setting-label { display: flex;align-items: center;justify-content: space-between;padding: 12px 0;}
.pjs-setting-label input[type="checkbox"] { position: absolute;opacity: 0;width: 0;height: 0;}
.pjs-setting-checkbox { position: relative;display: inline-block;width: 48px;height: 26px;background-color: #e0e0e0;border-radius: 19px;transition: background-color 0.3s;}
.pjs-setting-checkbox::before { content: "";position: absolute;left: 2px;top: 2px;width: 22px;height: 22px;background-color: #fff;border-radius: 50%;box-shadow: 0 2px 4px rgba(0,0,0,0.3);transition: transform 0.3s;}
.pjs-setting-label input:checked + .pjs-setting-checkbox { background-color: #7066e0;}
.pjs-setting-label input:checked + .pjs-setting-checkbox::before { transform: translateX(22px);}
`)
        GM_addStyle(GM_getResourceText("swalStyle"))
    },

    registerMenuCommand() {
        GM_registerMenuCommand("⚙️ 设置", () => {
            let dom = `<div>
<label class="pjs-setting-label">导航只显示历史和消息<input type="checkbox" id="S-Quick" ${pjs.getValue("only_history_message") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">隐藏视频弹幕相关内容<input type="checkbox" id="S-Danmu" ${pjs.getValue("display_barrage_none") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">移除视频右上角LOGO水印<input type="checkbox" id="S-Logo" ${pjs.getValue("remove_watermark_logo") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
<label class="pjs-setting-label">移除哀悼日网站灰度效果<input type="checkbox" id="S-Gray" ${pjs.getValue("filter_grayscale_zero") ? "checked" : ""} "><span class="pjs-setting-checkbox"></span></label>
</div>`

            Swal.fire({
                title: "WeTV Config",
                html: dom,
                showCloseButton: true,
                confirmButtonText: "保存",
                footer: `<div style="text-align: center;font-size: 1em;">✨ 助手免费开源　谨防上当受骗 ✨</div>`,
                customClass: {
                    popup: "pjs-popup",
                },
            }).then((res) => {
                if (res.isConfirmed) {
                    pjs.option.forEach((v) => {
                        pjs.setValue(v.name, v.value)
                    })
                    history.go(0)
                }
            })

            document.querySelector("#S-Quick").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "only_history_message")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Danmu").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "display_barrage_none")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Logo").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "remove_watermark_logo")
                targetItem.value = e.currentTarget.checked
            })
            document.querySelector("#S-Gray").addEventListener("change", (e) => {
                const targetItem = pjs.option.find(item => item.name == "filter_grayscale_zero")
                targetItem.value = e.currentTarget.checked
            })
        })
    },

    autoGoGoGo() {
        const txpQuick = pjs.getValue("only_history_message")
            , txpDanmu = pjs.getValue("display_barrage_none")
            , txpLogo = pjs.getValue("remove_watermark_logo")
            , txpGray = pjs.getValue("filter_grayscale_zero")
        const isMobile = /Android|webOS|iPhone|iPad|iPod|Opera Mini|Mobile/i.test(navigator.userAgent)

        let targetItem = null
        targetItem = pjs.option.find(item => item.name == "only_history_message")
        targetItem.value = txpQuick
        targetItem = pjs.option.find(item => item.name == "display_barrage_none")
        targetItem.value = txpDanmu
        targetItem = pjs.option.find(item => item.name == "remove_watermark_logo")
        targetItem.value = txpLogo
        targetItem = pjs.option.find(item => item.name == "filter_grayscale_zero")
        targetItem.value = txpGray

        GM_addStyle(`
.link_vip.__open_vip_tv,
.playlist-vip-section__vip,
[id^="ad_"],
[class$="-ad"],
[class$="_ad"],
[id^="iwan-game"],
#iwan-game,
#iwan-game-pendant,
#iwan-game-recommends,
#iwan-gamependant-page,
#iwan-gamesearchrank-page,
a[href*="qqgame."],
a[href*="iwan."],
.video-banner:has([data-ckey*="qqgame.qq.com"]),
.video-banner:has([data-ckey*="iwan.qq.com"]),
.video-card-wrap:has(.ad-flag),
.focus-list__item:has(.poster-ad),
.focus-title-wrap:has([class*="ad-"]),
.video-card-module [dt-params*="ad_"],
.video-focus[dt-params=""] .focus-img,
.client_download,
.tip_download,
.fixed_box,
.vip_act,
#ad_pc-index-vip-tips,
#channel-vip-popup,
#video-search-ad,
#ad_container,
#ad_m-site,
.game-switch-ad,
.banner-ad,
.txp_ad,
.player-comment-btn,
.preview-mini-player,
iframe[data-src*="mall."],
[class*="txp_full_screen_pause"],
[data-role*="creative-player-pause"],
.open-app.old-open,
.vip-adv-wrapper,
.bottom-wrapper,
.at-app-banner,
.quick_games
{
    display: none !important;
}
`)

        if (txpQuick) {
            GM_addStyle(`.quick_app,.quick_client,.quick_create,.quick_access,.quick_vip { display: none !important; }`)
        }

        if (txpDanmu) {
            GM_addStyle(`[class*="-barrage"],[class*="barrage-"] { display: none !important; }`)
            if (!isMobile) {
                GM_addStyle(`iframe[src*="vfiles.gtimg.cn/tvideo/libcocos-frame"] { display: none !important; }`)
            }
        }

        if (txpLogo) {
            const t = setInterval(() => {
                const d = document.querySelector(`.txp-watermark[data-role="txp-ui-watermark-mod"]`)
                if (d) {
                    d.remove()
                }
            }, 1e3)
            setTimeout(() => {
                clearInterval(t)
            }, 9e3)
        }

        if (txpGray) {
            GM_addStyle(`.gray-style-remembrance { -webkit-filter: grayscale(0) !important;filter: grayscale(0) !important; }`)
        }

        window.addEventListener("DOMContentLoaded", () => {
            let runme = null
            clearAd()
            window.addEventListener("pushState", () => {
                clearInterval(runme)
                clearAd()
            })
            function clearAd() {
                runme = setInterval(() => {
                    let tvads = document.querySelectorAll(".txp_ad video")
                    tvads.forEach(ad => {
                        try {
                            if (ad.duration !== ad.currentTime) {
                                ad.setAttribute("src", "")
                                ad.style.display = "none"
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    })
                }, 100)
                let tcads = document.querySelectorAll(".txp_ad_control")
                tcads.forEach(item => {
                    item.style.display = "none"
                })
            }

            const player = document.querySelectorAll(".txp_videos_container")
            if (player.length != 0) {
                const observerConfig = {
                    attributes: true,
                    attributeFilter: ['style'],
                }, observer = new MutationObserver((mutationsList, observer) => {
                    for (const mutation of mutationsList) {
                        mutation.target.removeAttribute("style")
                    }
                })
                player.forEach((e) => {
                    observer.observe(e, observerConfig)
                })
            }
        })
    },

    init() {
        this.initValue()
        this.addPluginStyle()
        this.registerMenuCommand()
        this.autoGoGoGo()
    }
}

main.init()
