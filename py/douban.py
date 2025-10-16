# -*- coding: UTF-8 -*-

# pip install wheel lxml
import os, requests
from lxml import etree


# 保存文件夹
FILE_PATH = "D:/DouBan Movie Top 250"


def is_path():
    if not os.path.exists(FILE_PATH):
        print(f"不存在保存文件夹，将自动创建...\n")
        os.mkdir(FILE_PATH)
        if os.path.exists(FILE_PATH):
            print(f"保存文件夹创建成功，开始下载...\n")
    else:
        print(f"保存文件夹已创建，开始下载...\n")


def main():
    is_path()
    i = 0
    page = 0
    while i < 11:
        url = "https://movie.douban.com/top250?start=" + str(page) + "&filter="
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"}
        response = requests.get(url=url, headers=headers)
        response.encoding = "utf-8"
        tree = etree.HTML(response.text)
        dy_list = tree.xpath('//ol[@class="grid_view"]/li')
        for li in dy_list:
            img_num = li.xpath(".//em/text()")[0]
            img_name = li.xpath(".//img/@alt")[0]
            img_src = li.xpath(".//img/@src")[0]
            img_data = requests.get(url=img_src, headers=headers).content
            img_title = img_num + "." + img_name + ".jpg"
            img_path = f"{FILE_PATH}/{img_title}"
            with open(img_path, "wb") as dy_img:
                dy_img.write(img_data)
                print(f"{img_title} Success")
        page = (i + 1) * 25
        i += 1
    print(f"\n豆瓣电影 Top 250 Completed\n")


if __name__ == "__main__":
    main()