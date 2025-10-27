// ==UserScript==
// @name         微软积分商城签到
// @namespace    https://geoisam.github.io
// @version      3.5.2
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
    limit:
        title: 限制运行（若当前 IP 非 CN 地区则停止）
        type: checkbox
        default: true
    search:
        title: 搜索任务（有一定概率会被风控）
        type: checkbox
        default: true
    others:
        title: 其他任务（活动/阅读/签入 仅限 CN 地区）
        type: checkbox
        default: true
    span:
        title: 搜索间隔（至少 20 秒即间隔 5-35 秒）
        type: number
        default: 30
        min: 20
        unit: ±15秒
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
    chinese: ["一", "丁", "七", "万", "丈", "三", "三", "上", "下", "不", "与", "丐", "丑", "专", "且", "世", "丘", "丙", "业", "丛", "东", "丝", "丢", "两", "严", "丧", "个", "中", "丰", "串", "临", "丸", "丹", "为", "主", "丽", "举", "乃", "久", "么", "义", "之", "乌", "乍", "乎", "乏", "乐", "乒", "乓", "乔", "乖", "乘", "乙", "九", "乞", "也", "习", "乡", "书", "买", "乱", "乳", "了", "予", "争", "事", "二", "于", "亏", "云", "互", "五", "井", "亚", "些", "亡", "交", "亥", "亦", "产", "亩", "享", "京", "亭", "亮", "亲", "人", "亿", "什", "仁", "仅", "仆", "仇", "今", "介", "仍", "从", "仑", "仓", "仔", "他", "仗", "付", "仙", "代", "令", "以", "仪", "们", "仰", "仲", "件", "价", "任", "份", "仿", "企", "伊", "伍", "伏", "伐", "休", "众", "优", "伙", "会", "伞", "伟", "传", "伤", "伦", "伪", "伯", "估", "伴", "伶", "伸", "伺", "似", "佃", "但", "位", "低", "住", "佑", "体", "何", "余", "佛", "作", "你", "佣", "佩", "佳", "使", "侄", "侈", "例", "侍", "供", "依", "侠", "侣", "侥", "侦", "侧", "侨", "侮", "侯", "侵", "便", "促", "俄", "俊", "俏", "俐", "俗", "俘", "保", "信", "俩", "俭", "修", "俯", "俱", "俺", "倍", "倒", "倔", "倘", "候", "倚", "借", "倡", "倦", "债", "值", "倾", "假", "偎", "偏", "做", "停", "健", "偶", "偷", "偿", "傀", "傅", "傍", "储", "催", "傲", "傻", "像", "僚", "僧", "僵", "僻", "儒", "儡", "儿", "允", "元", "兄", "充", "兆", "先", "光", "克", "免", "兑", "兔", "党", "兜", "兢", "入", "全", "八", "公", "六", "兰", "共", "关", "兴", "兵", "其", "具", "典", "养", "兼", "兽", "冀", "内", "冈", "册", "再", "冒", "冕", "冗", "写", "军", "农", "冠", "冤", "冬", "冯", "冰", "冲", "决", "况", "冶", "冷", "冻", "净", "凄", "准", "凉", "凌", "减", "凑", "凛", "凝", "几", "凡", "凤", "凫", "凭", "凯", "凰", "凳", "凶", "凸", "凹", "出", "击", "函", "凿", "刀", "刁", "刃", "分", "切", "刊", "刑", "划", "列", "刘", "则", "刚", "创", "初", "删", "判", "刨", "利", "别", "刮", "到", "制", "刷", "券", "刹", "刺", "刻", "刽", "剂", "剃", "削", "前", "剑", "剔", "剖", "剥", "剧", "剩", "剪", "副", "割", "剿", "劈", "力", "劝", "办", "功", "加", "务", "劣", "动", "助", "努", "劫", "励", "劲", "劳", "势", "勃", "勇", "勉", "勋", "勒", "勘", "募", "勤", "勺", "勾", "勿", "匀", "包", "匆", "匈", "匕", "化", "北", "匙", "匠", "匣", "匪", "匹", "区", "医", "匾", "匿", "十", "千", "升", "午", "半", "华", "协", "卑", "卒", "卓", "单", "卖", "南", "博", "卜", "占", "卡", "卢", "卤", "卦", "卧", "卫", "印", "危", "即", "却", "卵", "卷", "卸", "卿", "厂", "厅", "历", "厉", "压", "厌", "厕", "厘", "厚", "原", "厢", "厦", "厨", "去", "县", "参", "又", "叉", "及", "友", "双", "反", "发", "叔", "取", "受", "变", "叙", "叛", "叠", "口", "古", "句", "另", "叨", "只", "叫", "召", "叭", "叮", "可", "台", "史", "右", "叶", "号", "司", "叹", "叼", "叽", "吁", "吃", "各", "吆", "合", "吉", "吊", "同", "名", "后", "吏", "吐", "向", "吓", "吕", "吗", "君", "吝", "吞", "吟", "吠", "否", "吧", "吨", "吩", "含", "听", "吭", "吮", "启", "吱", "吴", "吵", "吸", "吹", "吻", "吼", "呀", "呆", "呈", "告", "呐", "呕", "员", "呛", "呜", "呢", "周", "味", "呵", "呻", "呼", "命", "咆", "和", "咏", "咐", "咒", "咕", "咖", "咙", "咧", "咨", "咪", "咬", "咱", "咳", "咸", "咽", "哀", "品", "哄", "哆", "哈", "响", "哎", "哑", "哗", "哟", "哥", "哨", "哩", "哪", "哭", "哮", "哲", "哺", "哼", "唁", "唆", "唇", "唉", "唐", "唠", "唤", "唧", "唬", "售", "唯", "唱", "唾", "啃", "啄", "商", "啊", "啡", "啤", "啥", "啦", "啰", "啸", "啼", "喂", "善", "喇", "喉", "喊", "喘", "喜", "喝", "喧", "喳", "喷", "喻", "嗅", "嗓", "嗜", "嗡", "嗤", "嗦", "嗽", "嘀", "嘁", "嘉", "嘱", "嘲", "嘴", "嘶", "嘹", "嘿", "器", "噩", "噪", "嚎", "嚣", "嚷", "嚼", "囊", "囚", "四", "回", "因", "团", "囤", "园", "困", "囱", "围", "固", "国", "图", "圃", "圆", "圈", "土", "圣", "在", "地", "场", "圾", "址", "均", "坊", "坎", "坏", "坐", "坑", "块", "坚", "坛", "坝", "坞", "坟", "坠", "坡", "坤", "坦", "坪", "坯", "坷", "垂", "垃", "垄", "型", "垒", "垛", "垢", "垦", "垫", "垮", "埂", "埃", "埋", "城", "域", "埠", "培", "基", "堂", "堆", "堕", "堡", "堤", "堪", "堰", "堵", "塌", "塑", "塔", "塘", "塞", "填", "境", "墅", "墓", "墙", "增", "墨", "墩", "壁", "壕", "壤", "士", "壮", "声", "壳", "壶", "壹", "处", "备", "复", "夏", "夕", "外", "多", "夜", "够", "大", "天", "太", "夫", "夭", "央", "夯", "失", "头", "夷", "夸", "夹", "夺", "奄", "奇", "奈", "奉", "奋", "奏", "契", "奔", "奕", "奖", "套", "奠", "奢", "奥", "女", "奴", "奶", "奸", "她", "好", "如", "妄", "妆", "妇", "妈", "妒", "妓", "妖", "妙", "妥", "妨", "妹", "妻", "姆", "姊", "始", "姐", "姑", "姓", "委", "姚", "姜", "姥", "姨", "姻", "姿", "威", "娃", "娄", "娇", "娘", "娜", "娩", "娱", "娶", "婆", "婉", "婚", "婴", "婶", "婿", "媒", "媚", "媳", "嫁", "嫂", "嫉", "嫌", "嫡", "嫩", "嬉", "子", "孔", "孕", "字", "存", "孙", "孝", "孟", "季", "孤", "学", "孩", "孵", "孽", "宁", "它", "宅", "宇", "守", "安", "宋", "完", "宏", "宗", "官", "宙", "定", "宛", "宜", "宝", "实", "宠", "审", "客", "宣", "室", "宦", "宪", "宫", "宰", "害", "宴", "宵", "家", "容", "宽", "宾", "宿", "寂", "寄", "密", "寇", "富", "寒", "寓", "寝", "寞", "察", "寡", "寥", "寨", "寸", "对", "寺", "寻", "导", "寿", "封", "射", "将", "尉", "尊", "小", "少", "尔", "尖", "尘", "尚", "尝", "尤", "就", "尸", "尺", "尼", "尽", "尾", "尿", "局", "屁", "层", "居", "屈", "屉", "届", "屋", "屎", "屏", "屑", "展", "属", "屠", "屡", "履", "屯", "山", "屹", "屿", "岁", "岂", "岔", "岖", "岗", "岛", "岩", "岭", "岳", "岸", "峡", "峦", "峭", "峰", "峻", "崇", "崎", "崔", "崖", "崩", "崭", "嵌", "巍", "川", "州", "巡", "巢", "工", "左", "巧", "巨", "巩", "巫", "差", "己", "已", "巴", "巷", "巾", "币", "市", "布", "帅", "帆", "师", "希", "帐", "帕", "帖", "帘", "帚", "帜", "帝", "带", "席", "帮", "常", "帽", "幅", "幌", "幔", "幕", "幢", "干", "干", "平", "年", "并", "幸", "幻", "幼", "幽", "广", "庄", "庆", "庇", "床", "序", "庐", "库", "应", "底", "店", "庙", "府", "庞", "废", "度", "座", "庭", "庵", "庶", "康", "庸", "廉", "廊", "廓", "延", "廷", "建", "开", "异", "弃", "弄", "弊", "式", "弓", "引", "弛", "弟", "张", "弥", "弦", "弧", "弯", "弱", "弹", "强", "归", "当", "录", "形", "彤", "彩", "彪", "彬", "彭", "彰", "影", "役", "彻", "彼", "往", "征", "径", "待", "很", "徊", "律", "徐", "徒", "徒", "得", "徘", "御", "循", "微", "德", "徽", "心", "必", "忆", "忌", "忍", "志", "忘", "忙", "忠", "忧", "快", "忱", "念", "忽", "忿", "怀", "态", "怎", "怒", "怔", "怕", "怖", "怜", "思", "怠", "急", "性", "怨", "怪", "怯", "总", "恃", "恋", "恍", "恐", "恒", "恕", "恢", "恤", "恨", "恩", "恬", "恭", "息", "恰", "恳", "恶", "恼", "悄", "悉", "悍", "悔", "悟", "悠", "患", "悦", "您", "悬", "悯", "悲", "悴", "悼", "情", "惊", "惋", "惑", "惕", "惜", "惠", "惦", "惧", "惨", "惩", "惫", "惭", "惯", "惰", "想", "惶", "惹", "愁", "愈", "愉", "意", "愕", "愚", "感", "愤", "愧", "愿", "慈", "慌", "慎", "慕", "慢", "慧", "慨", "慰", "慷", "憋", "憎", "憔", "憨", "憾", "懂", "懈", "懊", "懒", "懦", "戈", "戏", "成", "我", "戒", "或", "战", "戚", "截", "戳", "戴", "户", "房", "所", "扁", "扇", "手", "才", "扎", "扑", "扒", "打", "扔", "托", "扛", "扣", "执", "扩", "扫", "扬", "扭", "扮", "扯", "扰", "扳", "扶", "批", "扼", "找", "承", "技", "抄", "把", "抑", "抒", "抓", "投", "抖", "抗", "折", "抚", "抛", "抠", "抡", "抢", "护", "报", "披", "抬", "抱", "抵", "抹", "押", "抽", "拂", "拄", "担", "拆", "拇", "拉", "拌", "拍", "拐", "拒", "拓", "拔", "拖", "拗", "拘", "拙", "招", "拜", "拟", "拢", "拣", "拥", "拦", "拧", "拨", "择", "括", "拭", "拯", "拱", "拳", "拴", "拷", "拼", "拾", "拿", "持", "挂", "指", "按", "挎", "挑", "挖", "挚", "挟", "挠", "挡", "挣", "挤", "挥", "挨", "挪", "挫", "振", "挺", "挽", "捂", "捅", "捆", "捉", "捌", "捍", "捎", "捏", "捐", "捕", "捞", "损", "捡", "换", "捣", "捧", "据", "捶", "捷", "捺", "捻", "掀", "掂", "授", "掉", "掌", "掏", "掐", "排", "掖", "掘", "掠", "探", "接", "控", "推", "掩", "措", "掰", "掷", "掸", "掺", "揉", "揍", "描", "提", "插", "揖", "握", "揣", "揩", "揪", "揭", "援", "揽", "搀", "搁", "搂", "搅", "搏", "搓", "搔", "搜", "搞", "搪", "搬", "搭", "携", "摄", "摆", "摇", "摊", "摔", "摘", "摧", "摩", "摸", "摹", "撇", "撑", "撒", "撕", "撞", "撤", "撩", "撬", "播", "撮", "撰", "撵", "撼", "擂", "擅", "操", "擎", "擒", "擦", "攀", "攒", "攘", "支", "收", "改", "攻", "放", "政", "故", "效", "敌", "敏", "救", "教", "敛", "敞", "敢", "散", "敦", "敬", "数", "敲", "整", "敷", "文", "斋", "斑", "斗", "料", "斜", "斟", "斤", "斥", "斧", "斩", "断", "斯", "新", "方", "施", "旁", "旅", "旋", "族", "旗", "无", "既", "日", "旦", "旧", "旨", "早", "旬", "旭", "旱", "时", "旷", "旺", "昂", "昆", "昌", "明", "昏", "易", "昔", "昙", "星", "映", "春", "昧", "昨", "昭", "是", "昵", "昼", "显", "晃", "晋", "晌", "晒", "晓", "晕", "晚", "晤", "晦", "晨", "普", "景", "晰", "晴", "晶", "智", "晾", "暂", "暇", "暑", "暖", "暗", "暮", "暴", "曙", "曲", "更", "曹", "曼", "曾", "替", "最", "月", "有", "朋", "服", "朗", "望", "朝", "期", "朦", "木", "未", "末", "本", "术", "朱", "朴", "朵", "机", "朽", "杀", "杂", "权", "杆", "杈", "杉", "李", "杏", "材", "村", "杖", "杜", "束", "杠", "条", "来", "杨", "杭", "杯", "杰", "松", "板", "极", "构", "枉", "析", "枕", "林", "枚", "果", "枝", "枢", "枣", "枪", "枫", "枯", "架", "枷", "柄", "柏", "某", "柑", "柒", "染", "柔", "柜", "柠", "查", "柬", "柱", "柳", "柴", "柿", "栅", "标", "栈", "栋", "栏", "树", "栓", "栖", "栗", "校", "株", "样", "核", "根", "格", "栽", "桂", "桃", "桅", "框", "案", "桌", "桐", "桑", "档", "桥", "桦", "桨", "桩", "桶", "梁", "梅", "梆", "梗", "梢", "梦", "梧", "梨", "梭", "梯", "械", "梳", "检", "棉", "棋", "棍", "棒", "棕", "棘", "棚", "棠", "森", "棱", "棵", "棺", "椅", "植", "椎", "椒", "椭", "椰", "椿", "楔", "楚", "楞", "楣", "楷", "楼", "概", "榄", "榆", "榔", "榕", "榛", "榜", "榨", "榴", "槐", "槽", "樊", "樟", "模", "横", "樱", "橄", "橘", "橙", "橡", "橱", "檀", "檐", "檩", "檬", "欠", "次", "欢", "欣", "欧", "欲", "欺", "款", "歇", "歉", "歌", "止", "正", "此", "步", "武", "歧", "歪", "歹", "死", "歼", "殃", "殉", "殊", "残", "殖", "殴", "段", "殷", "殿", "毁", "毅", "母", "每", "毒", "比", "毕", "毙", "毛", "毡", "毫", "毯", "氏", "民", "氓", "气", "氛", "氢", "氧", "氨", "氮", "氯", "水", "永", "汁", "求", "汇", "汉", "汗", "汛", "汞", "江", "池", "污", "汤", "汪", "汰", "汹", "汽", "沃", "沈", "沉", "沐", "沙", "沛", "沟", "没", "沥", "沦", "沧", "沪", "沫", "沮", "河", "沸", "油", "治", "沼", "沽", "沾", "沿", "泄", "泉", "泊", "泌", "法", "泛", "泞", "泡", "波", "泣", "泥", "注", "泪", "泰", "泳", "泵", "泻", "泼", "泽", "洁", "洋", "洒", "洗", "洛", "洞", "津", "洪", "洲", "活", "洼", "洽", "派", "流", "浅", "浆", "浇", "浊", "测", "济", "浑", "浓", "浙", "浦", "浩", "浪", "浮", "浴", "海", "浸", "涂", "消", "涉", "涌", "涎", "涕", "涛", "涝", "涡", "涣", "涤", "润", "涧", "涨", "涩", "涮", "涯", "液", "涵", "淀", "淆", "淋", "淌", "淑", "淘", "淡", "淤", "淫", "淮", "深", "淳", "混", "淹", "添", "清", "渊", "渐", "渔", "渗", "渠", "渡", "渣", "渤", "温", "港", "渴", "游", "渺", "湃", "湖", "湘", "湾", "湿", "溃", "溅", "溉", "源", "溜", "溢", "溪", "溯", "溶", "溺", "滋", "滑", "滓", "滔", "滚", "滞", "满", "滤", "滥", "滨", "滩", "滴", "漂", "漆", "漏", "漓", "演", "漠", "漩", "漫", "漱", "漾", "潘", "潜", "潦", "潭", "潮", "澄", "澈", "澎", "澜", "澡", "澳", "激", "濒", "瀑", "灌", "火", "灭", "灯", "灰", "灵", "灶", "灸", "灼", "灾", "灿", "炉", "炊", "炎", "炒", "炕", "炫", "炬", "炭", "炮", "炸", "点", "炼", "烁", "烂", "烈", "烘", "烙", "烛", "烟", "烤", "烦", "烧", "烫", "热", "烹", "焊", "焕", "焙", "焚", "焦", "焰", "然", "煌", "煎", "煞", "煤", "照", "煮", "熄", "熊", "熏", "熔", "熙", "熟", "熬", "燃", "燎", "燕", "燥", "爆", "爪", "爬", "爱", "爵", "父", "爷", "爸", "爹", "爽", "片", "版", "牌", "牍", "牙", "牛", "牡", "牢", "牧", "物", "牲", "牵", "特", "牺", "犀", "犁", "犬", "犯", "状", "犹", "狂", "狈", "狐", "狗", "狞", "狠", "狡", "独", "狭", "狮", "狰", "狱", "狸", "狼", "猎", "猖", "猛", "猜", "猩", "猪", "猫", "猬", "献", "猴", "猾", "猿", "玄", "率", "玉", "王", "玖", "玛", "玩", "玫", "环", "现", "玲", "玷", "玻", "珊", "珍", "珠", "班", "球", "琅", "理", "琉", "琐", "琢", "琳", "琴", "琼", "瑞", "瑟", "瑰", "璃", "璧", "瓜", "瓢", "瓣", "瓤", "瓦", "瓮", "瓶", "瓷", "甘", "甚", "甜", "生", "甥", "用", "甩", "甫", "田", "由", "甲", "申", "电", "男", "甸", "画", "畅", "界", "畏", "畔", "留", "畜", "略", "畦", "番", "畴", "畸", "疆", "疏", "疑", "疗", "疙", "疚", "疟", "疤", "疫", "疮", "疯", "疲", "疹", "疼", "疾", "病", "症", "痊", "痒", "痕", "痘", "痛", "痢", "痪", "痰", "痴", "痹", "瘟", "瘤", "瘦", "瘩", "瘪", "瘫", "瘸", "瘾", "癌", "癞", "癣", "登", "白", "百", "皂", "的", "皆", "皇", "皮", "皱", "皿", "盅", "盆", "盈", "益", "盏", "盐", "监", "盒", "盔", "盖", "盗", "盘", "盛", "盟", "目", "盯", "盲", "直", "相", "盹", "盼", "盾", "省", "眉", "看", "真", "眠", "眨", "眯", "眶", "眷", "眼", "着", "睁", "睛", "睡", "督", "睦", "睬", "睹", "瞄", "瞎", "瞒", "瞧", "瞪", "瞬", "瞭", "瞳", "瞻", "矗", "矛", "矢", "知", "矩", "矫", "短", "矮", "石", "矾", "矿", "码", "砂", "砌", "砍", "研", "砖", "砚", "砰", "破", "砸", "砾", "础", "硅", "硕", "硝", "硫", "硬", "确", "硼", "碉", "碌", "碍", "碎", "碑", "碗", "碘", "碟", "碧", "碰", "碱", "碳", "碴", "碾", "磁", "磅", "磕", "磨", "磷", "磺", "礁", "示", "礼", "社", "祈", "祖", "祝", "神", "祟", "祠", "祥", "票", "祭", "祷", "祸", "禀", "禁", "福", "离", "禽", "禾", "秀", "私", "秃", "秆", "秉", "秋", "种", "科", "秒", "秕", "秘", "租", "秤", "秦", "秧", "秩", "秫", "积", "称", "秸", "移", "秽", "稀", "程", "稍", "税", "稚", "稠", "稳", "稻", "稼", "稽", "稿", "穆", "穗", "穴", "究", "穷", "空", "穿", "突", "窃", "窄", "窍", "窑", "窒", "窖", "窗", "窘", "窜", "窝", "窟", "窥", "窿", "立", "竖", "站", "竞", "竟", "章", "竣", "童", "竭", "端", "竹", "竿", "笆", "笋", "笑", "笔", "笙", "笛", "笤", "符", "笨", "第", "笼", "等", "筋", "筏", "筐", "筑", "筒", "答", "策", "筛", "筝", "筷", "筹", "签", "简", "箍", "箕", "算", "管", "箩", "箫", "箭", "箱", "篇", "篓", "篙", "篡", "篮", "篱", "篷", "簇", "簸", "簿", "籍", "米", "类", "籽", "粉", "粒", "粗", "粘", "粟", "粤", "粥", "粪", "粮", "粱", "粹", "精", "糊", "糕", "糖", "糙", "糜", "糟", "糠", "糯", "系", "紊", "素", "索", "紧", "紫", "累", "絮", "繁", "纠", "红", "纤", "约", "级", "纪", "纫", "纬", "纯", "纱", "纲", "纳", "纵", "纷", "纸", "纹", "纺", "纽", "线", "练", "组", "绅", "细", "织", "终", "绊", "绍", "绎", "经", "绑", "绒", "结", "绕", "绘", "给", "络", "绝", "绞", "统", "绢", "绣", "继", "绩", "绪", "续", "绰", "绳", "维", "绵", "绷", "绸", "综", "绽", "绿", "缀", "缅", "缆", "缎", "缓", "缔", "缕", "编", "缘", "缚", "缝", "缠", "缤", "缨", "缩", "缭", "缰", "缴", "缸", "缺", "罐", "网", "罕", "罗", "罚", "罢", "罩", "罪", "置", "署", "羊", "美", "羔", "羞", "羡", "群", "羹", "羽", "翁", "翅", "翎", "翔", "翘", "翠", "翩", "翰", "翻", "翼", "耀", "老", "考", "者", "而", "耍", "耐", "耕", "耕", "耗", "耙", "耳", "耸", "耻", "耽", "耿", "聂", "聊", "聋", "职", "联", "聘", "聚", "聪", "肃", "肄", "肆", "肉", "肋", "肌", "肖", "肘", "肚", "肛", "肝", "肠", "股", "肢", "肤", "肥", "肩", "肪", "肮", "肯", "育", "肴", "肺", "肾", "肿", "胀", "胁", "胃", "胆", "背", "胎", "胖", "胚", "胜", "胞", "胡", "胧", "胯", "胰", "胳", "胶", "胸", "能", "脂", "脆", "脉", "脊", "脏", "脐", "脑", "脓", "脖", "脚", "脯", "脱", "脸", "脾", "腊", "腋", "腌", "腐", "腔", "腕", "腥", "腮", "腰", "腹", "腺", "腻", "腾", "腿", "膀", "膊", "膏", "膘", "膛", "膜", "膝", "膨", "膳", "臀", "臂", "臊", "臣", "自", "臭", "至", "致", "臼", "舀", "舅", "舆", "舌", "舍", "舒", "舔", "舞", "舟", "航", "般", "舰", "舱", "舵", "舶", "舷", "船", "艇", "艘", "良", "艰", "色", "艳", "艺", "艾", "节", "芋", "芍", "芒", "芙", "芜", "芝", "芥", "芦", "芬", "芭", "芯", "花", "芳", "芹", "芽", "苇", "苍", "苏", "苔", "苗", "苛", "苞", "苟", "若", "苦", "苫", "英", "苹", "茁", "茂", "范", "茄", "茅", "茉", "茎", "茧", "茫", "茬", "茴", "茵", "茶", "茸", "荆", "草", "荐", "荒", "荔", "荚", "荞", "荠", "荡", "荣", "荤", "荧", "药", "荷", "荸", "莉", "莫", "莱", "莲", "获", "莹", "莺", "莽", "菇", "菊", "菌", "菜", "菠", "菩", "菱", "菲", "萄", "萌", "萍", "萎", "萝", "萤", "营", "萧", "萨", "落", "著", "葛", "葡", "董", "葫", "葬", "葱", "葵", "蒂", "蒋", "蒙", "蒜", "蒲", "蒸", "蒿", "蓄", "蓉", "蓖", "蓝", "蓬", "蔑", "蔓", "蔗", "蔚", "蔫", "蔬", "蔼", "蔽", "蕉", "蕊", "蕴", "蕾", "薄", "薇", "薛", "薪", "薯", "藏", "藐", "藕", "藤", "藻", "蘑", "蘸", "虎", "虏", "虐", "虑", "虚", "虫", "虱", "虹", "虽", "虾", "蚀", "蚁", "蚂", "蚊", "蚌", "蚓", "蚕", "蚜", "蚣", "蚤", "蚪", "蚯", "蛀", "蛆", "蛇", "蛉", "蛋", "蛔", "蛙", "蛛", "蛤", "蛮", "蛹", "蛾", "蜀", "蜂", "蜈", "蜒", "蜓", "蜕", "蜗", "蜘", "蜜", "蜡", "蜻", "蝇", "蝉", "蝌", "蝎", "蝗", "蝙", "蝠", "蝴", "蝶", "螃", "融", "螟", "螺", "蟀", "蟆", "蟋", "蟹", "蠕", "蠢", "血", "衅", "行", "衍", "衔", "街", "衙", "衡", "衣", "补", "表", "衩", "衫", "衬", "衰", "衷", "袁", "袄", "袋", "袍", "袒", "袖", "袜", "被", "袭", "袱", "裁", "裂", "装", "裆", "裉", "裕", "裙", "裤", "裳", "裸", "裹", "褂", "褐", "褒", "褥", "襟", "西", "要", "覆", "见", "观", "规", "觅", "视", "览", "觉", "角", "解", "触", "言", "誉", "誊", "誓", "警", "譬", "计", "订", "认", "讥", "讨", "让", "训", "议", "讯", "记", "讲", "讳", "讶", "许", "讹", "论", "讼", "讽", "设", "访", "诀", "证", "评", "诅", "识", "诈", "诉", "诊", "词", "译", "试", "诗", "诚", "话", "诞", "诡", "询", "该", "详", "诫", "诬", "语", "误", "诱", "诲", "说", "诵", "请", "诸", "诺", "读", "诽", "课", "谁", "调", "谅", "谆", "谈", "谊", "谋", "谍", "谎", "谐", "谒", "谓", "谚", "谜", "谢", "谣", "谤", "谦", "谨", "谬", "谭", "谱", "谴", "谷", "豁", "豆", "豌", "象", "豪", "豫", "豹", "豺", "貌", "贝", "贞", "负", "贡", "财", "责", "贤", "败", "账", "货", "货", "质", "贩", "贪", "贫", "贬", "购", "贮", "贯", "贰", "贱", "贴", "贵", "贸", "费", "贺", "贼", "贾", "贿", "赁", "赂", "赃", "资", "赊", "赋", "赌", "赎", "赏", "赐", "赔", "赖", "赘", "赚", "赛", "赞", "赠", "赡", "赢", "赤", "赦", "赫", "走", "赴", "赵", "赶", "起", "趁", "超", "越", "趋", "趟", "趣", "足", "趴", "趾", "跃", "跋", "跌", "跑", "跛", "距", "跟", "跨", "跪", "路", "跳", "践", "跷", "跺", "踊", "踏", "踢", "踩", "踪", "踱", "蹂", "蹄", "蹈", "蹋", "蹦", "蹬", "蹭", "蹲", "躁", "躏", "身", "躬", "躯", "躲", "躺", "车", "轧", "轨", "轩", "转", "轮", "软", "轰", "轴", "轻", "载", "轿", "较", "辅", "辆", "辈", "辉", "辐", "辑", "输", "辕", "辖", "辙", "辛", "辜", "辞", "辟", "辣", "辨", "辩", "辫", "辰", "辱", "边", "辽", "达", "迁", "迂", "迄", "迅", "过", "迈", "迎", "运", "近", "返", "还", "这", "进", "远", "违", "连", "迟", "迫", "述", "迷", "迹", "追", "退", "送", "适", "逃", "逆", "选", "逊", "透", "逐", "递", "途", "逗", "通", "逛", "逝", "逞", "速", "造", "逢", "逮", "逸", "逻", "逼", "逾", "遂", "遇", "遍", "遏", "道", "遗", "遣", "遥", "遭", "遮", "遵", "避", "邀", "邑", "邓", "邢", "那", "邦", "邪", "邮", "邻", "郁", "郊", "郎", "郑", "部", "郭", "都", "鄙", "酌", "配", "酒", "酗", "酝", "酣", "酥", "酪", "酬", "酱", "酵", "酷", "酸", "酿", "醇", "醉", "醋", "醒", "采", "释", "里", "重", "野", "量", "金", "鉴", "针", "钉", "钓", "钙", "钝", "钞", "钟", "钠", "钢", "钥", "钦", "钧", "钩", "钮", "钱", "钳", "钻", "钾", "铁", "铃", "铅", "铆", "铐", "铛", "铜", "铝", "铡", "铣", "铭", "铲", "银", "铸", "铺", "链", "销", "锁", "锄", "锅", "锈", "锉", "锋", "锌", "锐", "错", "锚", "锡", "锣", "锤", "锥", "锦", "锨", "锭", "键", "锯", "锰", "锹", "锻", "镀", "镇", "镊", "镐", "镜", "镣", "镰", "镶", "长", "门", "闪", "闭", "问", "闯", "闰", "闲", "间", "闷", "闸", "闹", "闺", "闻", "闽", "阀", "阁", "阅", "阎", "阐", "阔", "队", "阱", "防", "阳", "阴", "阵", "阶", "阻", "阿", "附", "际", "陆", "陈", "陋", "陌", "降", "限", "陕", "陡", "院", "除", "陨", "险", "陪", "陵", "陶", "陷", "隅", "隆", "随", "隐", "隔", "隘", "隙", "障", "隧", "隶", "难", "雀", "雁", "雄", "雅", "集", "雇", "雌", "雏", "雕", "雨", "雪", "雳", "零", "雷", "雹", "雾", "需", "震", "霉", "霍", "霎", "霜", "霞", "露", "霸", "霹", "青", "靖", "静", "非", "靠", "靡", "面", "革", "靴", "靶", "鞋", "鞍", "鞠", "鞭", "韧", "韩", "韭", "音", "韵", "页", "顶", "顷", "项", "顺", "须", "顽", "顾", "顿", "颁", "颂", "预", "颅", "领", "颇", "颈", "颊", "频", "颓", "颖", "颗", "题", "颜", "额", "颠", "颤", "风", "飒", "飘", "飞", "食", "餐", "饥", "饭", "饮", "饰", "饱", "饲", "饵", "饶", "饺", "饼", "饿", "馁", "馅", "馆", "馋", "馍", "馏", "馒", "首", "香", "马", "驮", "驯", "驰", "驱", "驳", "驴", "驶", "驹", "驻", "驼", "驾", "骂", "骄", "骆", "骇", "验", "骏", "骑", "骗", "骚", "骡", "骤", "骨", "髓", "高", "鬓", "鬼", "魁", "魂", "魄", "魏", "魔", "鱼", "鲁", "鲜", "鲤", "鲫", "鲸", "鳄", "鳍", "鳖", "鳞", "鸟", "鸠", "鸡", "鸣", "鸥", "鸦", "鸭", "鸯", "鸳", "鸵", "鸽", "鸿", "鹃", "鹅", "鹉", "鹊", "鹏", "鹤", "鹦", "鹰", "鹿", "麦", "麸", "麻", "黄", "黍", "黎", "黑", "黔", "默", "鼎", "鼓", "鼠", "鼻", "齐", "齿", "龄", "龙", "龟"],
    auth: {
        code: "https://login.live.com/oauth20_authorize.srf",
        token: "https://login.live.com/oauth20_token.srf",
        client: "0000000040170455",
        scope: "service::prod.rewardsplatform.microsoft.com::MBI_SSL",
        redirect: "https://login.live.com/oauth20_desktop.srf",
    },
    ua: {
        pc: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.2420.81",
        m: "Mozilla/5.0 (Linux; Android 16; MCE16 Build/BP3A.250905.014; ) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.0.0 Mobile Safari/537.36 EdgA/123.0.2420.102",
    },
    cookie: {
        pc: "PREFCOL=0&CW=1600&CH=900&SCW=1500&SCH=3000&BRW=XW&BRH=M&PRVCW=1600&PRVCH=900&DPR=1.0&B=0",
        m: "PREFCOL=0&CW=400&CH=900&SCW=400&SCH=900&BRW=MW&BRH=MT&PRVCW=400&PRVCH=900&DPR=3.5&PR=3.5&OR=0&B=0",
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
        status: GM_getValue("Config.limit", true),
        hash: "AFF08D54C59EA983B9ED6FFCAFB354B8",
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

    getRandomChinese(min = 1, max = 10) {
        const c = FuckD.chinese
        const l = this.getScopeRandomNum(min, max)
        return Array.from(
            { length: l },
            () => c[this.getRandomNum(c.length)],
        ).join("")
    },

    getTimestamp(start = 1, end = 13) {
        const timestamp = Date.now()
        const num = Number(timestamp.toString().substring(start, end))
        return num
    },

    getDatetime(num = false) {
        const today = new Date()
        const year = today.getFullYear()
        let month = today.getMonth()
        let day = today.getDate()
        month = month < 10 ? "0" + month : month
        day = day < 10 ? "0" + day : day
        const dateNow = num ? Number(`${year}${month}${day}`) : `${month}/${day}/${year}`
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

FuckF.getRandomApiHot = () => {
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
        if (code) return code[0]
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
    if (FuckD.bing.status) {
        const fucker = await FuckF.mainlandCheck()
        if (fucker) {
            FuckD.promos.end = -1
            FuckF.tasksEnd()
        }
    }
    if (FuckD.sign.date == FuckD.bing.dateNowNum || FuckD.sign.end > 0 || FuckD.sign.times > 2) {
        FuckD.sign.end++
        return true
    }
    if (!FuckD.bing.token) await FuckF.renewToken()
    if (FuckD.sign.point >= 0) {
        FuckD.sign.end++
        if (FuckD.sign.date != FuckD.bing.dateNowNum) {
            FuckD.sign.date = FuckD.bing.dateNowNum
            FuckF.log("🟣", `哇！哥哥好棒！签入任务完成了！\n${FuckD.sign.point > 0 ? `✨今日签入奖励：${FuckD.sign.point}` : "🚨今日已签入，无法二次签入"}`, true)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    } else {
        try {
            if (FuckD.bing.status) {
                const fucker = await FuckF.mainlandCheck()
                if (fucker) {
                    FuckD.promos.end = -1
                    FuckF.tasksEnd()
                }
            }
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
                    "x-rewards-partnerid": "startapp",
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
    if (FuckD.bing.status) {
        const fucker = await FuckF.mainlandCheck()
        if (fucker) {
            FuckD.promos.end = -1
            FuckF.tasksEnd()
        }
    }
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
            if (FuckD.bing.status) {
                const fucker = await FuckF.mainlandCheck()
                if (fucker) {
                    FuckD.promos.end = -1
                    FuckF.tasksEnd()
                }
            }
            FuckD.read.date = 0
            await FuckF.xhr({
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
                    "id": FuckF.getRandomUUID(),
                    "type": 101,
                    "country": "cn",
                    "risk_context": {},
                    "channel": "SAAndroid",
                }),
            })
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
        const token = res.match(/RequestVerificationToken"type="hidden"value="(.*?)"/)
        if (token) return token[1]
        FuckD.promos.times++
        FuckF.log("🔴", `${message}失败！🔛${result}`)
        return false
    } catch (e) {
        return null
    }
}

FuckF.taskPromos = async () => {
    if (FuckD.bing.status) {
        const fucker = await FuckF.mainlandCheck()
        if (fucker) {
            FuckD.promos.end = -1
            FuckF.tasksEnd()
        }
    }
    if (FuckD.promos.end > 0 || FuckD.promos.times > 2) {
        FuckD.promos.end++
        return true
    }
    const dashboard = await FuckF.getRewardsInfo()
    if (!dashboard) return false
    const requestToken = await FuckF.getRewardsToken()
    if (!requestToken) return false
    let promosArr = []
    let morePromos = dashboard.morePromotions
    let dailySetPromos = dashboard.dailySetPromotions[FuckF.getDatetime()]
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
            if (FuckD.bing.status) {
                const fucker = await FuckF.mainlandCheck()
                if (fucker) {
                    FuckD.promos.end = -1
                    FuckF.tasksEnd()
                }
            }
            FuckD.promos.date = 0
            for (const item of promosArr) {
                FuckF.xhr({
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
                await new Promise(resolve => setTimeout(resolve, FuckD.bing.time))
            }
            FuckD.promos.times++
            return false
        } catch (e) {
            return null
        }
    }
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
    if (FuckD.bing.status) {
        const fucker = await FuckF.mainlandCheck()
        if (fucker) {
            FuckD.promos.end = -1
            FuckF.tasksEnd()
        }
    }
    if (FuckD.search.end > 0) return true
    const dashboard = await FuckF.getRewardsInfo()
    if (!dashboard) return false
    let pcReport, mReport
    const searchInfo = dashboard.userStatus.counters
    if (searchInfo.pcSearch) {
        FuckD.search.pc.progress = searchInfo.pcSearch[0].pointProgress
        FuckD.search.pc.max = searchInfo.pcSearch[0].pointProgressMax
        pcReport = `\n💻电脑搜索：${FuckD.search.pc.progress}/${FuckD.search.pc.max}`
    } else {
        FuckD.search.pc.max = 0
        pcReport = ""
    }
    if (searchInfo.mobileSearch) {
        FuckD.search.m.progress = searchInfo.mobileSearch[0].pointProgress
        FuckD.search.m.max = searchInfo.mobileSearch[0].pointProgressMax
        mReport = `\n📱移动设备搜索：${FuckD.search.m.progress}/${FuckD.search.m.max}`
    } else {
        FuckD.search.m.max = 0
        mReport = ""
    }
    if (FuckD.search.times > 2 || FuckD.search.index >= FuckD.search.limit) {
        FuckD.search.end++
        FuckF.log("🔵", `本次运行共搜索 ${FuckD.search.index} 次！${pcReport}${mReport}`)
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
            FuckF.log("🟣", `哇！哥哥好棒！搜索任务完成了！${pcReport}${mReport}`, true)
        }
        GM_setValue("Config.tasks", FuckD.bing.tasks)
        return true
    } else {
        FuckD.search.date = 0
        const keyword = await FuckF.getQueryWord()
        let headers, query = `https://${FuckD.bing.host}/search?q=${keyword}&form=QBLH&qs=ds`
        if (FuckD.search.pc.progress < FuckD.search.pc.max) {
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.pc,
                "cookie": `SRCHHPGUSR=${FuckD.cookie.pc}`,
            }
        }
        if (FuckD.search.m.progress < FuckD.search.m.max) {
            headers = {
                "content-type": "application/x-www-form-urlencoded; charset=utf-8",
                "user-agent": FuckD.ua.m,
                "cookie": `SRCHHPGUSR=${FuckD.cookie.m}`,
            }
        }
        try {
            if (FuckD.bing.status) {
                const fucker = await FuckF.mainlandCheck()
                if (fucker) {
                    FuckD.promos.end = -1
                    FuckF.tasksEnd()
                }
            }
            const result = await FuckF.xhr({ url: query, headers: { ...headers, "referer": `https://${FuckD.bing.host}/?form=QBLH`, }, })
            if (result) {
                const res = result.replace(/\s/g, "")
                const data1 = res.match(/,IG:"(.*?)"/)
                const data2 = res.match(/;_G.AppVer="(.*?)"/)
                const guid = data1 ? data1[1] : FuckF.getRandomUUID(true)
                const appver = data2 ? data2[1] : FuckF.getTimestamp(5)
                const data = res.match(/class="b_algo(.*?)href="(.*?)"h="ID=(.*?)">(.*?)<\/h2/)
                const ncheader = `https://${FuckD.bing.host}/rewardsapp/ncheader?ver=${appver}&IID=SERP.5047&IG=${guid}&ajaxreq=1`
                const report = `https://${FuckD.bing.host}/rewardsapp/reportActivity?IG=${guid}&IID=SERP.5047&q=${keyword}&form=QBLH&qs=ds&ajaxreq=1`
                headers = { ...headers, "referer": query, }
                await FuckF.xhr({ method: "POST", url: ncheader, headers: headers, data: "wb=1;i=1;v=1", })
                await FuckF.xhr({ method: "POST", url: report, headers: headers, data: `url=${encodeURIComponent(query)}&V=web`, })
                if (data) {
                    const click = `https://${FuckD.bing.host}/fd/ls/GLinkPingPost.aspx?IG=${guid}&ID=${data[3]}&url=${data[2]}`
                    await FuckF.xhr({ url: click, headers: headers, })
                }
            }
            FuckD.search.index++
            return false
        } catch (e) { }
    }
}

FuckF.mainlandCheck = async () => {
    const host = "www.bing.com"
    let url = await FuckF.xhr({ url: `https://${host}/` }, true)
    url = new URL(url)
    FuckD.bing.host = url ? url.host : host
    if (FuckD.bing.status) {
        const result = await FuckF.xhr({ url: `https://${FuckD.bing.host}/` })
        if (result) {
            const res = result.replace(/\s/g, "")
            const data = res.match(/Region:"(.*?)"(.*?)RevIpCC:"(.*?)"/)
            if (data) {
                const ipcc = data[3].toUpperCase()
                if (ipcc != "CN") {
                    FuckD.bing.ip = ipcc
                    return true
                }
            }
        }
    }
    return false
}

return new Promise((resolve, reject) => {
    if (!GM_info.script.header.includes(FuckD.bing.repo)) resolve()
    FuckD.search.limit = FuckF.getScopeRandomNum(3, 7)
    FuckD.bing.dateNowNum = Number(FuckF.getDatetime(true))
    const tasksArr = GM_getValue("Config.tasks", false)
    FuckD.sign.date = tasksArr ? tasksArr.sign : 0
    FuckD.read.date = tasksArr ? tasksArr.read : 0
    FuckD.promos.date = tasksArr ? tasksArr.promos : 0
    FuckD.search.date = tasksArr ? tasksArr.search : 0
    FuckF.hashCheck(GM_info.script.header + FuckD.bing.repo).then(hash => {
        FuckF.log("🟣", `初始化完成！🔛${hash}`)
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
    let mainlandCheckTimes = 0
    FuckF.tasksEnd = () => {
        mainlandCheckTimes--
        if (FuckD.promos.end < 0) {
            mainlandCheckTimes < -1 || FuckF.log("🟡", `当前 IP 非中国大陆地区，END！\n🚀国家地区代码：${FuckD.bing.ip}`, true)
            resolve()
        }
        if (FuckD.sign.end > 0 && FuckD.read.end > 0 && FuckD.promos.end > 0 && FuckD.search.end > 0) {
            FuckF.log("🟣", `运行完成！🔛${FuckF.getRandomUUID(true)}`)
            FuckF.initCheck()
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
                const spanMIN = (FuckD.bing.span - 15) * 1000
                const spanMAX = (FuckD.bing.span + 15) * 1000
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
            const fucker = await FuckF.mainlandCheck()
            if (fucker) {
                FuckD.promos.end = -1
                FuckF.tasksEnd()
            }
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
    }

    FuckF.tasksStart()
})
