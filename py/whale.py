import requests
import time
import random


# 邀请码
CODE = ['abc','def']
# 邀请次数
times = 20

def invite(object):
    Phone_name = [ "oppo-pedm00", "oppo-peem00", "oppo-peam00", "oppo-rmx3373", "oppo-rmx3365", "oppo-rmx3321", "oppo-rmx3115", "oppo-rmx2171", "oppo-rmx2081", "oppo-rmx1971",
    "vivo-v2048a", "vivo-v2072a", "vivo-v2080a", "vivo-v2031ea", "vivo-v2055a", "vivo-v2143a", "vivo-v2178a", "vivo-v2197a", "vivo-v2243a", "vivo-v2299a",
    "huawei-tet-an00", "huawei-ana-al00", "huawei-ang-an00", "huawei-brq-an00", "huawei-jsc-an00", "huawei-nce-al00", "huawei-nch-al00", "huawei-nof-al00", "huawei-nov-al00", "huawei-peg-tl10",
    "xiaomi-mi 10s", "xiaomi-redmi k40 pro+", "xiaomi-mi 11", "xiaomi-mi 6", "xiaomi-redmi note 7", "xiaomi-mi 8", "xiaomi-mi 9", "xiaomi-mi 10", "xiaomi-mi 12", "xiaomi-mi 12 pro",
    "samsung-sm-g9910", "samsung-sm-g9960", "samsung-sm-w2021", "samsung-sm-f7070", "samsung-sm-c7000", "samsung-galaxy-s22", "samsung-galaxy-s23", "samsung-galaxy-z-fold4", "samsung-galaxy-note20", "samsung-galaxy-a54"]
    Phone = random.choice(Phone_name)
    email = "".join(random.choice("1234567890") for i in range(10))
    xx = "".join(random.choice("ABCDEFGHIJKLMNOPQRSTUVWXYZ") for i in range(4))
    email = email + "%40" + xx + ".com"
    data = ("passwd=e10adc3949ba59abbe56e057f20f883e&email=" + email + "&invite_code=" + object)
    t = str(int(round(time.time() * 1000)))
    id = "".join(random.choice("123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ") for i in range(32))
    url = (
        "https://sm01.googls.net/account/register?" \
        "platform=2&api_version=14&" \
        "app_version=1.44&lang=zh&_key=&" \
        "market_id=1000&" \
        "pkg=com.bjchuhai&" \
        "device_id=rk_" + id + "&" \
        "model= " + Phone + "&" \
        "sys_version=7.1.2&" \
        "ts=" + t + "&" \
        "sub_pkg=com.bjchuhai&" \
        "version_code=44"
    )
    header = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": "0",
        "Host": "sm01.googls.net",
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.5.0"
    }
    requests.post(url=url, data=data, headers=header)

if __name__ == "__main__":
    for i in range(1, times + 1):
        for j in CODE:
            invite(j)
            print(j + "已邀请{}个人".format(i))
        time.sleep(random.randint(1,5))