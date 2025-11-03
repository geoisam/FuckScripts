#define MyAppName "360压缩"
#define MyAppVersion "4.0.0.1630"
#define MyAppPublisher "geoisam@qq.com"
#define MyAppURL "https://geoisam.github.io"
#define MyAppIcon "D:\360\360zip.ico"
#define MyAppTopLogo ""
#define MyAppLeftLogo ""
#define MyAppExeName "360zip.exe"
#define MyAppUnExeName "Uninstaller.exe"
#define MyAppPackage "D:\360\360zip"
#define MyAppOutputDir  "D:\360"
#define AppIdGuid "{FUCK1069-2002-7869-0129-757GEOI6SAM1}"


[Setup]
//应用ID
AppId={{#AppIdGuid}
//应用名称
AppName={#MyAppName}
//应用版本
AppVersion={#MyAppVersion}
VersionInfoVersion={#MyAppVersion}
//应用版本名
AppVerName={#MyAppName} {#MyAppVersion}
//发布者
AppPublisher={#MyAppPublisher}
VersionInfoCompany=You
VersionInfoCopyright=You
VersionInfoDescription={#MyAppPublisher}
//帮助链接
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
//帮助文档
AppReadmeFile=""
//默认安装路径
DefaultDirName={#MyAppPackage}
//隐藏安装路径页面
DisableDirPage=no
//默认菜单组名称
DefaultGroupName={#MyAppName}
//允许用户不创建开始菜单
AllowNoIcons=yes
//隐藏安装程序组页面
DisableProgramGroupPage=no
//左边位图LOGO图164x314
WizardImageFile={#MyAppLeftLogo}
//右上角LOGO图58x58
WizardSmallImageFile={#MyAppTopLogo}
//输出生成文件
Output=yes
//生成文件目录
OutputDir={#MyAppOutputDir}
//生成文件名称
OutputBaseFilename=360zip
//更改关联文件
ChangesAssociations=yes
//更改环境变量
ChangesEnvironment=no
//固实压缩文件
SolidCompression=yes
//允许在安装期间取消操作
AllowCancelDuringInstall=yes
//允许调整根目录
AllowRootDirectory=yes
//允许使用 UNC 路径
AllowUNCPath=yes
//语言检测方法
LanguageDetectionMethod=uilanguage
//最低可运行Windows 版本
MinVersion=6.1
//可运行Windows 版本
OnlyBelowVersion=0
//安装程序权限
PrivilegesRequired=admin
//显示语言选择
ShowLanguageDialog=no
//包含卸载支持程序
Uninstallable=no
//卸载显示图标
UninstallDisplayIcon={app}\{#MyAppExeName}
//卸载显示名称
UninstallDisplayName={#MyAppName}
//卸载重启计算机
UninstallRestartComputer=no
//显示应用版权
AppCopyright=""
//安装程序图标
SetupIconFile={#MyAppIcon}
//自由调整窗口
WizardResizable=yes
//安装程序风格
WizardStyle=modern


[Messages]
BeveledLabel=by: geoisam@qq.com


[Languages]
Name: "chs"; MessagesFile: "compiler:Languages\Chinese.isl"
Name: "eng"; MessagesFile: "compiler:Languages\English.isl"


[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"


[Files]
Source: "{#MyAppPackage}\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion
Source: "{#MyAppPackage}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs


[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{group}\{cm:UninstallProgram,{#MyAppName}}"; Filename: "{app}\{#MyAppUnExeName}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon


[Registry]
Root: HKCU; Subkey: "Software\360zip"; ValueType: none; Flags: uninsdeletekeyifempty
Root: HKCU; Subkey: "Software\360zip\InstallPath"; ValueType: string; ValueName: ""; ValueData: "{app}"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: none; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "DisplayName"; ValueData: "{#MyAppName}"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "DisplayIcon"; ValueData: "{app}\{#MyAppExeName}"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "UninstallString"; ValueData: "{app}\{#MyAppUnExeName}"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "DisplayVersion"; ValueData: "{#MyAppVersion}"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "URLInfoAbout"; ValueData: "http://yasuo.360.cn"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "Publisher"; ValueData: "You"; Flags: uninsdeletekeyifempty
Root: HKLM; Subkey: "SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{#MyAppName}"; ValueType: string; ValueName: "InstallLocation"; ValueData: "{app}"; Flags: uninsdeletekeyifempty


[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent

[Code]
var
    myLabel:TNewStaticText;

procedure InitializeWizard();

begin
//WizardForm.BeveledLabel.Enabled:= true;
//WizardForm.BeveledLabel.Font.Color := clMaroon;
//字体设置，其中fsBold=粗体，fsltalic=斜体，fsUnderline=下划线，fsStrikeOut=居中在线上
    WizardForm.BeveledLabel.Font.Style := WizardForm.BeveledLabel.Font.Style+[fsBold];
    WizardForm.BeveledLabel.Left := 45;
    WizardForm.BeveledLabel.Top := 355;
end;