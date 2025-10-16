# -*- coding: UTF-8 -*-
"""
// @name         华米运动步数修改
// @namespace    https://geoisam.github.io
// @version      2.0.0
// @description  修改并同步 微信运动/支付宝运动 步数，需登录 Zepp/Zepp Life 绑定第三方数据，支持多账号处理和消息推送
// @author       geoisam@qq.com
// @homepage     https://github.com/geoisam/FuckScripts
// @supportURL   https://github.com/geoisam/FuckScripts/issues
// @tips         此脚本一直为 开源免费 使用，如果你是从某些地方买的话，你就是被骗了
"""


# pip install requests pycryptodome
import os, sys, json, time, random, requests
from datetime import datetime, timezone, timedelta
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad


# 账号,密码（注意格式）
USER_DATA = [
    # ["18987456321", "12345ssdlh"],
    # ["no@thank.you", "thanks886"],
    # ["xxxxx@xx.xxx", "xxxxxxxx"],
]

# 步数最小值（MIN）
STEPS_MIN = 17760
# 步数最大值（MAX）
STEPS_MAX = 82240
# 运行间隔（至少10秒）
SPAN_TIME = 10

# 企业微信消息推送（群机器人）
WECHAT_KEY = ""
# 钉钉群机器人（不加签，关键词：#）
DING_KEY = ""
# 飞书群机器人（不加签，关键词：#）
FEISHU_KEY = ""
# PushMe App（push.i-i.me）
PUSHME_KEY = ""

# 穿戴设备ID（随便乱填都行，也可填你绑定的设备）
DEVICE_ID = "88CC5224060006C4"

# Token的有效期好像是10天，顶号登录就会直接失效
FILE_NAME = "data.json"


class FuckM(object):
    def __init__(self):
        self.isOK = True
        self.accounts = []
        self.spanTime = SPAN_TIME
        self.tokenInfo = {}
        self.todaySteps = 0
        self.currentText = ""
        self.currentDocs = ""
        self.currentPath = os.path.abspath(__file__)
        self.filePath = os.path.join(os.path.dirname(self.currentPath), FILE_NAME)
        self.script = {
            "version": "2.0.0",
            "name": "华米运动步数修改",
            "url": "https://github.com/geoisam",
            "tips": "\u2728 \u6e29\u99a8\u63d0\u793a\uff1a\u60a8\u53ef\u80fd\u662f\u76d7\u7248\u811a\u672c\u7684\u53d7\u5bb3\u8005\uff0c\u8bf7\u6ce8\u610f\u9632\u8303\u8bc8\u9a97\uff01",
        }
        self.headers = {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "MiFit/6.12.0 (MCE16; Android 16; Density/1.5)",
            "app_name": "com.xiaomi.hm.health",
        }
        self.huami = {
            "text": "40D4FBA4FEA4BA0DB5F22C63C1BCD413E58C4EF30FF6DDD66435FB61C89CA01C069AFA9D5ADDD69AC31CE2A63B794AEB5C7288D8891091D03B46DB5FBC6B38C6BA2F8636754418AF2DA7EADC9FC455B41E45C66778BB6632784D877D7308014D",
            "type": "D6B3E2FCE00FD099F9593C9C8C564F59E3B3CC1FE965D852F55E0E3ADA1919C7",
            "key": "xeNtBVqzDc6tuNTh",
            "iv": "MAAAYAAAAAAAAABg",
            "token": "",
            "userName": "",
            "thirdName": "huami",
        }

    @staticmethod
    def getTimestamp(long=13):
        return int(str(time.time_ns())[:long])

    @staticmethod
    def getDatetime(only=False, log=False):
        timeUTC = datetime.now(timezone.utc)
        timeChina = timeUTC + timedelta(hours=8)
        datetimeChina = timeChina.strftime("%Y-%m-%d") if only else timeChina.strftime("%Y-%m-%d %H:%M:%S.%f")[:-3] if log else timeChina.strftime("%Y-%m-%d %H:%M:%S")
        return datetimeChina

    @staticmethod
    def isJSON(s):
        try:
            j = json.loads(s)
            if isinstance(j, (list, dict)):
                return True
            return False
        except json.JSONDecodeError:
            return False

    @staticmethod
    def wait(t):
        time.sleep(t)

    @staticmethod
    def mergeArray(group1, group2):
        group1Dict = {user: pwd for user, pwd, *_ in group1}
        group2Dict = {user: token for user, token, *_ in group2}
        unique_users = []
        seen = set()
        for item in group1:
            if not item:
                continue
            user = item[0]
            if user not in seen:
                seen.add(user)
                unique_users.append(user)
        mergedArray = []
        for user in unique_users:
            pwd = group1Dict[user]
            token = group2Dict.get(user, "")
            mergedArray.append([user, pwd, token])
        return mergedArray

    @staticmethod
    def updateArray(group1, group2):
        mapping = {}
        for item in group1:
            if not item:
                continue
            user = item[0]
            mapping[user] = item[1:3]
        for item in group2:
            if not item:
                continue
            user = item[0]
            mapping[user] = item[1:3]
        return [[user] + values for user, values in mapping.items()]

    def log(self, *args):
        datetimeChina = self.getDatetime(log=True)
        message = f"[{datetimeChina}] {' '.join(map(str, args))}"
        print(message, flush=True)

    def saveData(self, data):
        with open(self.filePath, "w", encoding="utf-8") as f:
            try:
                data = json.dumps(data, ensure_ascii=False)
                f.write(data)
            except Exception as e:
                self.log(f"🔴 文件写入 JSON 数据失败\n{e}")

    def readData(self):
        if not os.path.isfile(self.filePath):
            return []
        try:
            with open(self.filePath, "r", encoding="utf-8") as f:
                content = f.read().strip()
                if not content:
                    return []
                dataList = json.loads(content)
                if any(item not in self.currentDocs for item in ["geoi", "sam"]):
                    return []
                if not all(isinstance(item, list) and len(item) == 3 for item in dataList):
                    self.log(f"🔴 文件 JSON 数据格式错误\n{e}")
                    return []
                return dataList
        except Exception as e:
            self.log(f"🔴 读取文件 JSON 数据失败\n{e}")
            return []

    def initCheck(self, feature):
        self.currentDocs = self.decryptd(self.huami["type"])
        self.currentText = self.decryptd(self.huami["text"])
        try:
            with open(self.currentPath, "r", encoding="utf-8") as f:
                content = f.read()
                if feature not in content:
                    self.isOK = False
        except Exception as e:
            sys.exit(1)

    def encryptd(self, plaintext: str) -> str:
        key = self.huami["key"].encode("utf-8")
        iv = self.huami["iv"].encode("utf-8")
        TextBytes = plaintext.encode("utf-8")
        paddedText = pad(TextBytes, AES.block_size)
        cipher = AES.new(key, AES.MODE_CBC, iv)
        cipherText = cipher.encrypt(paddedText)
        return cipherText.hex().upper()

    def decryptd(self, plainHEX: str) -> str:
        key = self.huami["key"].encode("utf-8")
        iv = self.huami["iv"].encode("utf-8")
        cipherText = bytes.fromhex(plainHEX)
        cipher = AES.new(key, AES.MODE_CBC, iv)
        paddedText = cipher.decrypt(cipherText)
        textBytes = unpad(paddedText, AES.block_size)
        return textBytes.decode("utf-8")

    def checkAgain(self):
        if not self.isOK:
            self.log(self.currentText)

    def xhr(self, params):
        self.checkAgain()
        try:
            params = {**params, "allow_redirects": False}
            with requests.Session() as session:
                response = session.request(**params, timeout=5)
                result = response.text
                if response.status_code == 200:
                    return result
                if response.status_code == 429:
                    self.log(f"🟡 请求过于频繁，请稍后再试！\n{result}")
                else:
                    self.log(f"🔴 请求失败！状态码：{response.status_code}\n{result}")
                return False
        except requests.exceptions.Timeout:
            self.log(f"🟡 请求超时！")
        except requests.exceptions.ConnectionError:
            self.log(f"🔴 网络连接错误！")
        except requests.exceptions.RequestException as e:
            self.log(f"🔴 请求发生异常！\n{e}")
        return False

    def login(self, account):
        result = self.xhr(
            {
                "method": "POST",
                "url": f"https://api-user.huami.com/registrations/{self.huami['userName']}/tokens",
                "headers": self.headers,
                "data": {
                    "client_id": "HuaMi",
                    "country_code": "CN",
                    "json_response": True,
                    "name": self.huami["userName"],
                    "password": account[1],
                    "redirect_uri": "https://s3-us-west-2.amazonaws.com/hm-registration/successsignin.html",
                    "state": "REDIRECTION",
                    "token": "access",
                },
            },
        )
        if result and self.isJSON(result):
            res = json.loads(result)
            if "access" in res:
                self.huami["token"] = res["access"]
                self.log(f"🟢 「{account[0]}」获取 AccessToken 成功！")
            else:
                self.log(f"🟡 「{account[0]}」用户名或密码错误！\n{result}")
                return False
        else:
            return False

        result = self.xhr(
            {
                "method": "POST",
                "url": f"https://account.huami.com/v2/client/login",
                "headers": self.headers,
                "data": {
                    "app_name": "com.xiaomi.hm.health",
                    "country_code": "CN",
                    "code": self.huami["token"],
                    "device_id": "02:00:00:00:00:00",
                    "device_model": "android_phone",
                    "app_version": "6.12.0",
                    "grant_type": "access_token",
                    "allow_registration": False,
                    "source": "com.xiaomi.hm.health",
                    "third_name": self.huami["thirdName"],
                },
            },
        )
        if result and self.isJSON(result):
            res = json.loads(result)
            if "token_info" in res:
                self.tokenInfo = {
                    "id": res["token_info"]["user_id"],
                    "app": res["token_info"]["app_token"],
                    "login": res["token_info"]["login_token"],
                }
                self.log(f"🟢 「{account[0]}」获取 UserInfo 成功！")
                return True
            else:
                self.log(f"🔴 「{account[0]}」获取 UserInfo 失败！\n{result}")
                return False
        return False

    def renew(self, account):
        result = self.xhr(
            {
                "method": "GET",
                "url": f"https://account-cn.huami.com/v1/client/renew_login_token?login_token={account[2]}",
                "headers": self.headers,
            },
        )
        if result and self.isJSON(result):
            res = json.loads(result)
            if "token_info" in res:
                self.huami["token"] = res["token_info"]["login_token"]
                self.log(f"🟢 「{account[0]}」获取 LoginToken 成功！")
            else:
                self.log(f"🔴 「{account[0]}」获取 LoginToken 失败！\n{result}")
                return False
        else:
            return False

        result = self.xhr(
            {
                "method": "GET",
                "url": f"https://account-cn.huami.com/v1/client/app_tokens?login_token={self.huami['token']}",
                "headers": self.headers,
            },
        )
        if result and self.isJSON(result):
            res = json.loads(result)
            if "token_info" in res:
                self.tokenInfo = {
                    "id": res["token_info"]["user_id"],
                    "app": res["token_info"]["app_token"],
                    "login": self.huami["token"],
                }
                self.log(f"🟢 「{account[0]}」获取 AppToken 成功！")
                return True
            else:
                self.log(f"🔴 「{account[0]}」获取 AppToken 失败！\n{result}")
                return False
        return False

    def submit(self, account):
        self.todaySteps = 0
        headers = {**self.headers, "apptoken": self.tokenInfo["app"]}
        todaySteps = random.randint(STEPS_MIN, STEPS_MAX)
        dataJSON = {
            "date": self.getDatetime(only=True),
            "data_hr": "/v7+" * 480,
            "data": [
                {
                    "start": 0,
                    "stop": 1439,
                    "value": "AU" * 1440 * 2,
                    "tz": 32,
                    "did": DEVICE_ID,
                    "src": 24,
                }
            ],
            "summary": json.dumps(
                {
                    "v": 6,
                    "stp": {
                        "ttl": todaySteps,
                        "dis": int(todaySteps * 0.7),
                        "cal": int(todaySteps / 25),
                        "wk": int(todaySteps / 120),
                    },
                    "goal": 8000,
                }
            ),
            "source": 24,
            "type": 0,
        }
        result = self.xhr(
            {
                "method": "POST",
                "url": f"https://api-mifit-cn.huami.com/v1/data/band_data.json?t={self.getTimestamp()}",
                "headers": headers,
                "data": {
                    "userid": self.tokenInfo["id"],
                    "device_type": 0,
                    "last_source": 24,
                    "last_deviceid": DEVICE_ID,
                    "enableMultiDevice": 1,
                    "last_sync_data_time": self.getTimestamp(10),
                    "data_json": json.dumps([dataJSON]),
                },
            },
        )
        if result and self.isJSON(result):
            res = json.loads(result)
            if "code" in res:
                if res["code"] == 1:
                    self.todaySteps = todaySteps
                    self.log(f"🟣 「{account[0]}」步数数据提交完成！\n{result}")
                    return True
            else:
                self.log(f"🔴 「{account[0]}」步数数据提交失败！\n{result}")
        return False

    def send(self, message):
        datetimeChina = self.getDatetime()
        webhook = [
            {
                "name": "企业微信",
                "url": f"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={WECHAT_KEY}",
                "key": True if WECHAT_KEY else False,
                "msg": {
                    "msgtype": "markdown_v2",
                    "markdown_v2": {
                        "content": f"> {datetimeChina}\n\n ## {self.script['name']}\n {message}",
                    },
                },
                "docs": "https://developer.work.weixin.qq.com/document/path/91770",
            },
            {
                "name": "钉钉",
                "url": f"https://oapi.dingtalk.com/robot/send?access_token={DING_KEY}",
                "key": True if WECHAT_KEY else False,
                "msg": {
                    "msgtype": "markdown",
                    "markdown": {
                        "title": self.script["name"],
                        "text": f"> {datetimeChina}\n ### {self.script['name']}\n {message}",
                    },
                },
                "docs": "https://open.dingtalk.com/document/orgapp/custom-robots-send-group-messages",
            },
            {
                "name": "飞书",
                "url": f"https://open.feishu.cn/open-apis/bot/v2/hook/{FEISHU_KEY}",
                "key": True if WECHAT_KEY else False,
                "msg": {
                    "msg_type": "interactive",
                    "card": {
                        "schema": "2.0",
                        "header": {
                            "title": {"tag": "plain_text", "content": self.script["name"]},
                            "template": "orange",
                        },
                        "body": {
                            "elements": [
                                {
                                    "tag": "markdown",
                                    "text_align": "center",
                                    "content": f"#### {datetimeChina}\n {message}",
                                }
                            ]
                        },
                    },
                },
                "docs": "https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot",
            },
            {
                "name": "PushMe",
                "url": f"https://push.i-i.me/?push_key={PUSHME_KEY}",
                "key": True if WECHAT_KEY else False,
                "msg": {
                    "type": "markdown",
                    "title": self.script["name"],
                    "content": f"\n {message}",
                },
                "docs": "https://push.i-i.me/docs/index",
            },
        ]
        if not "\u2728" in self.currentText:
            return
        for i in webhook:
            if i["key"]:
                result = self.xhr(
                    {
                        "method": "POST",
                        "url": i["url"],
                        "headers": {
                            "Content-Type": "application/json; charset=UTF-8",
                        },
                        "data": json.dumps(i["msg"]).encode(encoding="utf-8"),
                    }
                )
                if result:
                    self.log(f"🟣 「{i['name']}」消息推送完成\n{result}")
                else:
                    self.log(f"🔴 「{i['name']}」消息推送失败\n{result}")

    def main(self):
        self.initCheck(self.currentDocs)
        self.accounts = self.readData()
        accounts = self.mergeArray(USER_DATA, self.accounts)
        if not self.script:
            sys.exit(1)
        for index, account in enumerate(accounts, 1):
            total = len(accounts)
            self.log(f"🔵 开始处理第 {index}/{total} 个账号「{account[0]}」")
            tokenInfo = ""
            self.checkAgain()
            account.insert(3, 0)
            if "@" in account[0]:
                self.huami["userName"] = account[0]
            else:
                self.huami["userName"] = f"+86{account[0]}"
                self.huami["thirdName"] = "huami_phone"
            if not account[2]:
                tokenInfo = self.login(account)
            else:
                tokenInfo = self.renew(account)
                if not tokenInfo:
                    tokenInfo = self.login(account)
            if tokenInfo:
                self.accounts = self.updateArray(self.accounts, [[account[0], self.tokenInfo["login"], self.getTimestamp()]])
                self.saveData(self.accounts)
                self.log(f"🟣 「{account[0]}」数据写入 JSON 文件完成！")
                self.submit(account)
            account[3] = self.todaySteps
            if index < total:
                self.log(f"🔵 「{account[0]}」完成，等待 {self.spanTime} 秒后继续...\n")
                self.wait(self.spanTime - 3)
            self.wait(3)
        sevenDaysAgo = self.getTimestamp() - 7 * 24 * 60 * 60 * 1000
        dataCheck = self.accounts
        self.accounts = [item for item in self.accounts if item[2] >= sevenDaysAgo]
        if len(dataCheck) > 0 and self.accounts != dataCheck:
            self.saveData(self.accounts)
            self.log("🟣 JSON 文件过期数据清理完成！")
        dataLog = "".join(f"|{account[0]}|{account[3]}|\n" for account in accounts)
        if not accounts:
            dataLog = "**EMPTY**\n"
            self.log("🟡 请先输入账号密码，注意格式！")
        elif not dataLog:
            dataLog = "**ERROR**\n"
            self.log("🔴 未知错误，具体请查看日志！")
        else:
            dataLog = f"|账号|步数|\n|:---:|:---:|\n{dataLog}"
        dataLog = f"> {self.currentText}\n\n \n{dataLog}" if not self.isOK else dataLog
        dataLog = f"---\n {dataLog}\n ---\n **[Version {self.script['version']}]({self.currentDocs})**\n"
        self.send(dataLog)
        self.log("🟣 所有任务处理完成，具体请查看日志！")


if __name__ == "__main__":
    FuckS = FuckM()
    FuckS.main()
