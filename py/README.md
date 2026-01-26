# 🌈FuckScripts

### \#  **👇👇Python脚本👇👇**

| Name | Type | Status | GitHub | Gitee |
|:---|:---:|:---:|:---:|:---:|
| **华米运动步数修改** | **OAuth** | ✅ | [查看](https://raw.githubusercontent.com/geoisam/FuckScripts/main/py/huami.py) | [查看](https://gitee.com/geoisam/FuckScripts/raw/main/py/huami.py) |
| **Xshell8/Xftp8 <br>免登录修改器** | **Local** | ✅ | [查看](https://raw.githubusercontent.com/geoisam/FuckScripts/main/py/xshell.py) | [查看](https://gitee.com/geoisam/FuckScripts/raw/main/py/xshell.py) |
| **豆瓣电影 Top 250 <br>封面图片下崽器** | **Spider** | ✅ | [查看](https://raw.githubusercontent.com/geoisam/FuckScripts/main/py/douban.py) | [查看](https://gitee.com/geoisam/FuckScripts/raw/main/py/douban.py) |

<br>

> 👇👇**华米运动步数修改**👇👇

- **浏览器后台定时运行脚本**（仅支持 [脚本猫](https://docs.scriptcat.org)）
  - [华米运动步数修改.user.js](https://github.com/geoisam/FuckScripts/blob/main/sc/华米运动步数修改.user.js)
  - 默认 `* * once * *` 即每天 00:00 - 23:59 运行一次

<br>

- 设备ID，实际上随便乱填都行，App里面抓包是 `UUID v4`
  - `"device_id":"02:00:00:00:00:00"`

- 穿戴设备的唯一标识，随便乱填都行，只要数量对得上，也可填你绑定的设备
  - `"deviceId":"88CC5224060006C4"`

<br>

- 有时虽然HTTP状态码是200但实际上却是出错了请参考以下信息

| Error	| Description |
|:---:|:---|
| 0100 |	无效的请求数据(必填数据为空，数据格式不正确等) |
| 0101 |	无效的app_name |
| 0102 |	无效的app_token |
| 0103 |	无效的验证码 |
| 0105 |	无效的login_token |
| 0106 |	三方校验失败 |
| 0107 |	注册失败 |
| 0108 |	互斥登录 |

<br>

- 可以使用 云函数 / 青龙面板 或者 GitHub 私人仓库用 GitHub Actions 实现自动刷步

- **GitHub Actions** 配置如下 `.github/workflows/huami.yml`
  - 如需多（超过5个）账号运行脚本，请设置仓库读写权限，GitHub Actions 自动提交并推送存储 JSON 数据到根目录
  - `0 0 * * *` 即 UTC 时间 0 点，中国时间上午 8 点，但 GitHub Actions 会有延迟，几分钟到几小时不等

```yml
name: huami
 
on:
  workflow_dispatch:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: checkout code
      uses: actions/checkout@v4

    - name: setup python
      uses: actions/setup-python@v5
      with:
        python-version: '3.12'

    - name: install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install requests pycryptodome

    - name: run script
      run: python huami.py

    - name: commit and push changes
      run: |
        git diff --quiet || (
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add data.json
          git commit -m "Update JSON via GitHub Actions"
          git push
        )
```

<br>

### \# 赞赏码（在线乞讨）

<table>
<tr>
<td><a>
<img src="../images/wechat.jpg">
</a></td>
<td><a>
<img src="../images/alipay.jpg">
</a></td>
</tr>
</table>
