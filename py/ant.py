import requests
import time
import json
from base64 import b64decode
from hashlib import sha256, md5
from Crypto.Cipher import AES
from Crypto.Random import get_random_bytes

# 邀请码
CODE = ["abc", "def"]


class Ant(object):
    def __init__(self, aff):
        self.aff = aff
        self.oauth_id = ""
        self.timestamp = ""
        self.url = "http://antapi3.ymjxopa.com/api.php"
        self.headers = {}
        self.key = "fjeldkb4438b1eb36b7e244b37dhg03j"
        self.hexkey = "B496F831128E4FE1DE33F4B7A2C46E0DD4772524A4826FE4486FCC07E3E2B87F"
        self.b64key = "tJb4MRKOT+HeM/S3osRuDdR3JSSkgm/kSG/MB+PiuH8="

    @staticmethod
    def get_timestamp(long=10):
        return str(time.time_ns())[:long]

    def decrypt(self, data: str):
        ct_iv = bytes.fromhex(data[:32])
        ct_bytes = bytes.fromhex(data[32:])
        ciper = AES.new(b64decode(self.b64key), AES.MODE_CFB, iv=ct_iv, segment_size=128)
        plaintext = ciper.decrypt(ct_bytes)
        return plaintext.decode().upper()

    def encrypt(self, data: str):
        cipher = AES.new(b64decode(self.b64key), AES.MODE_CFB, segment_size=128)
        ct_bytes = cipher.iv + cipher.encrypt(data.encode())
        return ct_bytes.hex().upper()

    def get_sign(self):
        template = "appId=android&appVersion=2.1.8&data={}&timestamp={}2d5f22520633cfd5c44bacc1634a93f2".format(self.encrypt_data, self.timestamp)
        sha = sha256()
        sha.update(template.encode())
        res = sha.hexdigest()
        m = md5()
        m.update(res.encode())
        res = m.hexdigest()
        return res

    def request(self, d):
        plaintext = {"version": "2.6.5", "app_type": "ss_proxy", "language": 0, "bundleId": "com.android.tnaant"}
        d.update(plaintext)
        self.timestamp = self.get_timestamp(10)
        self.encrypt_data = self.encrypt(json.dumps(d, separators=(",", ":")))
        sign = self.get_sign()
        data = {"appId": "android", "appVersion": "2.1.8", "timestamp": self.timestamp, "data": self.encrypt_data, "sign": sign}
        res = requests.post(url=self.url, data=data, headers=self.headers)
        resj = res.json()
        res = self.decrypt(resj.get("data"))
        print(res)
        return res

    def get_user(self):
        m = md5()
        m.update(get_random_bytes(16))
        oauth_id = m.hexdigest()

        data = {"oauth_id": oauth_id, "oauth_type": "android", "mod": "user", "code": "up_sign"}
        self.request(data)
        self.oauth_id = oauth_id
        print(oauth_id)

    def invite(self):
        self.get_user()
        data = {"oauth_id": self.oauth_id, "oauth_type": "android", "aff": self.aff, "mod": "user", "code": "exchangeAFF"}
        self.request(data)


if __name__ == "__main__":
    for i in CODE:
        ant = Ant(i)
        ant.invite()