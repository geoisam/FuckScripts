// ==UserScript==
// @name         微软必应优化助手
// @namespace    https://geoisam.github.io
// @version      2.0.6
// @description  微软必应（Microsoft Bing）搜索结果优化，支持电脑端和移动端
// @author       geoisam@qq.com
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD+0k4S/NFTevzNUtb6yFL/98JQ//W8Tv/ytEz/76tIuO6hREf///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A/tVSNv7UVeT80VX/+81T//rIUv/3wlD/9bxO//K0TP/vq0n/76JG/++YQrjwijcS////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP/WUzb+1lby/tRW//zRVf/7zVP/+shS//fCUP/1vE7/8rRM/++rSf/uokb/75hD//COP/Lxgzp6////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD/108S/9dX8v7WVv/+1Fb//NFV//vNU//6yFL/98JQ//S8Tv/ytEz/7qtJ/+6hRf/umEP/8I4///CEO//xezfH8HEyJP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP/YVInrk0Tz310u6dxTKffjcDbn8adK9vrIUv/3wlD/9LxO//K0TP/uq0n/7qFF/+6XQv/vjT7/74M7/+96N//ucDLy7mYsWP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A64RB7N9PI//fTiH/304h/99OIf/fUCT/5XE67vfCUP/0vE7/8bNL/+6qSf/toUX/7ZZB/+6MPf/ugjn/7ng1/+xuMP/qZSz/4381vf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APerRWHkWiz/41Qk/+NUJP/jVCT/41Qk/+NUJP/jVCT/98JPR/S7TOTxs0v/7apI/+ygRP/slkH/7Ys8/+yAN//rdjP/6Wwt/+dhKP/jWyT31NxgQP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A6nAwUudbJ//nWyf/51sn/+dbJ//nWyf/51sn/+dbJ/////8A////APGySInsqUfy7J9D/+uUP//riTr/6n41/+lzMP/maCr/410k/95THv/V212w////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDqYStF6mEr/+phK//qYSv/6mEr/+phK//qYSv/6mEr/////wD///8A////AOynRCTqnUC46ZI9/+mHOP/nezP/5XAt/+JkJv/eWB//2FAZ99bbWv/V3F8Q////AP///wD///8A////AP///wD///8A////AP///wD///8A////AO1oLUXtaC3/7Wgt/+1oLf/taC3/7Wgt/+1oLf/taC3/////AP///wD///8A////AP///wDnkDpH5oQ01uR4L//hbCn/3V8h/9hTGv/VbyHq19pV/9XbXED///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A724vRe9uL//vbi//724v/+9uL//vbi//724v/+9uL/////8A////AP///wD///8A////AP///wD///8A4HMqetxnJPLXWRv/1GMZ7dvOQv/Z2k//1ttYQP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDyczFF8nMx//JzMf/yczH/8nMx//JzMf/yczH/8nMx/////wD///8A////AP///wD///8A////AO3NGxDp0BRg5MYctt2wIv/f1jT/3NhA/9rZSv/Y2lNA////AP///wD///8A////AP///wD///8A////AP///wD///8A////APR6MkX0ejL/9Hoy//R6Mv/0ejL/9Hoy//R6Mv/0ejL/////AP///wD///8A////APbEKhDzxyWQ78of/+vOGP/n0RT/5NMh/+HVLf/e1zn/29hF/9naTjD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9YAzRfWAM//1gDP/9YAz//WAM//1gDP/9YAz//WAM/////8A////AP///wD///8A+MMswPXFKP/xyCL/7cwc/+nQFf/l0hr/49Qm/+DWMv/d1z/g////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD3hzRF94c0//eHNP/3hzT/94c0//eHNP/3hzT/94c0/////wD///8A////APzAMiD5wi7/98Qq//TGJv/wyiD/7M4Z/+fREv/k0h//4dQr/97WN4D///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APiNNUX4jTX/+I01//iNNf/4jTX/+I01//iNNf/4jTX/////AP///wD///8A/b8zkPvBMP/4wyz/9sUp//LII//uyx3/6s8W/+bSGP/j0yTQ4NUwEP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+pI2RfqSNv/6kjb/+pI2//qSNv/6kjb/+pI2//qSNv////8A////AP///wD9vzTw/L8y//rBL//3wyv/9MYn//DJIP/szRr/6NET8OXSHTD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD7mDdF+5g3//uYN//7mDf/+5g3//uYN//7mDf/+5g3/////wD///8A/r42UP6+Nf/9vzP/+8Ax//nCLf/2xCn/88ck/+/LHsDrzxcQ////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APudN0X7nTf/+503//udN//7nTf/+503//udN//7nTf/////AP///wD/vTew/r41//6+NP/9vzP/+sEv//jDLMD1xShA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+qA4RfqgOP/6oDj/+qA4//qgOP/6oDj/+qA4//qgOP////8A////AP+9N/D/vTb//r41//2/NOD8wDFQ////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD5ozhF+aM4//mjOP/5ozj/+aM4//mjOP/5ozj/+aM4/////wD///8A/703MP+9N8D+vjZg////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APmnOUX5pzn/+ac5//mnOf/5pzn/+ac5//mnOf/5pzn/////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A+ao5RfmqOf/5qjn/+ao5//mqOf/5qjn/+ao5//mqOf////8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD5rTlF+a05//mtOf/5rTn/+a05//mtOf/5rTn/+a05/////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APixOkX4sTr/+LE6//ixOv/4sTr/+LE6//ixOv/4sTr/////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A97M6RfezOv/3szr/97M6//ezOv/3szr/97M6//ezOfH///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD3tztF97c7//e3O//3tzv/97c7//e3O//3tzv/97c6hv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////APa6O0X2ujv/9ro7//a6O//2ujv/9ro7//a6Oob///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A9b08RfW9PP/1vTz/9b08//W9O9T1vTs0////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD1wD4S9b871PW/O/H1vzp2////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A///////AH///gAf//wAD//4AAP/+AAB//gAAP/wAAB/8AwAf/AOAD/wD4A/8A/gP/APwD/wDwA/8A8Af/AOAH/wDgB/8A4A//AMAf/wDAf/8Awf//AMf//wD///8A////AP///wD///8A////AP///wH///8D////D////////8=
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @require      https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.js
// @resource     swalStyle https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.22.2/sweetalert2.min.css
// @match        http*://*.bing.com/*
// @run-at       document-start
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_getResourceText
// @grant        GM_registerMenuCommand
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


(function () {
    "use strict";

    const pjs = {
        option: [{
            name: "bing_FAQ",
            value: false
        }, {
            name: "bing_News",
            value: false
        }, {
            name: "bing_Image",
            value: false
        }, {
            name: "bing_Video",
            value: false
        }, {
            name: "bing_Search",
            value: false
        }, {
            name: "bing_Center",
            value: true
        }, {
            name: "bing_MaxWidth",
            value: 1080
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
    .pjs-setting-input { border: 1px solid #7066e0; box-sizing: border-box; padding: 5px 10px; border-radius: 5px; width: 100px}
    `)
            GM_addStyle(GM_getResourceText("swalStyle"))
        },

        registerMenuCommand() {
            GM_registerMenuCommand("⚙️ 设置", () => {
                let dom = `<div>
    <label class="pjs-setting-label">隐藏相关用户问题<input type="checkbox" id="S-FAQ" ${pjs.getValue("bing_FAQ") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
    <label class="pjs-setting-label">隐藏相关资讯文章<input type="checkbox" id="S-News" ${pjs.getValue("bing_News") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
    <label class="pjs-setting-label">隐藏中间相关图像<input type="checkbox" id="S-Image" ${pjs.getValue("bing_Image") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
    <label class="pjs-setting-label">隐藏中间相关视频<input type="checkbox" id="S-Video" ${pjs.getValue("bing_Video") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
    <label class="pjs-setting-label">隐藏底部相关搜索<input type="checkbox" id="S-Search" ${pjs.getValue("bing_Search") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
    <label class="pjs-setting-label">电脑端页面平铺居中<input type="checkbox" id="S-Center" ${pjs.getValue("bing_Center") ? "checked" : ""}><span class="pjs-setting-checkbox"></span></label>
    <label class="pjs-setting-label">页面平铺最大宽度 (像素)<input type="number" min="1000" id="S-MaxWidth" value="${pjs.getValue("bing_MaxWidth")}" class="pjs-setting-input"></label>
    </div>`

                Swal.fire({
                    title: "Bing Config",
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

                document.querySelector("#S-FAQ").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_FAQ")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-News").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_News")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-Image").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_Image")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-Video").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_Video")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-Search").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_Search")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-Center").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_Center")
                    targetItem.value = e.currentTarget.checked
                })
                document.querySelector("#S-MaxWidth").addEventListener("change", (e) => {
                    const targetItem = pjs.option.find(item => item.name == "bing_MaxWidth")
                    e.currentTarget.value < 1000 ? targetItem.value = 1000 : targetItem.value = e.currentTarget.value
                })
            })
        },

        autoGoGoGo() {
            const isMobile = /Android|webOS|iPhone|iPad|iPod|Opera Mini|Mobile/i.test(navigator.userAgent)
            const optionNames = pjs.option.map(item => item.name)
            optionNames.forEach(name => {
                const targetItem = pjs.option.find(item => item.name === name)
                if (targetItem) targetItem.value = pjs.getValue(name)
            })

            GM_addStyle(`
[class$="_ad"],
[class^="ad_"],
[class^="ads_"],
#ads_banner,
#sacs_win,
.b_vfly,
.b_bza_pole,
li.b_algo:has(.b_attribution[data-partnertag]),
li.b_algo[style],
li:has([class*="_adTA"]),
.b_hPanel:has([class*="bingApp_"]),
.sidebar:has(.ads_dwn),
#bgPro,
#b_pole,
#id_mobile,
#suspenBar,
#b_opalpers,
#bnp_idh_fly,
#bnp_ttc_div,
#bnp_rich_div,
#b_ims_bza_pole,
#ev_talkbox_wrapper,
#idCont [id*="id_qrcode"],
#b_notificationContainer_bop,
.cn_related_search_upsell_container,
li.b_ans:has(#opal_serpftrcta),
li:has(.b_adSlug),
.adsblock
{ display: none !important; }
`)

            if (pjs.getValue("bing_FAQ")) {
                GM_addStyle(`li.b_ans:has(.b_vPanel),li.b_ans:has(#relatedQnAListDisplay) { display: none !important; }`)
            }

            if (pjs.getValue("bing_News")) {
                GM_addStyle(`li.b_ans:has(#ans_nws),li.b_ans:has(.new_see_more) { display: none !important; }`)
            }

            if (pjs.getValue("bing_Image")) {
                GM_addStyle(`li.b_ans:has(.imgPart),li.b_ans:has(.acfImgAns) { display: none !important; }`)
            }

            if (pjs.getValue("bing_Video")) {
                GM_addStyle(`li.b_ans:has(#serpvidans) { display: none !important; }`)
            }

            if (pjs.getValue("bing_Search")) {
                GM_addStyle(`li.b_ans:has(.b_rs),li.b_ans:has(.b_mrs),#b_recSQ,.b_inline_ajax_rs { display: none !important; }`)
            }

            if (pjs.getValue("bing_Center")) {
                if (!isMobile) {
                    GM_addStyle(`
    #b_header { display: flex !important;flex-direction: column;align-items: center; }
    #b_header .b_scopebar { margin: 10px auto !important; }
    #b_header #id_h { position: absolute; }
    #b_header #est_switch { margin:auto !important; }
    #b_header #sb_form { margin-left:-180px; }
    #ftr_pane,.aca_filterBar { margin: auto !important; }
    #fltIdtCon { right:-5rem !important;bottom:0 !important; }
    #b_content,#b_mcw { display: flex !important;flex-direction: column;width:100% !important;padding: 0 !important; }
    #b_content ol:not([role="list"]),.content:has(#dictionaryvoiceid) { display: flex !important;flex-direction: column;justify-content: center;width:100% !important;padding: 0 !important;margin: auto !important; }
    #b_content ol,.content:has(#dictionaryvoiceid),#b_wpt_container,.b_vPanel div { max-width: ${pjs.getValue("bing_MaxWidth")}px !important; }
    #b_content ol li.b_ans,#b_content ol li.b_algo { margin: 0.5rem !important; }
    #b_content ol li.aca_algo { margin: auto !important; }
    #b_content main { order: 0; }
    #b_content aside:has(#b_context) { order: -1;margin-top: 1.5rem; }
    #b_content footer { order: 1; }
    #b_context { height: auto !important; }
    #b_tween,#b_navheader,.aca_algo_count{ text-align: center;margin: 5px auto !important; }
    #adstop_gradiant_separator,.b_deep ul,#imc,.b_nwsAns,.b_rs,#gs_main .gs_h { width: 100% !important; }
    #b_alsotry,.b_nwsAns,.b_pag { display: flex !important;justify-content: center;align-items: center; }
    li.b_ans:has(.richrswrapper),li.b_ans:has(.b_rrsr) { display: none !important; }
    `)
                }
            }
        },

        init() {
            this.initValue()
            this.addPluginStyle()
            this.registerMenuCommand()
            this.autoGoGoGo()
        }
    }

    main.init()
})()
