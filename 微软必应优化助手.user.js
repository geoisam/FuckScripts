// ==UserScript==
// @name            微软必应优化助手
// @namespace       https://github.com/geoi6sam1
// @version         1.2.3
// @description     微软必应（Microsoft Bing）搜索结果优化，支持电脑端和移动端
// @author          geoi6sam1
// @match           http*://*.bing.com/*
// @icon            https://bing.com/favicon.ico
// @supportURL      https://github.com/geoi6sam1/FuckScripts/issues
// @run-at          document-start
// @grant           unsafeWindow
// @grant           GM_addStyle
// @license         GPL-3.0
// @updateURL       https://raw.githubusercontent.com/geoi6sam1/FuckScripts/main/%E5%BE%AE%E8%BD%AF%E5%BF%85%E5%BA%94%E4%BC%98%E5%8C%96%E5%8A%A9%E6%89%8B.user.js
// @downloadURL     https://raw.githubusercontent.com/geoi6sam1/FuckScripts/main/%E5%BE%AE%E8%BD%AF%E5%BF%85%E5%BA%94%E4%BC%98%E5%8C%96%E5%8A%A9%E6%89%8B.user.js
// ==/UserScript==

(function () {
    'use strict'

    const obj = {
        /*** 个性化选项 ***/
        option: {
            faq: 1, // 相关问题，默认显示，值为1
            news: 1, // 相关资讯，默认显示，值为1
            maps: 0, // 相关位置，默认隐藏，值为0
            video: 0, // 相关视频，默认隐藏，值为0
            image: 0, // 相关图像，默认隐藏，值为0
            relSearches: 1, // 底部相关搜索，默认显示，值为1
            histories: 0, // 底部历史搜索，默认隐藏，值为0
            web: [ // 隐藏相关网页，默认example.com
                "example.com",
            ],
        },
    }

    obj.bingVideo = function () {
        GM_addStyle(`
li.b_ans:has(#serpvidans)
{
    display: none !important;
}
        `)
    }

    obj.bingImage = function () {
        GM_addStyle(`
li.b_ans:has(.imgPart)
{
    display: none !important;
}
        `)
    }

    obj.bingFAQ = function () {
        GM_addStyle(`
li.b_ans:has(.df_alaskcarousel)
{
    display: none !important;
}
        `)
    }

    obj.bingRelevantSearches = function () {
        GM_addStyle(`
li.b_ans:has(.b_rs)
{
    display: none !important;
}
        `)
    }

    obj.bingMaps = function () {
        GM_addStyle(`
li.b_ans:has(#lMapContainer)
{
    display: none !important;
}
        `)
    }

    obj.bingNews = function () {
        GM_addStyle(`
li.b_ans:has(#ans_nws)
{
    display: none !important;
}
        `)
    }

    obj.bingHistories = function () {
        GM_addStyle(`
#b_recSQ,
li.b_ans:has(.b_mrs)
{
    display: none !important;
}
        `)
    }

    GM_addStyle(`
.b_ad,
.ad_sc,
.adsblock,
#ads_banner,
li.b_algo:has(.b_attribution[data-partnertag]),
.b_hPanel:has([class*="bingApp_"]),
.sidebar:has(.ads_dwn),
#bgPro,
#b_pole,
#id_mobile,
#suspenBar,
#b_opalpers,
#bnp_ttc_div,
#bnp_rich_div,
#b_ims_bza_pole,
#ev_talkbox_wrapper,
#idCont [id*="id_qrcode"],
#b_notificationContainer_bop,
li.b_ans:has(#opal_serpftrcta),
#b_footer ul
{
    display: none !important;
}
`)

    obj.option.web.forEach((item) => {
        GM_addStyle(`
li.b_ans:has(a[href*="${item}"]),
li.b_algo:has(a[href*="${item}"])
{
    display: none !important;
}
        `)
    })

    var arr = [
        [obj.option.faq, obj.bingFAQ],
        [obj.option.news, obj.bingNews],
        [obj.option.maps, obj.bingMaps],
        [obj.option.video, obj.bingVideo],
        [obj.option.image, obj.bingImage],
        [obj.option.relSearches, obj.bingRelevantSearches],
        [obj.option.histories, obj.bingHistories],
    ]
    arr.forEach((item) => {
        if (item[0] == 0) {
            item[1]()
        }
    })

})()
