// ==UserScript==
// @name         百度网盘音频播放器（改）
// @namespace    https://geoisam.github.io
// @version      0.2.0.20240713
// @description  原作者脚本：https://scriptcat.org/script-show-page/995
// @author       geoisam@qq.com 
// @icon         data:image/png;base64,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
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @require      https://scriptcat.org/lib/1359/1.1.1/PipLyric.js
// @require      https://unpkg.com/jquery@3.7.1/dist/jquery.min.js
// @require      https://unpkg.com/hls.js@1.6.13/dist/hls.min.js
// @require      https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.js
// @resource     aplayerCSS https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.css
// @match        https://pan.baidu.com/disk/main*
// @match        https://yun.baidu.com/disk/main*
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @connect      kugou.com
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


var $ = unsafeWindow.jQuery || window.jQuery || jQuery || $
var obj = {
    audio_page: {
        fileList: [],
        fileIndex: -1
    }
}

obj.replaceNativePlayer = function () {
    const observer = new MutationObserver((mutationsList, observer) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.classList.contains("nd-audio")) {
                        if (!node.only) {
                            node.only = true
                            const { bpAudio, fileList, fileMetaList } = node.__vue__
                            obj.audio_page.fileList = (document.querySelector(".nd-new-main-list")?.__vue__?.fileList || fileMetaList).filter((item, index) => {
                                return item.category === 2 || item.category === 6 && !item.isdir && ["flac", "ape"].includes(item.server_filename.split(".").pop().toLowerCase())
                            })
                            obj.audio_page.fileIndex = obj.audio_page.fileList.findIndex((item, index) => {
                                return item.fs_id == fileList[0].fs_id
                            })
                            if (node.classList.contains("normal")) {
                                bpAudio.destroy()
                                node.parentNode.removeChild(node)
                                obj.aplayerStart()
                            }
                        }
                    }
                })
            }
        })
    })
    const config = { childList: true, subtree: true }
    const targetNode = document.body
    observer.observe(targetNode, config)
}

obj.insertPrettyPlayer = function () {
    var element = document.querySelector(".nd-new-main-list")
    if (element) {
        Object.defineProperty(element, "__vue__", {
            set(__vue__) {
                var playbtn = $(".wp-s-header__center .play-btn")
                if (__vue__ && Array.isArray(__vue__.fileList)) {
                    (obj.audio_page.fileList = __vue__.fileList.filter((item, index) => {
                        return item.category === 2 || item.category === 6 && !item.isdir && ["flac", "ape"].includes(item.real_category.toLowerCase())
                    })).length ? playbtn.length || $('<div class="wp-s-agile-tool-bar__h-action is-need-left-sep is-list play-btn" style="border-top-right-radius: 16px;border-bottom-right-radius: 16px;"><button type="button" class="u-button wp-s-agile-tool-bar__h-action-button u-button--text u-button--small" title="音乐播放" style="height: 32px;"><i class="u-icon-play"></i><span>音乐播放</span></button></div>').appendTo(".wp-s-header__center").on("click", () => {
                        obj.aplayerStart()
                    }) : playbtn.length && playbtn.remove()
                    if (__vue__.selectLength && obj.audio_page.fileList.length) {
                        var audiofile = __vue__.selectedList.find((item) => {
                            return item.category === 2 || item.category === 6 && !item.isdir && ["flac", "ape"].includes(item.real_category.toLowerCase())
                        })
                        audiofile && (obj.audio_page.fileIndex = obj.audio_page.fileList.findIndex((item, index) => {
                            return item.fs_id == audiofile.fs_id
                        }))
                    }
                }
            }
        })
    }
}

obj.aplayerStart = function () {
    var aplayerNode, audio = obj.audio_page.fileList
    audio.forEach((item) => {
        Object.assign(item, {
            name: item.server_filename,
            artist: item.singer,
            url: "/rest/2.0/xpan/file?method=streaming&path=" + encodeURIComponent(item.path) + "&type=M3U8_HLS_MP3_128",
            cover: item.categoryImageGrid || item.categoryImage,
            theme: "#06a7ff",
            type: "customHls"
        })
    })
    if (audio.length) {
        aplayerNode = document.getElementById("aplayer")
        if (aplayerNode) {
            if (window.player) {
                window.player.destroy()
            }
        }
        else {
            aplayerNode = document.createElement("div")
            aplayerNode.setAttribute("id", "aplayer")
            aplayerNode.setAttribute("style", "background-color: #fafdff;position: fixed;z-index: 9999;width: 440px;bottom: 0;left: 80px;box-shadow: 0 0 10px #ccc;border-top-left-radius: 4px;border-top-right-radius: 4px;border: 1px solid #dedede;")
            document.body.appendChild(aplayerNode)
        }
    }
    else {
        console.error("未找到音频文件", audio)
        return
    }
    try {
        const player = window.player = new window.APlayer({
            container: aplayerNode,
            audio: audio,
            customAudioType: {
                customHls(audioElement, audio, player) {
                    const Hls = window.Hls
                    if (Hls.isSupported()) {
                        if (player.hls) player.hls.destroy()
                        const hls = player.hls = new Hls()
                        hls.loadSource(audio.url)
                        hls.attachMedia(audioElement)
                        hls.on(Hls.Events.ERROR, (event, data) => {
                            if (data.fatal) {
                                switch (data.type) {
                                    case Hls.ErrorTypes.NETWORK_ERROR:
                                        if (data.details === Hls.ErrorDetails.MANIFEST_LOAD_ERROR) {
                                            var errno = JSON.parse(data.networkDetails.response).errno
                                            if (errno == 31341) {
                                                hls.loadSource(hls.url)
                                            }
                                            else {
                                                const { list } = player
                                                list.remove(list.index)
                                            }
                                        }
                                        else if (data.details === Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT || data.details === Hls.ErrorDetails.MANIFEST_PARSING_ERROR) {
                                            hls.loadSource(hls.url)
                                        }
                                        else {
                                            hls.startLoad()
                                        }
                                        break
                                    case Hls.ErrorTypes.MEDIA_ERROR:
                                        hls.recoverMediaError()
                                        break
                                    default:
                                        hls.destroy()
                                        break
                                }
                            }
                        })
                    }
                    else if (audioElement.canPlayType("application/x-mpegURL") || audioElement.canPlayType("application/vnd.apple.mpegURL")) {
                        audioElement.src = audio.url
                    }
                    else {
                        player.notice("Error: HLS is not supported.")
                    }
                }
            },
            autoplay: true,
            lrcType: 1,
            listFolded: false,
        })
        obj.onEvents(player)

        const { list, template: { time, body } } = player
        const fileIndex = obj.audio_page.fileIndex
        if (fileIndex > -1 && list.audios.length > 1 && list.index !== fileIndex) {
            list.switch(fileIndex)
        }

        $(time).children().css("display", "inline-block")
        $(body).prepend('<button class="u-dialog__headerbtn" title="关闭播放器" style="top: 6px;right: 9px;"><i class="u-dialog__close u-icon u-icon-close"></i></button>').children(".u-dialog__headerbtn").on("click", () => {
            player.destroy()
        })
        $('<a href="javascript:;" title="删除当前音频" style="position: absolute;right: 36px;font-size: 14px;top: 6px;"><img src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png" style="width: 18px;"></a>').prependTo(body).on("click", (event) => {
            switch (event.type) {
                case "mouseenter":
                case "mouseover":
                case "mouseleave":
                case "mouseout":
                case "click":
                    var { list } = player
                    list.remove(list.index)
                    break
                default:
            }
        })
    } catch (error) {
        console.error("创建播放器错误", error)
    }
}

obj.onEvents = function (player) {
    obj.initPipLyric(player)
    obj.loadLyric(player)

    player.on("listswitch", ({ index }) => {
        if (this.index != index) {
            this.index = index
            obj.loadLyric(player, index)
        }
    })

    player.on("destroy", () => {
        if (player.hls) player.hls.destroy()
        if (player.pipLyric) player.pipLyric.leave()
        window.player = null
    })
}

obj.loadLyric = function (player, index) {
    const { list, template: { pic, author }, lrc } = player
    var file = list.audios[index == null ? list.index : index] || {}
        (file.name && file.hash) || Object.assign(file, {
            name: file.server_filename,
            hash: file.md5,
            size: file.size
        })
    obj.querySongInfo(file).then((result) => {
        const { author_name, img, lyric } = result
        author_name && (author.innerText = "- " + author_name)
        img && (pic.style.cssText += "background-image: url(" + img + ")")
        if (lyric) {
            lrc.parsed[list.index] = lrc.current = lrc.parse(lyric)
            lrc.container.innerHTML = lrc.parsed[list.index].map((item) => `<p>${item[1]}</p>`).join("\n")
            lrc.container.getElementsByTagName("p").length && lrc.container.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current")
        }
        if (obj.initPipLyric(player)) {
            const pipinfo = {
                id: result.id || result.audio_id || 1234567890,
                name: result.audio_name || result.songname,
                artists: (result.authors || []).map((n) => {
                    return n && {
                        name: n.author_name
                    }
                }).filter(Boolean),
                album: {
                    picUrl: result.img,
                },
                lrc: {
                    lyric: result.lyric || result.lyrics
                }
            }
            player.pipLyric.setData(pipinfo)
        }
    }).catch((error) => {
        if (obj.initPipLyric(player)) {
            player.pipLyric.setData({
                id: 1234567890,
                name: file.name.split(".").slice(0, -1).join("."),
                lrc: {
                    lyric: "[00:00.00]（改）百度网盘音频播放器\r\n[00:01.00]愿你一生欢喜，不为世俗所及。\r\n[10:00.00]THE END."
                },
            })
        }
    })
}

obj.initPipLyric = function (player) {
    if (player.pipLyric) return true
    const PipLyric = window.PipLyric || unsafeWindow.PipLyric
    if (PipLyric && PipLyric.support) {
        player.template.time.insertAdjacentHTML("beforeend", '<button type="button" class="aplayer-icon aplayer-icon-pip" style="display: inline-block;"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M2.667 2.667h18.667v18.667h-18.667v-18.667M29.333 10.667v18.667h-18.667v-5.333h2.667v2.667h13.333v-13.333h-2.667v-2.667h5.333z"></path></svg></button>')
        player.template.pipButton = player.template.time.lastElementChild || player.template.time.lastChild
        player.pipLyric = new PipLyric({
            audio: player.audio,
            pip: player.template.pipButton,
            prev: player.template.skipBackButton,
            next: player.template.skipForwardButton,
        })
        return true
    }
    return false
}

obj.querySongInfo = function (file) {
    const { songInfo, name, hash, size } = file
    if (songInfo) {
        return Promise.resolve(songInfo)
    }
    return obj.songinfoKugou(name, hash, size).then((result) => {
        if (result.img) {
            if (result.img.indexOf("/400/") > -1) result.img = ""
            result.img = result.img.replace(/^https?:/, "")
        }
        file.songInfo = result
        return result
    })
}

obj.songinfoKugou = function (name, hash, size) {
    return obj.songinfoKugouByHash(hash).then((result) => {
        return result
    }, (e) => {
        return obj.songinfoKugouByName(name, hash, size)
    })
}

obj.songinfoKugouByHash = function (hash) {
    if (!hash) return Promise.reject()
    return obj.searchKugouByHash(hash).then((result) => {
        return obj.getdataKugou(hash).then((data) => {
            var candidates = result.candidates.slice(0, 3)
            var promises = []
            candidates.forEach((item, index) => {
                promises.push(obj.downloadKugouByHash(item.id, item.accesskey))
            })
            return Promise.allSettled(promises).then((results) => {
                results.forEach((item, index) => {
                    if (item.status == "fulfilled" && item.value) {
                        Object.assign(candidates[index], { lyric: item.value }, { sourceType: "KuGou" })
                    }
                })
                return candidates.find((item, index) => {
                    return (item.lyric || item.lyrics) && Object.assign(item, data)
                }) || Promise.reject()
            })
        })
    })
}

obj.searchKugouByHash = function (hash) {
    return new Promise((resolve, reject) => {
        obj.ajax({
            url: "https://lyrics.kugou.com/search?ver=1&man=yes&client=pc&keyword=&duration=&hash=" + hash,
            headers: {
                referer: "https://www.kugou.com/"
            },
            success(result) {
                if (result && result.status == 200 && result.proposal !== "0") {
                    resolve(result)
                }
                else {
                    reject(result)
                }
            },
            error(error) {
                reject(error)
            }
        })
    })
}

obj.downloadKugouByHash = function (id, accesskey) {
    return new Promise((resolve, reject) => {
        obj.ajax({
            url: "https://lyrics.kugou.com/download?ver=1&client=pc&id=" + id + "&accesskey=" + accesskey + "&fmt=lrc&charset=utf8",
            headers: {
                referer: "https://www.kugou.com/"
            },
            success(result) {
                resolve(result)
            },
            error(error) {
                reject(error)
            }
        })
    })
}

obj.songinfoKugouByName = function (name, hash, size) {
    return obj.searchKugouByName(name, hash, size).then((result) => {
        var info = result.info
        let infoFilter = info.filter((item, index) => {
            return item.hash == hash || item["320filesize"] == size || item.filesize == size || item.sqfilesize == size
        })
        if (infoFilter.length) {
            info = infoFilter
        } else {
            info.forEach((item, index) => {
                item.nameSimilar = obj.textSimilarity(name.toLowerCase(), (item.audio_name || item.filename || item.songname).toLowerCase())
            })
            info = info.sort((a, b) => {
                return +b.nameSimilar - +a.nameSimilar
            }).slice(0, 3)
        }
        var promises = []
        info.forEach((item, index) => {
            promises.push(obj.getdataKugou(item.hash))
        })
        info.forEach((item, index) => {
            promises.push(obj.krcKugou(item.hash))
        })
        return Promise.allSettled(promises).then((results) => {
            const len = info.length
            results.forEach((item, index) => {
                if (item.status == "fulfilled" && item.value) {
                    if (index < len) {
                        Object.assign(info[index], item.value, { sourceType: "KuGou" })
                    }
                    else {
                        Object.assign(info[index % len], { lyric: item.value }, { sourceType: "KuGou" })
                    }
                }
            })
            return info.find((item, index) => {
                return item.lyric || item.lyrics
            }) || Promise.reject()
        })
    })
}

obj.searchKugouByName = function (name, hash, size) {
    return new Promise((resolve, reject) => {
        obj.ajax({
            url: "http://mobilecdn.kugou.com/api/v3/search/song?pagesize=20&keyword=" + name,
            headers: {
                referer: "http://www.kugou.com/"
            },
            success(result) {
                if (result && result.status == 1 && result.data.total) {
                    resolve(result.data)
                }
                else {
                    reject(result)
                }
            },
            error(error) {
                reject(error)
            }
        })
    })
}

obj.krcKugou = function (hash) {
    return obj.surlRequest("https://m.kugou.com/app/i/krc.php?cmd=100&timelength=999999&hash=" + hash)
}

obj.getdataKugou = function (hash) {
    return new Promise((resolve, reject) => {
        obj.ajax({
            url: "https://www.kugou.com/yy/index.php?r=play/getdata&hash=" + hash,
            headers: {
                referer: "https://www.kugou.com/"
            },
            success(result) {
                if (result && result.status == 1) {
                    resolve(result.data)
                }
                else {
                    reject(result)
                }
            },
            error(error) {
                reject(error)
            }
        })
    })
}

obj.surlRequest = function (url) {
    return new Promise((resolve, reject) => {
        obj.ajax({
            url: url,
            dataType: "blob",
            success(blob) {
                var reader = new FileReader()
                reader.readAsText(blob, "UTF-8")
                reader.onload = (e) => {
                    resolve(reader.result)
                }
                reader.onerror = (e) => {
                    reject(e)
                }
            },
            error(error) {
                reject(error)
            }
        })
    })
}

obj.ajax = function (option) {
    var details = {
        method: option.type || "get",
        url: option.url,
        responseType: option.dataType || "json",
        onload(result) {
            var response = result.response || result.responseText
            if (parseInt(result.status / 100) == 2) {
                option.success && option.success(response)
            }
            else {
                option.error && option.error(response)
            }
        },
        onerror(result) {
            option.error && option.error(result.error)
        }
    }
    if (option.data) {
        if (option.data instanceof Object) {
            details.data = Object.keys(option.data).map((k) => {
                return encodeURIComponent(k) + "=" + encodeURIComponent(option.data[k]).replace("%20", "+")
            }).join("&")
        }
        else {
            details.data = option.data
        }
        if ((option.type || "get").toUpperCase() == "GET") {
            details.url = option.url + (option.url.includes("?") ? "&" : "?") + details.data
            delete details.data
        }
    }
    if (option.headers) {
        details.headers = option.headers
    }
    GM_xmlhttpRequest(details)
}

obj.textSimilarity = function (textA, textB) {
    if (!textA || !textB) return 0
    var segment = (text) => {
        return ("" + text).split("")
    }
    var segmentWordsA = segment(textA)
    var segmentWordsB = segment(textB)
    var distributionWordsArray = {}

    segmentWordsA.forEach(element => {
        if (!distributionWordsArray.hasOwnProperty(element)) {
            distributionWordsArray[element] = [1, 0]
        } else {
            distributionWordsArray[element][0] += 1
        }
    })
    segmentWordsB.forEach(element => {
        if (!distributionWordsArray.hasOwnProperty(element)) {
            distributionWordsArray[element] = [0, 1]
        } else {
            distributionWordsArray[element][1] += 1
        }
    })
    let [sum, sumWordsA, sumWordsB] = [0, 0, 0]
    for (const element in distributionWordsArray) {
        const wordsA = distributionWordsArray[element][0]
        const wordsB = distributionWordsArray[element][1]
        sum += (wordsA * wordsB)
        sumWordsA += Math.pow(wordsA, 2)
        sumWordsB += Math.pow(wordsB, 2)
    }
    return sum / Math.sqrt(sumWordsA * sumWordsB)
}

obj.run = function () {
    $(".cursor-p.play").addClass("pause")
    GM_addStyle(GM_getResourceText("aplayerCSS"))
    obj.replaceNativePlayer()
    obj.insertPrettyPlayer()
    unsafeWindow.globalVue.$router.afterHooks.push(() => {
        setTimeout(obj.insertPrettyPlayer, 500)
    })
}()
