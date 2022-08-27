# HamsterBase

[Online Demo](https://hamsterbase.onrender.com) | [用户协议](https://hamsterbase.com/zh/docs/legal/eula/000.html) ｜ [隐私协议](https://hamsterbase.com/zh/docs/legal/privacy/000.html) ｜ [三方库](https://hamsterbase.com/zh/docs/legal/credits.html)

![](https://raw.githubusercontent.com/hamsterbase/hamsterbase/main/home.png)

HamsterBase 是一个本地优先的网页存档应用。您可以轻松地高亮网页，我们重视隐私和安全。

## 功能

- 储存、管理和预览 HTML, [MHTML](https://en.wikipedia.org/wiki/MHTML) and [Webarchive](https://en.wikipedia.org/wiki/Webarchive) 格式的文档。
- 对保存的页面进行高亮、批注。
- 创建自定义筛选，过滤出需要的页面。
- 通过 RSS 订阅输出筛选后页面。
- 不依赖服务，所有功能都是离线的。
- 全文搜索
- 开源 SDK
- 暗黑模式

## Docker 部署 (只需 5 秒)

Latest Version: 0.3.0

```bash
docker run \
 -d --rm \
 --name hamsterbase \
 --publish 31001:31001 \
 --volume ~/.hamsterbase/data:/app/data \
 hamsterbase/hamsterbase:0.3.0 \
 --port 31001
```

## 从源码构建

1. 克隆 [仓库](https://github.com/hamsterbase/hamsterbase)
2. 安装以来

   ```bash
   cd src
   npm install
   ```

3. 下载 [sqlite fts 插件](https://github.com/wangfenjin/simple/releases), 把文件解压到 simple 文件夹
4. 运行脚本 `node main.js`
