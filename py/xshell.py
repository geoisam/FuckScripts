import sys

okey = b"\x85\xC0\x75\x5D\x50\x6A"
nkey = b"\x85\xC0\x74\x5D\x50\x6A"
xp = "D:\\Softwares\\NetSarang\\Xftp 8\\Xftp.exe"

def run(path):
    print("【INFO】 开始检查文件是否为Xshell.exe 或 Xftp.exe")
    if path.endswith("Xshell.exe"):
        print("【INFO】 文件为Xshell.exe")
    elif path.endswith("Xftp.exe"):
        print("【INFO】 文件为Xftp.exe")
    else:
        print("【ERROR】 文件不是XShell.exe 或 XFtp.exe")
        exit(1)
    # 保留备份文件
    print("【INFO】 正在备份文件")
    backup_path = path + ".bak"
    try:
        with open(path, 'rb') as f:
            content = f.read()
        with open(backup_path, 'wb') as f:
            f.write(content)
    except Exception as e:
        print(e)
        print("【ERROR】 备份文件失败")
        exit(1)

    print(f"【INFO】 正在修改文件：{path}")
    with open(path, 'rb') as f:
        content = f.read()
        count = content.count(okey)
        if count == 1:
            print("【INFO】 找到相应特征，执行修改")
        else:
            print("【ERROR】 未找到相应特征，文件可能被修改或特征过期，修改失败")
            exit(1)
    modified_content = content.replace(okey, nkey)
    with open(path, 'wb') as f:
        f.write(modified_content)
    print("【INFO】 修改完成")


if __name__ == "__main__":
    run(xp)
