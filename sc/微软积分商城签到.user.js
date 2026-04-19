// ==UserScript==
// @name         微软积分商城签到
// @namespace    https://geoisam.github.io
// @version      3.6.10
// @description  每天自动完成 Microsoft Rewards 任务获取积分奖励，✅搜索、✅活动、✅阅读、✅签入
// @author       geoisam@qq.com
// @icon         data:image/png;base64,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
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @crontab      */60 * * * *
// @connect      bing.com
// @connect      login.live.com
// @connect      rewards.bing.com
// @connect      prod.rewardsplatform.microsoft.com
// @connect      hotapi.nntool.cc
// @connect      hot.baiwumm.com
// @connect      cnxiaobai.com
// @connect      disp-qryapi.3g.qq.com
// @connect      qyapi.weixin.qq.com
// @connect      oapi.dingtalk.com
// @connect      open.feishu.cn
// @connect      push.i-i.me
// @connect      api.day.app
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_cookie
// @grant        GM_info
// @grant        GM_log
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
// ==/UserScript==


/* ==UserConfig==
Config:
    keep:
        title: 持续检测（关闭则所有任务完成后不再检测）
        type: checkbox
        default: true
    lock:
        title: 锁定国区（若当前 IP 非中国大陆地区则停止）
        type: checkbox
        default: true
    span:
        title: 搜索间隔（至少 30 秒即间隔 15-45 秒）
        type: number
        default: 30
        min: 30
        unit: ±15秒
    searchLimit:
        title: 搜索上限数（0=不限制，正整数=最大搜索次数减少0-N的随机值）
        type: number
        default: 0
        min: 0
    api:
        title: 搜索词接口（单机模式为随机汉字组合）
        type: select
        default: offline
        values: [offline, hot.nntool.cc, hot.baiwumm.com, hot.cnxiaobai.com]
    code:
        title: 授权码/链接（请勿分享以免个人数据泄露）
        type: textarea
        description: https://login.live.com/oauth20_desktop.srf?code=M.C540_BAY.2.U.********-****-****-****-************&...
Tasks:
    sign:
        title: 签入（Authorization Code）
        type: checkbox
        default: true
    read:
        title: 阅读（Authorization Code）
        type: checkbox
        default: true
    promos:
        title: 活动（rewards.bing.com）
        type: checkbox
        default: true
    search:
        title: 搜索（www.bing.com）
        type: checkbox
        default: true
Notice:
    bro:
        title: 浏览器通知（当前脚本）
        type: checkbox
        default: true
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
    bark:
        title: Bark（bark.day.app）
        type: text
        password: true
        description: xxxxxxxxxxxxxxxxxxxx
==/UserConfig== */


const FuckD = {
    wh: [
        {
            name: "企业微信",
            url: "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=",
            key: GM_getValue("Notice.wework", false),
            msg: {
                "msgtype": "markdown_v2",
                "markdown_v2": {
                    get content() {
                        return `> ${FuckD.bing.datetimeLocaleStr}\n\n ## ${GM_info.script.name}\n ${FuckD.bing.sendMSG}`
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
                        return `> ${FuckD.bing.datetimeLocaleStr}\n ### ${GM_info.script.name}\n ${FuckD.bing.sendMSG}`
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
                                return `#### ${FuckD.bing.datetimeLocaleStr}\n ${FuckD.bing.sendMSG}`
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
                "title": `${GM_info.script.name}[#reawrds!https://rewards.bing.com/rewards.png]`,
                get content() {
                    return `\n ${FuckD.bing.sendMSG}`
                }
            },
            docs: "https://push.i-i.me/docs/index"
        },
        {
            name: "Bark",
            url: "https://api.day.app/",
            key: GM_getValue("Notice.bark", false),
            msg: {
                "group": "rewards",
                "icon": "https://rewards.bing.com/rewards.png",
                "title": GM_info.script.name,
                get markdown() {
                    return `\n ${FuckD.bing.sendMSG}`
                }
            },
            docs: "https://bark.day.app/#/tutorial"
        },
    ],
    chinese: ["乙", "一", "乃", "丁", "卜", "刀", "九", "了", "七", "八", "厂", "儿", "二", "几", "力", "人", "入", "十", "又", "久", "丸", "丈", "乞", "乡", "勺", "刃", "亏", "凡", "卫", "亿", "亡", "叉", "川", "寸", "弓", "巾", "女", "尸", "士", "夕", "么", "万", "三", "上", "下", "与", "习", "也", "之", "义", "于", "个", "千", "及", "大", "飞", "干", "工", "广", "己", "已", "口", "马", "门", "山", "才", "土", "小", "子", "丰", "乏", "乌", "丹", "予", "丑", "勾", "勿", "匀", "厅", "允", "互", "井", "云", "匹", "凤", "冈", "劝", "凶", "仓", "介", "仇", "仅", "仆", "仁", "仍", "升", "午", "订", "双", "友", "艺", "屯", "夫", "巨", "币", "尺", "扎", "巴", "忆", "幻", "尤", "孔", "贝", "父", "户", "斤", "木", "牛", "欠", "犬", "氏", "瓦", "牙", "止", "爪", "中", "书", "无", "不", "专", "为", "公", "六", "历", "切", "元", "五", "区", "队", "内", "办", "从", "今", "以", "化", "什", "计", "认", "反", "太", "天", "引", "开", "少", "比", "长", "车", "斗", "方", "风", "火", "见", "毛", "片", "气", "日", "手", "水", "王", "文", "心", "月", "支", "分", "卡", "册", "乎", "乐", "丘", "丙", "丛", "丝", "匆", "占", "厉", "刊", "兄", "兰", "印", "功", "击", "令", "付", "仙", "仪", "仔", "仗", "让", "讨", "讯", "训", "辽", "失", "央", "巧", "左", "归", "帅", "叨", "叼", "叮", "句", "古", "另", "叶", "司", "台", "叹", "右", "召", "闪", "宁", "奶", "奴", "犯", "尼", "饥", "扒", "扑", "扔", "汉", "汇", "汁", "纠", "圣", "幼", "冬", "孕", "轧", "灭", "斥", "末", "未", "旦", "旧", "礼", "永", "甘", "瓜", "禾", "矛", "母", "鸟", "皮", "甲", "申", "田", "穴", "甩", "玉", "业", "东", "且", "世", "主", "包", "北", "加", "务", "写", "出", "代", "们", "他", "半", "去", "记", "议", "发", "节", "边", "对", "头", "平", "布", "市", "号", "叫", "可", "史", "只", "它", "打", "四", "外", "处", "本", "术", "民", "必", "正", "白", "立", "龙", "目", "生", "石", "示", "电", "由", "用", "乓", "乒", "乔", "丢", "买", "兴", "冰", "冲", "厌", "创", "刚", "刘", "刑", "兆", "亚", "匠", "防", "邪", "阳", "阴", "阵", "网", "劣", "企", "伞", "仰", "伐", "仿", "伏", "伙", "伤", "似", "伟", "伪", "伍", "休", "优", "协", "充", "亦", "访", "讽", "讲", "延", "芒", "芝", "巡", "州", "迈", "迁", "迅", "寺", "寻", "夺", "夹", "夸", "巩", "异", "庆", "庄", "帆", "师", "吃", "吊", "吓", "吉", "吗", "吐", "吸", "驰", "闭", "闯", "守", "宇", "宅", "妇", "奸", "妈", "妄", "岂", "岁", "屿", "尽", "壮", "扛", "扣", "扩", "扫", "托", "扬", "执", "池", "汗", "汤", "污", "纪", "纤", "圾", "尘", "尖", "忙", "孙", "字", "负", "贞", "毕", "轨", "死", "危", "爷", "戏", "灯", "灰", "考", "朵", "朴", "杀", "朽", "杂", "朱", "欢", "旬", "早", "旨", "曲", "肌", "臣", "虫", "耳", "齐", "肉", "舌", "羽", "舟", "竹", "页", "衣", "血", "羊", "份", "共", "决", "压", "争", "划", "列", "则", "光", "先", "阶", "那", "关", "再", "动", "军", "农", "会", "众", "传", "价", "件", "任", "全", "华", "产", "交", "论", "设", "许", "达", "过", "导", "并", "年", "当", "合", "各", "后", "名", "同", "向", "问", "安", "好", "如", "她", "江", "红", "级", "约", "场", "地", "在", "回", "团", "因", "多", "式", "存", "成", "观", "老", "机", "权", "收", "次", "有", "此", "百", "而", "米", "色", "西", "行", "至", "自", "串", "丽", "乱", "兵", "冻", "冷", "冶", "初", "免", "龟", "判", "删", "医", "阿", "陈", "附", "邻", "陆", "邮", "阻", "卵", "助", "劫", "劲", "励", "努", "余", "伯", "伴", "佛", "估", "伶", "伸", "佣", "亩", "词", "评", "诉", "译", "诊", "苍", "芳", "芦", "芹", "苏", "芽", "彻", "役", "迟", "返", "违", "迎", "远", "寿", "弟", "弄", "弃", "床", "库", "序", "希", "帐", "吧", "吵", "呈", "吹", "呆", "吨", "否", "告", "含", "吼", "君", "启", "吞", "呜", "吴", "呀", "驳", "驴", "驱", "闷", "闲", "宏", "宋", "妨", "妙", "妥", "妖", "狂", "犹", "岔", "岛", "岗", "尿", "尾", "饭", "饮", "壳", "扮", "抄", "扯", "抖", "扶", "抚", "护", "拒", "抗", "扭", "抛", "批", "抢", "扰", "折", "投", "找", "抓", "沉", "泛", "沟", "汽", "沙", "沈", "汪", "沃", "纯", "纺", "纲", "纳", "纽", "纱", "纹", "纸", "纵", "坝", "坊", "坏", "坚", "均", "坑", "块", "坛", "址", "坐", "困", "围", "园", "怀", "忧", "孝", "财", "贡", "歼", "戒", "灿", "灵", "灾", "灶", "材", "村", "杜", "杆", "杠", "李", "束", "杏", "杨", "牢", "攻", "旱", "旷", "忌", "忍", "忘", "肠", "肚", "肝", "皂", "私", "秃", "秀", "钉", "针", "盯", "疗", "鸡", "男", "穷", "补", "良", "辰", "赤", "豆", "谷", "麦", "辛", "言", "足", "吩", "坟", "纷", "芬", "两", "严", "况", "别", "利", "际", "即", "却", "劳", "但", "低", "何", "你", "体", "位", "住", "作", "克", "县", "识", "证", "花", "还", "进", "近", "连", "运", "这", "张", "应", "听", "员", "间", "完", "形", "层", "局", "声", "把", "报", "技", "没", "快", "我", "极", "来", "条", "改", "状", "时", "社", "求", "志", "更", "步", "每", "究", "系", "角", "里", "身", "走", "乖", "丧", "乳", "典", "净", "卧", "厕", "券", "兔", "刺", "刮", "剂", "刻", "刷", "降", "郊", "郎", "陕", "限", "郑", "凯", "凭", "势", "侧", "供", "佳", "佩", "侨", "侍", "依", "侦", "侄", "卖", "享", "诚", "诞", "诗", "试", "详", "询", "叔", "范", "苦", "茄", "茎", "茅", "茂", "苗", "苹", "若", "英", "彼", "径", "征", "迫", "述", "奔", "奉", "奇", "幸", "弦", "底", "店", "废", "庙", "录", "帘", "帖", "帜", "咐", "呼", "呢", "味", "咏", "驾", "驶", "驼", "驻", "闹", "闸", "宝", "官", "审", "宜", "宙", "宗", "姑", "姐", "妹", "妻", "姓", "狗", "狐", "岸", "岭", "岩", "届", "居", "屈", "饱", "饰", "饲", "拔", "拌", "抱", "拨", "拆", "抽", "担", "抵", "拐", "拣", "拘", "拦", "拢", "抹", "拍", "披", "抬", "拖", "押", "拥", "择", "招", "波", "泊", "沸", "河", "浅", "泪", "沫", "泥", "泡", "泼", "泄", "泻", "沿", "泳", "泽", "沾", "注", "练", "绍", "终", "垂", "垃", "垄", "坡", "坦", "固", "夜", "尚", "怖", "怪", "怜", "怕", "孤", "季", "孟", "败", "贩", "贯", "货", "贫", "贪", "贤", "责", "购", "轰", "轮", "软", "卷", "爸", "房", "炒", "炊", "炕", "炉", "炎", "视", "斧", "斩", "板", "杯", "柜", "杰", "枪", "松", "析", "枣", "枕", "枝", "牧", "版", "欧", "欣", "昂", "昌", "昏", "昆", "旺", "承", "环", "玩", "忽", "念", "态", "忠", "肥", "肺", "肤", "服", "股", "肩", "肯", "朋", "肾", "胁", "胀", "肢", "肿", "武", "爬", "秆", "钓", "盲", "鸣", "码", "罗", "畅", "画", "衬", "衫", "艰", "虎", "虏", "舍", "肃", "齿", "隶", "鱼", "雨", "顶", "顷", "奋", "事", "其", "具", "到", "制", "些", "例", "使", "单", "参", "京", "该", "话", "建", "变", "取", "受", "往", "府", "和", "命", "周", "定", "实", "始", "委", "拉", "法", "油", "治", "经", "细", "线", "织", "组", "国", "图", "性", "备", "学", "质", "转", "或", "所", "规", "现", "者", "构", "果", "林", "物", "放", "明", "易", "育", "的", "直", "矿", "知", "空", "采", "非", "金", "青", "表", "临", "举", "厚", "厘", "剑", "剃", "削", "陡", "险", "卸", "冒", "勉", "勇", "冠", "促", "俘", "俭", "俊", "俩", "侵", "俗", "侮", "修", "亮", "亭", "诵", "误", "诱", "语", "叛", "叙", "草", "茶", "荡", "荒", "茧", "荐", "茫", "荣", "药", "待", "迹", "迷", "逆", "送", "逃", "退", "追", "封", "奖", "奏", "差", "弯", "庭", "帮", "帝", "哀", "哈", "咳", "哄", "哗", "哪", "咸", "哑", "咽", "咬", "咱", "骄", "骆", "骂", "阀", "阁", "闻", "宫", "客", "室", "宪", "宣", "姜", "娇", "姥", "娃", "威", "姨", "姻", "姿", "独", "狠", "狡", "狮", "狭", "狱", "峡", "屋", "饼", "饺", "饶", "挡", "挂", "挥", "挤", "挎", "括", "挠", "挪", "拼", "拾", "拴", "挑", "挺", "挖", "挣", "测", "洞", "洪", "浑", "浇", "洁", "津", "浓", "洽", "洒", "洗", "洋", "洲", "浊", "绑", "绘", "绞", "绝", "络", "绕", "绒", "巷", "城", "垫", "垦", "垮", "垒", "尝", "恨", "恒", "恢", "恼", "恰", "孩", "贷", "费", "贵", "贺", "贱", "贸", "贴", "轻", "残", "殃", "施", "扁", "炮", "烂", "炼", "炭", "炸", "既", "觉", "览", "柏", "柄", "栋", "架", "枯", "栏", "柳", "某", "染", "柔", "柿", "树", "柱", "牵", "牲", "故", "春", "显", "星", "映", "昼", "昨", "神", "祝", "祖", "拜", "泉", "玻", "珍", "怠", "急", "怒", "怨", "怎", "胞", "背", "胆", "胡", "脉", "胖", "胜", "胃", "歪", "皇", "皆", "甚", "秒", "秋", "钞", "钢", "钩", "钥", "钟", "竖", "盆", "盈", "毒", "盾", "眉", "盼", "眨", "疤", "疮", "疯", "疫", "鸦", "砍", "砌", "砖", "矩", "罚", "畏", "穿", "窃", "突", "袄", "虾", "虹", "蚂", "蚀", "虽", "蚁", "耐", "耍", "缸", "竿", "赴", "赵", "趴", "食", "骨", "鬼", "首", "香", "项", "顺", "美", "前", "除", "院", "养", "保", "便", "信", "南", "亲", "说", "很", "律", "适", "选", "将", "度", "带", "品", "响", "按", "持", "指", "活", "济", "派", "给", "结", "统", "型", "复", "点", "战", "标", "查", "政", "是", "段", "思", "总", "种", "科", "看", "省", "相", "研", "界", "类", "要", "重", "革", "面", "音", "须", "乘", "羞", "凉", "剥", "剧", "剖", "匪", "陵", "陪", "陶", "陷", "兼", "冤", "倍", "倡", "倘", "倒", "俯", "健", "借", "俱", "倦", "倾", "倚", "债", "读", "课", "谅", "请", "谁", "谊", "诸", "谈", "荷", "获", "莲", "莫", "徒", "徐", "递", "逗", "逢", "逝", "透", "途", "逐", "射", "套", "弱", "座", "席", "啊", "唉", "唇", "哥", "唤", "哭", "哨", "唐", "哲", "阅", "宾", "害", "宽", "宵", "宴", "宰", "娘", "娱", "狼", "狸", "峰", "屑", "饿", "壶", "挨", "捕", "换", "捡", "捐", "捆", "捞", "捏", "捎", "损", "挽", "振", "捉", "涌", "浮", "浩", "浸", "浪", "涝", "润", "涉", "涛", "涂", "浴", "涨", "浙", "继", "绢", "绣", "埋", "恭", "悔", "悄", "悟", "悦", "夏", "贿", "贼", "毙", "烈", "轿", "载", "殊", "旁", "旅", "爹", "扇", "烦", "烘", "烤", "烧", "烫", "烟", "烛", "笔", "案", "柴", "档", "桂", "核", "桨", "校", "框", "栗", "桥", "桑", "桃", "桐", "栽", "株", "桌", "牺", "敌", "氧", "晃", "晋", "晒", "晌", "晓", "晕", "祥", "拿", "拳", "浆", "泰", "瓶", "班", "珠", "恶", "恩", "恳", "恐", "恋", "息", "脆", "胳", "脊", "胶", "朗", "脑", "胸", "脏", "脂", "爱", "秘", "秤", "秧", "秩", "租", "铃", "铅", "钱", "钳", "钻", "竞", "站", "监", "盐", "益", "盏", "眠", "病", "疾", "疲", "疼", "症", "鸭", "皱", "础", "破", "罢", "畜", "留", "窄", "袜", "袍", "袖", "蚕", "蚊", "耻", "耽", "缺", "虑", "耕", "耗", "紧", "索", "艳", "翅", "翁", "致", "舱", "航", "舰", "笋", "笑", "臭", "辱", "躬", "酒", "配", "赶", "顾", "顽", "顿", "预", "衰", "粉", "准", "原", "党", "部", "都", "候", "值", "调", "速", "通", "造", "验", "家", "容", "展", "海", "流", "消", "圆", "离", "资", "热", "较", "料", "格", "根", "样", "特", "效", "能", "称", "积", "铁", "真", "被", "素", "般", "起", "难", "高", "匙", "凑", "减", "剪", "副", "隆", "随", "隐", "兽", "勒", "偿", "假", "偶", "偏", "停", "偷", "谎", "谜", "谋", "菠", "菜", "菊", "菌", "萝", "萌", "萍", "萄", "营", "著", "逮", "弹", "康", "廊", "庸", "唱", "啦", "售", "唯", "啄", "骑", "寄", "寇", "密", "宿", "婚", "婆", "婶", "猜", "猎", "猫", "猛", "猪", "崇", "崖", "崭", "彩", "屠", "馆", "馅", "掉", "捷", "掘", "控", "掠", "描", "排", "捧", "授", "探", "掏", "推", "掀", "掩", "淡", "混", "渐", "淋", "渠", "渗", "淘", "添", "淹", "液", "渔", "绸", "绩", "绿", "绵", "绳", "绪", "续", "堵", "堆", "培", "堂", "域", "圈", "够", "惭", "惨", "悼", "惯", "惊", "惧", "惕", "惜", "辅", "辆", "斜", "旋", "戚", "毫", "检", "梨", "梁", "梅", "梦", "梢", "梳", "梯", "桶", "械", "犁", "敢", "救", "敏", "欲", "晨", "晚", "祸", "球", "患", "您", "悉", "悬", "悠", "爽", "脖", "脚", "脸", "脱", "望", "甜", "移", "铲", "铜", "银", "竟", "章", "笼", "盛", "盗", "盖", "盒", "盘", "眯", "睁", "痕", "痒", "鸽", "票", "略", "窑", "蛋", "蛇", "聋", "职", "虚", "粗", "粒", "粘", "累", "衔", "船", "笨", "笛", "符", "野", "距", "跃", "雪", "雀", "黄", "鹿", "麻", "颈", "袭", "袋", "做", "得", "常", "商", "接", "据", "清", "深", "维", "基", "情", "族", "断", "教", "理", "眼", "着", "率", "第", "象", "领", "羡", "厨", "厦", "割", "剩", "隔", "隙", "傲", "傍", "储", "傅", "博", "谦", "谢", "谣", "葱", "董", "葛", "葵", "落", "葡", "葬", "循", "御", "逼", "遍", "遗", "遇", "尊", "奥", "幅", "帽", "喘", "喊", "喝", "喉", "喇", "喷", "善", "喂", "喜", "骗", "阔", "富", "寒", "嫂", "猴", "猾", "屡", "馋", "插", "搭", "搁", "搅", "揭", "揪", "搂", "揉", "搜", "握", "援", "渡", "溉", "港", "湖", "滑", "渴", "湿", "湾", "游", "渣", "滋", "编", "缎", "缓", "缘", "堡", "塔", "堤", "堪", "悲", "惰", "慌", "慨", "愧", "禽", "愉", "赌", "赔", "赏", "焦", "煮", "辈", "辉", "殖", "焰", "毯", "棒", "棍", "椒", "棵", "棉", "棚", "棋", "森", "椅", "植", "棕", "牌", "敞", "敬", "散", "款", "欺", "晶", "景", "普", "晴", "暑", "暂", "智", "掌", "琴", "斑", "惩", "惠", "惑", "惹", "曾", "替", "朝", "腊", "脾", "腔", "登", "稍", "税", "稀", "锄", "锋", "锅", "链", "铺", "锐", "锁", "销", "锈", "铸", "童", "痛", "鹅", "硬", "短", "番", "窗", "窜", "窝", "疏", "裤", "裙", "裕", "蛮", "蜓", "蛙", "蛛", "粥", "絮", "紫", "舒", "艇", "策", "答", "筋", "筐", "筛", "筒", "筝", "筑", "释", "辜", "超", "趁", "趋", "跌", "践", "跑", "鲁", "雄", "雅", "雁", "黑", "颂", "街", "裁", "裂", "愤", "粪", "道", "强", "属", "提", "温", "就", "然", "斯", "最", "期", "程", "确", "联", "等", "量", "越", "集", "题", "装", "鄙", "障", "勤", "催", "傻", "像", "谨", "叠", "蓝", "蒙", "蓬", "蒜", "蓄", "蒸", "微", "遣", "遥", "廉", "幕", "嗓", "嫁", "嫌", "摆", "搬", "搏", "搞", "摸", "摄", "摊", "携", "摇", "滨", "滚", "滥", "溜", "滤", "漠", "滩", "滔", "溪", "源", "缠", "缝", "墓", "塞", "塑", "塌", "塘", "填", "慎", "赖", "煎", "输", "煌", "煤", "楚", "概", "槐", "楼", "榆", "歇", "献", "暗", "暖", "福", "殿", "毁", "瑞", "愁", "慈", "愚", "愈", "腹", "腾", "腿", "腥", "腰", "稠", "锤", "错", "键", "锦", "锯", "锣", "锡", "盟", "睬", "督", "睛", "睡", "痰", "鹊", "碍", "碑", "碌", "碰", "碎", "碗", "矮", "禁", "罩", "罪", "蛾", "蜂", "舅", "粮", "粱", "肆", "筹", "简", "签", "触", "躲", "辟", "辞", "誉", "酬", "酱", "跟", "跪", "跨", "跳", "龄", "鉴", "雹", "雷", "零", "雾", "魂", "韵", "鼓", "鼠", "满", "照", "新", "数", "感", "想", "意", "置", "解", "路", "群", "凳", "僚", "谱", "蔽", "蔑", "遭", "遮", "弊", "嘉", "嗽", "骡", "察", "寨", "嫩", "馒", "摧", "撇", "摔", "摘", "滴", "漏", "漫", "漂", "漆", "演", "缩", "境", "墙", "舞", "慕", "慢", "赛", "赚", "熊", "旗", "截", "熔", "熄", "榜", "榴", "模", "榨", "敲", "歌", "歉", "暮", "璃", "愿", "膀", "膊", "膏", "膜", "稳", "锻", "锹", "端", "竭", "瘦", "碧", "磁", "疑", "蜡", "蜜", "蜻", "蝇", "蜘", "聚", "腐", "裳", "裹", "翠", "箩", "豪", "辣", "誓", "酷", "酿", "貌", "静", "鲜", "魄", "鼻", "颗", "精", "管", "算", "酸", "需", "劈", "僵", "僻", "蕉", "蔬", "德", "遵", "嘱", "播", "撤", "撑", "撒", "撕", "撞", "潮", "潜", "墨", "懂", "熟", "飘", "槽", "横", "橡", "樱", "暴", "摩", "毅", "慧", "慰", "膛", "膝", "稻", "稿", "镇", "瞒", "瞎", "蝶", "蝴", "聪", "糊", "艘", "箭", "篇", "箱", "躺", "醋", "醉", "趣", "趟", "踩", "踏", "踢", "踪", "靠", "霉", "震", "鞋", "黎", "额", "颜", "影", "增", "凝", "薄", "薯", "薪", "避", "邀", "嘴", "操", "激", "澡", "缴", "壁", "懒", "赞", "赠", "燕", "燃", "橘", "膨", "稼", "镜", "磨", "融", "糕", "糖", "篮", "辨", "辩", "醒", "蹄", "餐", "雕", "默", "衡", "颠", "器", "整", "藏", "骤", "擦", "赢", "戴", "燥", "臂", "穗", "瞧", "螺", "糠", "糟", "繁", "翼", "辫", "蹈", "霜", "霞", "鞠", "镰", "鹰", "覆", "翻", "蹦", "鞭", "爆", "攀", "瓣", "疆", "警", "蹲", "颤", "嚼", "嚷", "灌", "壤", "耀", "籍", "躁", "魔", "蠢", "霸", "露", "囊", "罐", "匕", "刁", "丐", "邓", "冗", "仑", "讥", "夭", "歹", "戈", "乍", "冯", "卢", "凹", "凸", "艾", "夯", "叭", "叽", "囚", "尔", "皿", "矢", "玄", "匈", "邦", "阱", "邢", "凫", "伦", "伊", "仲", "亥", "讹", "讳", "诀", "讼", "讶", "廷", "芍", "芋", "迄", "迂", "夷", "弛", "吏", "吕", "吁", "吆", "驮", "驯", "妆", "屹", "汛", "纫", "旭", "肋", "臼", "卤", "刨", "匣", "兑", "罕", "伺", "佃", "佑", "诈", "诅", "芭", "芙", "芥", "苇", "芜", "芯", "巫", "庇", "庐", "吠", "吭", "吝", "呐", "呕", "呛", "吮", "吻", "吟", "吱", "闰", "妒", "妓", "姊", "狈", "岖", "彤", "屁", "扳", "扼", "抠", "抡", "拟", "抒", "抑", "沧", "沪", "沥", "沦", "沐", "沛", "汰", "汹", "纬", "坎", "坞", "坠", "囱", "囤", "忱", "轩", "灸", "灼", "杈", "杉", "杖", "牡", "汞", "玖", "玛", "韧", "肛", "肖", "肘", "鸠", "甸", "甫", "邑", "卦", "刹", "刽", "陌", "陋", "郁", "函", "侈", "侥", "侣", "侠", "卑", "卒", "卓", "叁", "诡", "苞", "苟", "苛", "茉", "苫", "苔", "茁", "奈", "奄", "弧", "弥", "庞", "帕", "帚", "呵", "哎", "咖", "咕", "咙", "咆", "呻", "咒", "驹", "宠", "宛", "姆", "狞", "岳", "屉", "拗", "拂", "拇", "拧", "拓", "拄", "拙", "泌", "沽", "沮", "泞", "泣", "沼", "绊", "绅", "绎", "坷", "坤", "坯", "坪", "怯", "怔", "贬", "账", "贮", "炬", "觅", "枫", "杭", "枚", "枢", "枉", "玫", "昙", "昔", "氓", "祈", "殴", "瓮", "肮", "肪", "肴", "歧", "秉", "疙", "疚", "矾", "衩", "虱", "疟", "忿", "氛", "陨", "勃", "勋", "俄", "侯", "俐", "俏", "诲", "诫", "诬", "茬", "茴", "荤", "荠", "荚", "荆", "荔", "荞", "茸", "茵", "荧", "徊", "逊", "契", "奕", "哆", "咧", "咪", "哟", "咨", "骇", "闺", "闽", "宦", "娄", "娜", "姚", "狰", "峦", "屏", "屎", "饵", "拱", "拷", "拭", "挟", "拯", "洛", "洼", "涎", "垛", "垢", "恍", "恃", "恬", "恤", "幽", "贰", "轴", "飒", "烁", "炫", "毡", "柑", "枷", "柬", "柠", "柒", "栅", "栈", "氢", "昧", "昵", "昭", "祠", "泵", "玷", "玲", "珊", "胧", "胚", "胎", "秕", "钝", "钙", "钧", "钠", "钮", "钦", "盅", "盹", "鸥", "砂", "砚", "蚤", "虐", "籽", "衍", "韭", "凌", "凄", "剔", "匿", "郭", "卿", "俺", "倔", "诽", "诺", "谆", "荸", "莱", "莉", "莽", "莺", "莹", "逞", "逛", "哺", "哼", "唧", "唠", "哩", "唆", "哮", "唁", "骏", "娩", "峻", "峭", "馁", "捌", "挫", "捣", "捍", "捅", "捂", "涤", "涡", "涣", "涧", "浦", "涩", "涕", "埃", "埂", "圃", "悍", "悯", "贾", "赁", "赂", "赃", "羔", "殉", "烙", "梆", "桦", "栖", "栓", "桅", "桩", "氨", "挚", "殷", "瓷", "斋", "恕", "胯", "脓", "脐", "胰", "秦", "秫", "钾", "铆", "疹", "鸵", "鸯", "鸳", "砾", "砰", "砸", "祟", "畔", "窍", "袒", "蚌", "蚪", "蚣", "蚜", "蚓", "耿", "聂", "耸", "舀", "耙", "耘", "紊", "笆", "酌", "豹", "豺", "颁", "袁", "衷", "乾", "厢", "兜", "匾", "隅", "凰", "冕", "勘", "傀", "偎", "谍", "谓", "谐", "谚", "谒", "菲", "菇", "菱", "菩", "萨", "萎", "萧", "萤", "徘", "徙", "巢", "逻", "逸", "尉", "奢", "庵", "庶", "啡", "唬", "啃", "啰", "啤", "啥", "唾", "啸", "阐", "阎", "寂", "娶", "婉", "婴", "猖", "崩", "崔", "崎", "彪", "彬", "掺", "捶", "措", "掸", "掂", "捺", "捻", "掐", "掖", "掷", "淳", "淀", "涵", "淮", "淑", "涮", "淌", "淆", "涯", "淫", "淤", "渊", "绷", "绰", "综", "绽", "缀", "埠", "堕", "悴", "惦", "惋", "赊", "烹", "焊", "焕", "梗", "梭", "梧", "敛", "晦", "晤", "祷", "琅", "琉", "琐", "曹", "曼", "脯", "秽", "秸", "铛", "铐", "铝", "铭", "铣", "铡", "盔", "眷", "眶", "痊", "鸿", "硅", "硕", "矫", "祭", "畦", "窒", "裆", "袱", "蛆", "蛉", "蚯", "蛀", "聊", "翎", "舶", "舵", "舷", "笙", "笤", "赦", "麸", "躯", "酗", "酝", "趾", "颅", "颇", "衅", "隘", "募", "凿", "谤", "蒂", "葫", "蒋", "遏", "遂", "逾", "奠", "喳", "啼", "喧", "喻", "骚", "寓", "媒", "媚", "婿", "猬", "猩", "嵌", "彭", "壹", "搀", "揣", "搓", "揩", "揽", "搔", "揖", "揍", "渤", "溅", "溃", "渺", "湃", "湘", "滞", "缔", "缆", "缕", "缅", "堰", "愕", "惶", "赐", "赋", "赎", "焙", "椎", "棺", "棘", "榔", "棱", "棠", "椭", "椰", "犀", "牍", "敦", "氮", "氯", "晾", "晰", "掰", "琳", "琼", "琢", "韩", "惫", "腌", "腕", "腋", "锉", "锌", "竣", "痘", "痪", "痢", "鹃", "甥", "硫", "硝", "畴", "窖", "窘", "蛤", "蛔", "蜒", "粟", "粤", "翘", "翔", "筏", "酣", "酥", "跋", "跛", "雳", "雇", "鼎", "黍", "颊", "焚", "剿", "谬", "蓖", "蒿", "蒲", "蓉", "廓", "幌", "嗤", "嗜", "嗦", "嗡", "嗅", "寞", "寝", "嫉", "媳", "猿", "馏", "馍", "搪", "漓", "溺", "溶", "溯", "溢", "滓", "缤", "缚", "煞", "辐", "辑", "斟", "椿", "楷", "榄", "楞", "楣", "楔", "暇", "瑰", "瑟", "腻", "腮", "腺", "稚", "锭", "锚", "锰", "锨", "锥", "睹", "瞄", "睦", "痹", "痴", "鹏", "鹉", "碘", "碉", "硼", "禀", "署", "畸", "窟", "窥", "褂", "裸", "蜀", "蜕", "蜗", "蜈", "蛹", "聘", "肄", "筷", "誊", "酪", "跺", "跷", "靖", "雏", "靶", "靴", "魁", "颓", "颖", "频", "衙", "兢", "隧", "僧", "谭", "蔼", "蔓", "蔫", "蔚", "箫", "蔗", "幔", "嘀", "嘁", "寡", "寥", "嫡", "彰", "漱", "漩", "漾", "缨", "墅", "慷", "孵", "赘", "熬", "熙", "熏", "辖", "辕", "榕", "榛", "摹", "镀", "瘩", "瘟", "碴", "碟", "碱", "碳", "褐", "褪", "蝉", "舆", "粹", "舔", "箍", "箕", "赫", "酵", "踊", "雌", "凛", "谴", "蕊", "蕴", "幢", "嘲", "嘿", "嘹", "嘶", "嬉", "履", "撮", "撩", "撵", "撬", "擒", "撰", "澳", "澈", "澄", "澜", "潦", "潘", "澎", "潭", "缭", "墩", "懊", "憔", "憎", "樊", "橄", "樟", "敷", "憋", "憨", "膘", "稽", "镐", "镊", "瘪", "瘤", "瘫", "鹤", "磅", "磕", "碾", "褥", "蝙", "蝠", "蝗", "蝌", "蝎", "褒", "翩", "篓", "豌", "豫", "醇", "鲫", "鲤", "鞍", "冀", "儒", "蕾", "薇", "薛", "噩", "噪", "撼", "擂", "擅", "濒", "缰", "憾", "懈", "辙", "燎", "橙", "橱", "擎", "膳", "瓢", "穆", "瘸", "瘾", "鹦", "窿", "蟆", "螟", "螃", "糙", "翰", "篡", "篙", "篱", "篷", "踱", "蹂", "鲸", "霍", "霎", "黔", "儡", "藐", "徽", "嚎", "壕", "懦", "赡", "檩", "檬", "檀", "檐", "曙", "朦", "臊", "臀", "爵", "镣", "瞪", "瞭", "瞬", "瞳", "癌", "礁", "磷", "蟥", "蟀", "蟋", "糜", "簇", "豁", "蹋", "鳄", "魏", "藕", "藤", "嚣", "瀑", "戳", "瞻", "癞", "襟", "璧", "鳍", "蘑", "藻", "攒", "孽", "癣", "蟹", "簸", "簿", "蹭", "蹬", "靡", "鳖", "羹", "巍", "攘", "蠕", "糯", "譬", "鳞", "鬓", "躏", "霹", "髓", "蘸", "瓤", "镶", "矗",],
    ua: {
        pc: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81",
        m: "Mozilla/5.0 (Linux; Android 16; MCE16 Build/BP3A.250905.014; ) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.0.0 Mobile Safari/537.36 EdgA/123.0.2420.102",
    },
    cookie: {
        bing: "",
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
    tasks: {
        sign: GM_getValue("Tasks.sign", true),
        read: GM_getValue("Tasks.read", true),
        promos: GM_getValue("Tasks.promos", true),
        search: GM_getValue("Tasks.search", true),
    },
    bing: {
        region: "CN",
        status: GM_getValue("Config.lock", true),
        repo: "https://github.com/geoisam/FuckScripts/",
        time: 3210,
        span: GM_getValue("Config.span", 20),
        searchLimit: GM_getValue("Config.searchLimit", 0),
        code: 0,
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
        },
        mainland: 1,
        end: 1,
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
        device: "",
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

    getTimestamp(start = 0, end = 13) {
        const timestamp = Date.now()
        const num = timestamp.toString().substring(start, end)
        return Number(num)
    },

    getDatetime(num = false, slash = true) {
        const today = new Date()
        const year = today.getFullYear()
        let month = today.getMonth() + 1
        let day = today.getDate()
        month = month < 10 ? "0" + month : month
        day = day < 10 ? "0" + day : day
        const dateNow = num ? Number(`${year}${month}${day}`) : slash ? `${month}/${day}/${year}` : `${year}-${month}-${day}`
        return dateNow
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

    isEdge() {
        return /(Edge\/|Edg\/|EdgA\/|EdgiOS\/)/i.test(navigator.userAgent);
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
            const seconds = this.getTimestamp()
            GM_xmlhttpRequest({
                ...options,
                timeout: 15000,
                ontimeout() {
                    reject(new Error(`请求超时！用时 ${(this.getTimestamp() - seconds) / 1000} 秒`))
                },
                onload(xhr) {
                    if (xhr.status == 200) {
                        if (only) {
                            resolve(xhr.finalUrl)
                        } else {
                            resolve(xhr.responseText)
                        }
                    } else {
                        const redirectStatuses = [301, 302, 307, 308]
                        if (redirectStatuses.includes(xhr.status)) {
                            const result = xhr.responseHeaders
                            const res = result.match(/Location:\s*(.*?)\s*\r?\n/i)
                            resolve(res ? res[1] : false)
                        } else {
                            reject(new Error(`请求失败，用时 ${(this.getTimestamp() - seconds) / 1000} 秒，状态码：${xhr.status}`))
                        }
                    }
                },
                onerror(err) {
                    reject(new Error(`请求发生异常！用时 ${(this.getTimestamp() - seconds) / 1000} 秒 🔛${err}`))
                },
            })
        })
    },
}

FuckF.getRandomSubstring = (str, min = 20, max = 32) => {
    const length = str.length
    if (length <= min) {
        return str
    }
    const randomLength = FuckF.getScopeRandomNum(min, max)
    return str.substring(0, randomLength)
}

FuckF.getRandomChinese = (min = 1, max = 10) => {
    const c = FuckD.chinese
    const l = FuckF.getScopeRandomNum(min, max)
    return Array.from(
        { length: l },
        () => c[FuckF.getRandomNum(c.length)],
    ).join("")
}

FuckF.getRandomApiHot = () => {
    const lastIndex = parseInt(GM_getValue("Config.index", -1))
    const filteredArr = FuckD.api.hot.filter((name, index) => index != lastIndex)
    const randomIndex = FuckF.getRandomNum(filteredArr.length)
    GM_setValue("Config.index", randomIndex)
    return filteredArr[randomIndex]
}

FuckF.getCode = async (url) => {
    const message = "Authorize Code 获取"
    try {
        const result = await FuckF.xhr({
            url: url,
            redirect: "manual",
            headers: {
                cookie: FuckD.cookie.bing,
            },
        })
        if (result) {
            const code = result.match(/M\.[\w+.]+(-\w+){4}/)
            if (code) return code[0]
        }
        FuckF.log("🟡", `${message}失败！🔛${result}`)
    } catch (e) {
        FuckF.log("🔴", `${message}出错！🔛${e.message}`)
    }
    return false
}

FuckF.getToken = async (url) => {
    const message = "Refresh Token 获取"
    try {
        const result = await FuckF.xhr({ url: url })
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result)
            const refresh = res.refresh_token
            const access = res.access_token
            if (refresh && access) {
                GM_setValue("Config.token", refresh)
                FuckD.bing.token = access
                return true
            }
        }
        FuckF.log("🟡", `${message}失败！🔛${result}`)
    } catch (e) {
        FuckF.log("🔴", `${message}出错！🔛${e.message}`)
    }
    return false
}

FuckF.renewToken = async () => {
    if (FuckD.bing.error > 2) return false
    let url, authcode, token, refreshToken = GM_getValue("Config.token", false)
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
        let message = "Authorize Code 获取成功！🔛请勿分享此授权码/链接以免个人数据泄露"
        url = "https://login.live.com/oauth20_authorize.srf?client_id=0000000040170455&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&response_type=code&redirect_uri=https://login.live.com/oauth20_desktop.srf"
        authcode = await FuckF.getCode(url)
        if (!authcode) {
            let code = GM_getValue("Config.code", "geoisam")
            code = code.match(/M\.[\w+.]+(-\w+){4}/)
            if (!code) {
                FuckF.okCallback()
            } else {
                authcode = code[0]
                FuckF.log("🟢", message)
            }
        }
        if (authcode) {
            FuckF.log("🟢", message)
            url = `https://login.live.com/oauth20_token.srf?client_id=0000000040170455&code=${authcode}&redirect_uri=https://login.live.com/oauth20_desktop.srf&grant_type=authorization_code`
            token = await FuckF.getToken(url)
        }
    } else {
        url = `https://login.live.com/oauth20_token.srf?client_id=0000000040170455&refresh_token=${refreshToken}&scope=service::prod.rewardsplatform.microsoft.com::MBI_SSL&grant_type=REFRESH_TOKEN`
        token = await FuckF.getToken(url)
    }
    if (!token) {
        FuckF.okCallback(true)
    } else {
        return true
    }
}

FuckF.getRewardsInfo = async () => {
    const message = "Rewards Dashboard 获取"
    try {
        const result = await FuckF.xhr({
            url: `https://rewards.bing.com/api/getuserinfo?type=1&X-Requested-With=XMLHttpRequest&_=${FuckF.getTimestamp()}`,
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "referer": "https://rewards.bing.com/",
            },
        })
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result)
            const data = res.dashboard
            if (data) return data
        }
        FuckF.log("🟡", `${message}失败！🔛${result}`)
    } catch (e) {
        FuckF.log("🔴", `${message}出错！🔛${e.message}`)
    }
    return false
}

FuckF.taskSign = async () => {
    if (!FuckD.tasks.sign || FuckD.sign.date == FuckD.bing.dateNowNum || FuckD.sign.times > 2 || FuckD.sign.end > 0) {
        FuckD.sign.end++
        return true
    }
    if (FuckD.sign.point >= 0) {
        FuckD.sign.end++
        if (FuckD.sign.date != FuckD.bing.dateNowNum) {
            FuckD.sign.date = FuckD.bing.dateNowNum
            FuckD.bing.sendMSG = `哇！哥哥好棒！签入任务完成了！\n${FuckD.sign.point > 0 ? `✨今日签入奖励：${FuckD.sign.point}` : "🚨今日已签入，无法二次签入"}`
            FuckF.log("🟣", FuckD.bing.sendMSG, true)
            FuckF.send(FuckD.wh)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    }
    try {
        const fucker = await FuckF.mainlandCheck()
        if (FuckD.bing.status && fucker) {
            FuckD.bing.code = -1
            return true
        }
        const region = FuckD.bing.status ? "cn" : FuckD.bing.region.toLowerCase()
        const result = await FuckF.xhr({
            method: "POST",
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
                "x-rewards-country": region,
                "x-rewards-partnerid": "startapp",
                "x-rewards-flights": "rwgobig",
            },
            data: JSON.stringify({
                "amount": 1,
                "attributes": {},
                "id": FuckF.getRandomUUID(),
                "type": 103,
                "country": region,
                "risk_context": {},
                "channel": "SAAndroid",
            }),
        })
        if (result && FuckF.isJSON(result)) {
            FuckD.sign.times = 0
            const res = JSON.parse(result)
            const point = res.response.activity.p
            FuckD.sign.point = point ? point : 0
        } else {
            FuckD.sign.times++
        }
    } catch (e) {
        FuckF.log("🔴", `签入任务出错！🔛${e.message}`)
    }
    return false
}

FuckF.getReadPro = async () => {
    let readArr = { "max": 1, "progress": 0 }
    try {
        const result = await FuckF.xhr({
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me?channel=SAAndroid&options=613",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
            },
        })
        if (result && FuckF.isJSON(result)) {
            const res = JSON.parse(result)
            const pro = res.response.promotions
            if (pro) {
                for (const o of pro) {
                    if (o.attributes.offerid == "ENUS_readarticle3_30points") {
                        readArr = { "max": Number(o.attributes.max), "progress": Number(o.attributes.progress) }
                    }
                }
            }
        }
    } catch (e) {
        FuckF.log("🔴", `阅读详情信息获取出错！🔛${e.message}`)
    }
    return readArr
}

FuckF.taskRead = async () => {
    if (!FuckD.tasks.read || FuckD.read.times > 2 || FuckD.read.end > 0 || (!GM_getValue("Config.keep", true) && FuckD.read.date == FuckD.bing.dateNowNum)) {
        FuckD.read.end++
        return true
    }
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
            FuckD.bing.sendMSG = `哇！哥哥好棒！阅读任务完成了！\n✨今日阅读奖励：${readPro.progress}/${readPro.max}`
            FuckF.log("🟣", FuckD.bing.sendMSG, true)
            FuckF.send(FuckD.wh)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    }
    try {
        const fucker = await FuckF.mainlandCheck()
        if (FuckD.bing.status && fucker) {
            FuckD.bing.code = -1
            return true
        }
        FuckD.read.date = 0
        const region = FuckD.bing.status ? "cn" : FuckD.bing.region.toLowerCase()
        await FuckF.xhr({
            method: "POST",
            url: "https://prod.rewardsplatform.microsoft.com/dapi/me/activities",
            headers: {
                "content-type": "application/json; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "authorization": `Bearer ${FuckD.bing.token}`,
                "x-rewards-appid": "SAAndroid/31.4.2110003555",
                "x-rewards-ismobile": "true",
                "x-rewards-country": region,
            },
            data: JSON.stringify({
                "amount": 1,
                "country": region,
                "id": FuckF.getRandomUUID(),
                "type": 101,
                "attributes": {
                    "offerid": "ENUS_readarticle3_30points",
                },
            }),
        })
    } catch (e) {
        FuckF.log("🔴", `阅读任务出错！🔛${e.message}`)
    }
    return false
}

FuckF.getRewardsToken = async () => {
    const message = "Request Verification Token 获取"
    try {
        const result = await FuckF.xhr({
            url: "https://rewards.bing.com/",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "referer": "https://rewards.bing.com/",
            },
        })
        const res = result.replace(/\s/g, "")
        const token = res.match(/RequestVerificationToken(.*?)value="(.*?)"/)
        if (token) return token[2]
        FuckF.log("🟡", `${message}失败！🔛${result}`)
    } catch (e) {
        FuckF.log("🔴", `${message}出错！🔛${e.message}`)
    }
    return false
}

FuckF.taskPromos = async () => {
    if (!FuckD.tasks.promos || FuckD.promos.times > 2 || FuckD.promos.end > 0 || (!GM_getValue("Config.keep", true) && FuckD.promos.date == FuckD.bing.dateNowNum)) {
        FuckD.promos.end++
        return true
    }
    const dashboard = await FuckF.getRewardsInfo()
    const requestToken = await FuckF.getRewardsToken()
    if (!dashboard || !requestToken) {
        FuckD.promos.times++
        return false
    }
    let promosArr = []
    let morePromos = dashboard.morePromotions
    let dailySetPromos = dashboard.dailySetPromotions[FuckF.getDatetime()]
    morePromos = Array.isArray(morePromos) ? morePromos : []
    dailySetPromos = Array.isArray(dailySetPromos) ? dailySetPromos : []
    for (const item of [...dailySetPromos, ...morePromos]) {
        if (item.complete == false && item.priority > -2 && item.exclusiveLockedFeatureStatus != "locked") {
            promosArr.push({
                id: item.offerId,
                hash: item.hash,
                url: item.destinationUrl,
            })
        }
    }
    if (promosArr.length < 1) {
        FuckD.promos.end++
        if (FuckD.promos.date != FuckD.bing.dateNowNum) {
            FuckD.promos.date = FuckD.bing.dateNowNum
            FuckD.bing.sendMSG = "哇！哥哥好棒！活动任务完成了！\n🤡具体以官网数据为准"
            FuckF.log("🟣", FuckD.bing.sendMSG, true)
            FuckF.send(FuckD.wh)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    }
    try {
        const fucker = await FuckF.mainlandCheck()
        if (FuckD.bing.status && fucker) {
            FuckD.bing.code = -1
            return true
        }
        FuckD.promos.date = 0
        for (const item of promosArr) {
            FuckF.xhr({
                method: "POST",
                url: "https://rewards.bing.com/api/reportactivity?X-Requested-With=XMLHttpRequest",
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "referer": item.url,
                },
                data: new URLSearchParams({
                    "id": item.id,
                    "hash": item.hash,
                    "timeZone": 480,
                    "activityAmount": 1,
                    "dbs": 0,
                    "form": "",
                    "type": "",
                    "__RequestVerificationToken": requestToken,
                }).toString(),
            })
            FuckF.xhr({
                method: "POST",
                url: `https://${FuckD.bing.host}/msrewards/api/v1/ReportActivity?ajaxreq=1`,
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                    "referer": item.url,
                },
                data: JSON.stringify({
                    "ActivitySubType": "quiz",
                    "ActivityType": "notification",
                    "OfferId": item.id,
                    "Channel": "Bing.Com",
                    "PartnerId": "BingTrivia",
                    "Timezone": -480
                }),
            })
            await new Promise(resolve => setTimeout(resolve, Math.floor(FuckD.bing.time / 3)))
        }
        FuckD.promos.end++
        return true
    } catch (e) {
        FuckF.log("🔴", `活动任务出错！🔛${e.message}`)
    }
    FuckD.promos.times++
    return false
}

FuckF.getQueryWord = async () => {
    let sentence = FuckF.getRandomChinese()
    if (FuckD.api.mode != "offline") {
        if (FuckD.search.word.index < 1 || FuckD.search.word.list.length < 1) {
            const apiHot = FuckF.getRandomApiHot()
            try {
                const result = await FuckF.xhr({ url: FuckD.api.url + apiHot })
                if (result && FuckF.isJSON(result)) {
                    const res = JSON.parse(result)
                    if (res.code == 200) {
                        FuckD.search.word.index = 1
                        for (let i = 0; i < res.data.length; i++) {
                            FuckD.search.word.list.push(res.data[i].title)
                        }
                        FuckD.search.word.list = FuckF.getRandomArr(FuckD.search.word.list)
                        sentence = FuckD.search.word.list[FuckD.search.word.index]
                        sentence = FuckF.getRandomSubstring(sentence)
                        return sentence
                    }
                }
            } catch (e) {
                FuckF.log("🔴", `搜索词数据获取出错！🔛${e.message}`)
            }
        } else {
            FuckD.search.word.index++
            if (FuckD.search.word.index > FuckD.search.word.list.length - 1) {
                FuckD.search.word.index = 0
            }
            sentence = FuckD.search.word.list[FuckD.search.word.index]
            sentence = FuckF.getRandomSubstring(sentence)
            return sentence
        }
        FuckF.log("🟡", "当前搜索词接口异常！已临时使用随机汉字组合！")
    }
    return sentence
}

FuckF.taskSearch = async () => {
    if (!FuckD.tasks.search || FuckD.search.end > 0 || (!GM_getValue("Config.keep", true) && FuckD.search.date == FuckD.bing.dateNowNum)) {
        FuckD.search.end++
        return true
    }
    const dashboard = await FuckF.getRewardsInfo()
    if (!dashboard) {
        FuckD.search.times++
        return false
    }
    let pcReport, mReport
    const searchInfo = dashboard.userStatus.counters
    const dailyPoint = searchInfo.dailyPoint[0].pointProgress
    if (searchInfo.pcSearch) {
        FuckD.search.pc.progress = searchInfo.pcSearch[0].pointProgress
        FuckD.search.pc.max = searchInfo.pcSearch[0].pointProgressMax
        if (FuckD.bing.searchLimit > 0) {
            const reduceKey = `Config.searchLimitReduce_pc_${FuckD.bing.dateNowNum}`
            let randomReduce = GM_getValue(reduceKey, -1)
            if (randomReduce < 0) {
                randomReduce = FuckF.getRandomNum(FuckD.bing.searchLimit + 1)
                GM_setValue(reduceKey, randomReduce)
            }
            FuckD.search.pc.max = Math.max(0, FuckD.search.pc.max - randomReduce)
        }
        pcReport = `\n💻电脑搜索：${FuckD.search.pc.progress}/${FuckD.search.pc.max}`
    } else {
        FuckD.search.pc.max = 0
        pcReport = ""
    }
    if (searchInfo.mobileSearch) {
        FuckD.search.m.progress = searchInfo.mobileSearch[0].pointProgress
        FuckD.search.m.max = searchInfo.mobileSearch[0].pointProgressMax
        if (FuckD.bing.searchLimit > 0) {
            const reduceKey = `Config.searchLimitReduce_m_${FuckD.bing.dateNowNum}`
            let randomReduce = GM_getValue(reduceKey, -1)
            if (randomReduce < 0) {
                randomReduce = FuckF.getRandomNum(FuckD.bing.searchLimit + 1)
                GM_setValue(reduceKey, randomReduce)
            }
            FuckD.search.m.max = Math.max(0, FuckD.search.m.max - randomReduce)
        }
        mReport = `\n📱移动设备搜索：${FuckD.search.m.progress}/${FuckD.search.m.max}`
    } else {
        FuckD.search.m.max = 0
        mReport = ""
    }
    if (dailyPoint == FuckD.search.progressNow) {
        FuckD.search.times++
    } else {
        FuckD.search.times = 0
        FuckD.search.progressNow = dailyPoint
    }
    if (FuckD.search.pc.progress >= FuckD.search.pc.max && FuckD.search.m.progress >= FuckD.search.m.max) {
        FuckD.search.end++
        if (FuckD.search.date != FuckD.bing.dateNowNum) {
            FuckD.search.date = FuckD.bing.dateNowNum
            FuckD.bing.sendMSG = `哇！哥哥好棒！搜索任务完成了！${pcReport}${mReport}`
            FuckF.log("🟣", FuckD.bing.sendMSG, true)
            FuckF.send(FuckD.wh)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    }
    if (FuckD.search.times > 2 || FuckD.search.index >= FuckD.search.limit) {
        FuckD.search.end++
        if (FuckD.search.index < FuckD.search.limit) {
            FuckD.bing.sendMSG = `积分收入限制，共搜索 ${FuckD.search.index} 次！${pcReport}${mReport}`
            FuckF.log("🔵", FuckD.bing.sendMSG)
        } else {
            FuckD.bing.sendMSG = `本次运行正常，共搜索 ${FuckD.search.index} 次！${pcReport}${mReport}`
            FuckF.log("🔵", FuckD.bing.sendMSG)
        }
        FuckF.send(FuckD.wh)
        return true
    }
    FuckD.search.date = 0
    let query, params, pcorm, headers, regionMKT = ""
    if (FuckD.search.pc.progress < FuckD.search.pc.max || FuckD.search.m.progress < FuckD.search.m.max) {
        pcorm = Math.random() > 0.6 ? false : true
        if (FuckD.search.pc.progress >= FuckD.search.pc.max) pcorm = false
        if (FuckD.search.m.progress >= FuckD.search.m.max) pcorm = true
    }
    const keyword = await FuckF.getQueryWord()
    try {
        const fucker = await FuckF.mainlandCheck()
        if (FuckD.bing.status && fucker) {
            FuckD.bing.code = -1
            return true
        }
        GM_cookie("delete", { url: "https://bing.com", name: "_EDGE_S" })
        GM_cookie("delete", { url: "https://bing.com", name: "_Rwho" })
        GM_cookie("delete", { url: "https://bing.com", name: "_RwBf" })
        if (FuckD.bing.status) regionMKT = "&mkt=zh-CN"
        params = `q=${encodeURIComponent(keyword)}&form=QBLH${regionMKT}`
        query = `https://${FuckD.bing.host}/search?${params}`
        if (pcorm) {
            FuckD.search.device = "Desktop"
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": FuckD.ua.pc,
                "cookie": `_Rwho=u=d&ts=${FuckD.bing.dateNowhyphen}`,
            }
        } else {
            FuckD.search.device = "Mobile"
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": FuckD.ua.m,
                "cookie": `_Rwho=u=m&ts=${FuckD.bing.dateNowhyphen}`,
            }
        }
        const result = await FuckF.xhr({
            url: query,
            headers: {
                ...headers,
                "referer": `https://${FuckD.bing.host}/?form=QBLH`,
            }
        })
        if (result) {
            const res = result.replace(/\s/g, "")
            const data0 = res.match(/,IG:"(.*?)",/)
            const guid = data0 ? data0[1] : FuckF.getRandomUUID(true)
            const data = res.match(/class="b_algo(.*?)href="(.*?)"h="ID=(.*?)">(.*?)<\/h2/)
            const ncheader = `https://${FuckD.bing.host}/rewardsapp/ncheader?ver=88888888&IID=SERP.5047&IG=${guid}&ajaxreq=1`
            const report = `https://${FuckD.bing.host}/rewardsapp/reportActivity?IG=${guid}&IID=SERP.5047&${params}&ajaxreq=1`
            headers = { ...headers, "referer": query }
            await FuckF.xhr({ method: "POST", url: ncheader, headers: headers, data: "wb=1%3bi%3d1%3bv%3d1", })
            await FuckF.xhr({ method: "POST", url: report, headers: headers, data: `url=${encodeURIComponent(query)}&V=web`, })
            if (data) {
                const click = `https://${FuckD.bing.host}/fd/ls/GLinkPingPost.aspx?IG=${guid}&ID=${data[3]}&url=${data[2]}`
                await FuckF.xhr({ url: click, headers: headers })
            }
        }
    } catch (e) {
        FuckF.log("🔴", `搜索任务出错！🔛${e.message}`)
    }
    FuckD.search.index++
    return false
}

FuckF.mainlandCheck = async () => {
    const hash = ["g", "e", "o", "i", "s", "a", "m"].join("")
    if (!GM_info.script.header.includes(hash)) {
        FuckD.bing.mainland = -1
        return true
    }
    const result = await FuckF.xhr({
        url: `https://${FuckD.bing.host}/`,
        headers: {
            "cookie": FuckD.cookie.mkt,
        },
    })
    if (result) {
        const res = result.replace(/\s/g, "")
        const data = res.match(/Region:"(.*?)"(.*?)RevIpCC:"(.*?)"/)
        if (data) {
            const ipcc = data[3].toUpperCase()
            FuckD.bing.region = ipcc
            if (FuckD.bing.status && ipcc != "CN") {
                const result = await FuckF.xhr({
                    url: "https://disp-qryapi.3g.qq.com/v1/dispatch",
                    headers: {
                        "referer": "https://3g.qq.com/",
                    },
                })
                if (result && FuckF.isJSON(result)) {
                    const res = JSON.parse(result)
                    const status = res.code
                    FuckD.bing.ip = status == 0 ? res.extra.ip : ""
                    FuckD.bing.ipInfo = status == 0 ? `\n🌏${res.ipInfo}` : ""
                }
                return true
            }
        }
    }
    return false
}

FuckF.send = async (webhook) => {
    const now = new Date()
    FuckD.bing.datetimeLocaleStr = now.toLocaleString()
    await Promise.all(webhook.map(async (i) => {
        if (!i.key) return
        let message = `「${i.name}」消息推送`
        try {
            const result = await FuckF.xhr({
                method: "POST",
                url: i.url + i.key,
                headers: {
                    "content-type": "application/json; charset=UTF-8",
                },
                data: JSON.stringify(i.msg),
            })
            if (result) FuckF.log("🟣", `${message}完成 🔛${result}`)
        } catch (e) {
            FuckF.log("🔴", `消息推送出错！🔛${e.message}`)
        }
    }))
}

return new Promise((resolve, reject) => {
    const seconds = FuckF.getTimestamp()
    GM_cookie("list", { url: "https://login.live.com" }, (result) => {
        let cookies = ""
        result.forEach((item, index) => {
            cookies = cookies + `${item.name}=${item.value}${index == result.length - 1 ? "" : "; "}`
        })
        FuckD.cookie.bing = cookies
    })
    GM_cookie("delete", { url: "https://bing.com", name: "_EDGE_S" })
    FuckD.search.limit = FuckF.getScopeRandomNum(4, 7)
    FuckD.bing.dateNowNum = FuckF.getDatetime(true)
    FuckD.bing.dateNowhyphen = FuckF.getDatetime(false, false)
    const tasksArr = GM_getValue("Config.tasks", false)
    FuckD.sign.date = tasksArr ? tasksArr.sign : 0
    FuckD.read.date = tasksArr ? tasksArr.read : 0
    FuckD.promos.date = tasksArr ? tasksArr.promos : 0
    FuckD.search.date = tasksArr ? tasksArr.search : 0
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

    FuckF.tasksEnd = () => {
        if (FuckD.bing.code < 0) {
            FuckD.bing.mainland--
            FuckD.bing.mainland < 0 || FuckF.log("🟡", `当前 IP 非中国大陆地区，END！\n⛔${FuckD.bing.ip}-${FuckD.bing.region}${FuckD.bing.ipInfo}`, true)
            resolve()
        }
        if (FuckD.sign.end > 0 && FuckD.read.end > 0 && FuckD.promos.end > 0 && FuckD.search.end > 0) {
            FuckD.bing.end--
            FuckD.bing.end < 0 || FuckF.log("🟣", `本次运行结束！用时 ${(FuckF.getTimestamp() - seconds) / 1000} 秒`)
            resolve()
        }
    }

    FuckF.signStart = async () => {
        const result = await FuckF.taskSign()
        if (!result) {
            setTimeout(() => { FuckF.signStart() }, FuckD.bing.time)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.readStart = async () => {
        const result = await FuckF.taskRead()
        if (!result) {
            setTimeout(() => { FuckF.readStart() }, FuckD.bing.time)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.promosStart = async () => {
        const result = await FuckF.taskPromos()
        if (!result) {
            setTimeout(() => { FuckF.promosStart() }, FuckD.bing.time)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.searchStart = async () => {
        const result = await FuckF.taskSearch()
        if (!result) {
            let timespan = FuckD.bing.time
            if (FuckD.search.index < FuckD.search.limit) {
                const spanMIN = (FuckD.bing.span - 15) * 1000
                const spanMAX = (FuckD.bing.span + 15) * 1000
                timespan = FuckF.getScopeRandomNum(spanMIN, spanMAX)
            }
            FuckF.log("🔵", `第 ${FuckD.search.index}/${FuckD.search.limit} 次搜索完成\n(${FuckD.search.device})，等待 ${timespan / 1000} 秒后继续...`)
            setTimeout(() => { FuckF.searchStart() }, timespan)
        } else {
            FuckF.tasksEnd()
        }
    }

    FuckF.tasksStart = async () => {
        if (GM_info.script.author != "geoisam@qq.com") resolve()
        const host = "www.bing.com"
        if (!FuckD.bing.host) {
            if (FuckD.bing.status) {
                FuckD.bing.host = "cn.bing.com"
            } else {
                let url = await FuckF.xhr({
                    url: `https://${host}/`,
                    headers: {
                        "cookie": FuckD.cookie.mkt,
                    },
                }, true)
                url = new URL(url)
                FuckD.bing.host = url ? url.host : host
            }
        }
        const fucker = await FuckF.mainlandCheck()
        if (fucker) {
            FuckD.bing.code = -1
            FuckF.tasksEnd()
        } else {
            FuckF.log("🟣", `初始化运行完成！用时 ${(FuckF.getTimestamp() - seconds) / 1000} 秒`)
            if (FuckD.tasks.promos || FuckD.tasks.search) {
                const result = await FuckF.getRewardsInfo()
                if (!result) {
                    FuckF.log("🔴", "请检查 rewards.bing.com 登录状态！", true)
                    resolve()
                } else {
                    setTimeout(() => { FuckF.promosStart() }, FuckD.bing.time)
                    if (FuckD.tasks.search) {
                        const timespan = FuckF.getScopeRandomNum(7890, 123456)
                        FuckF.log("🔵", `噔噔噔！噔噔噔！噔！停留 ${timespan / 1000} 秒后开始搜索...`)
                        setTimeout(() => { FuckF.searchStart() }, timespan)
                    } else {
                        FuckF.searchStart()
                    }
                }
            } else {
                FuckF.promosStart()
                FuckF.searchStart()
            }
            if (FuckD.tasks.sign || FuckD.tasks.read) {
                const result = await FuckF.renewToken()
                if (!result) {
                    const tips = "🚀授权码/链接为跳转后包含code=M.的链接（3分钟内有效），请勿分享授权码/链接以免个人数据泄露！"
                    if (FuckF.isEdge) {
                        FuckF.log("🔴", `Microsoft Edge 不支持自动授权！请填写授权码/链接后手动运行！\n${tips}`, true)
                    } else {
                        FuckF.log("🔴", `请检查 login.live.com 登录状态，或者填写授权码/链接后手动运行！\n${tips}`, true)
                    }
                    FuckF.tasksEnd()
                } else {
                    setTimeout(() => { FuckF.signStart() }, FuckD.bing.time)
                    setTimeout(() => { FuckF.readStart() }, FuckD.bing.time)
                }
            } else {
                FuckF.signStart()
                FuckF.readStart()
            }
        }
    }

    if ((!GM_getValue("Config.keep", true) && FuckD.sign.date == FuckD.bing.dateNowNum && FuckD.read.date == FuckD.bing.dateNowNum && FuckD.promos.date == FuckD.bing.dateNowNum && FuckD.search.date == FuckD.bing.dateNowNum) || !FuckD.bing.repo.includes("geoisam") || (!FuckD.tasks.sign && !FuckD.tasks.read && !FuckD.tasks.promos && !FuckD.tasks.search)) {
        resolve()
    } else {
        FuckF.tasksStart()
    }
})
