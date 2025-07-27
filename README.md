厦门航空机票日历查询脚本 (XiamenAir Flight Calendar Scraper)
这是一个用于查询厦门航空（XiamenAir）国际机票价格日历的 Python 脚本。
该脚本的核心功能是模拟浏览器行为，处理并生成 API 所需的动态加密请求头，从而成功获取指定航线的价格日历数据。
功能特性
自动刷新Token：自动获取临时的 User-Token 用于后续请求。

动态加密头生成：通过 execjs 执行本地的 JavaScript 文件 (xiamen.js)，模拟前端加密逻辑，生成 Crypto-Chars, Crypto-Random, Device-Id, 和 X-Tingyun 等关键请求头。

模拟API请求：构建完整的请求，向厦门航空的机票日历API发送查询并获取数据。
代码清晰：将 Python 逻辑和 JavaScript 加密逻辑解耦，分别存放于 main.py 和 xiamen.js 中。

环境要求
在运行此脚本之前，请确保你已安装以下环境：
Python 3: 下载地址

Node.js: 下载地址 (脚本需要一个JavaScript运行环境, Node.js 是 execjs 库最常用的后端)

npm: 通常随 Node.js 一起安装，用于安装JavaScript依赖包。

安装与配置
克隆或下载项目
将本项目文件下载到你的本地计算机。
创建 requirements.txt 文件

在项目根目录创建一个名为 requirements.txt 的文件，并填入以下内容：

Generated txt
requests
PyExecJS
Use code with caution.
使用谨慎使用代码。
Txt
安装 Python 依赖库
打开终端（或命令提示符），进入项目目录，然后运行以下命令：
Generated bash产生的狂欢
pip install -r requirements.txt
Use code with caution.
使用谨慎使用代码。
Bashbash
安装 JavaScript 依赖库
该项目的 JavaScript 部分依赖 crypto-js 库。在项目根目录下，运行以下命令进行安装：

Generated bash产生的狂欢
npm install crypto-js
Use code with caution.
使用谨慎使用代码。
Bashbash
执行成功后，你会在项目目录下看到一个名为 node_modules 的文件夹。
如何运行
所有依赖都安装完毕后，直接运行主 Python 脚本即可：
Generated bash产生的狂欢
python main.py
Use code with caution.
使用谨慎使用代码。
Bashbash
脚本会依次输出：
刷新获取到的 token。

通过 xiamen.js 生成的加密参数字典。

从厦门航空API返回的机票日历查询结果（JSON格式）。

使用谨慎使用代码。
工作流程解析
脚本的执行流程如下：
获取 User-Token:
脚本首先向 https://int-et.xiamenair.com/tRetailAPISolution/sso/userToken 发送一个 POST 请求，从响应中获取一个临时的身份令牌 token。

生成加密请求头:
脚本读取 xiamen.js 文件的内容。

使用 execjs 库编译并加载这个 JavaScript 代码。

调用 JS 代码中暴露的全局函数 c()。

c() 函数执行一系列复杂的加密操作（这些操作模仿了官网前端的逻辑），最终返回一个包含 Crypto-Chars, Crypto-Random, Device-Id 和 X-Tingyun 的字典。

构建最终请求:
脚本将第一步获取的 User-Token 和第二步生成的加密参数与其它固定的HTTP头信息组合，形成一个完整的请求头 headers。
定义需要查询的航班信息，如出发地、目的地、日期、乘客数量等，作为 json_data。
查询机票日历:
脚本携带完整的 headers 和 json_data，向 https://int-et.xiamenair.com/tRetailAPISolution/flight/calendar 发送最终的 POST 请求。

输出结果:
打印从API收到的响应内容。如果所有步骤都正确，这将是包含价格信息的JSON数据。
注意事项
API 变动: 网站的API和加密逻辑随时可能更新。如果脚本失效，很可能是因为 xiamen.js 中的加密逻辑已经过时，需要重新进行逆向分析。
网络问题: 请确保你的网络环境可以正常访问 xiamenair.com。
