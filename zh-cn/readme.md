# HamsterBase

[用户协议](https://hamsterbase.com/docs/legal/eula/000.html) ｜ [隐私协议](https://hamsterbase.com/docs/legal/privacy/000.html) ｜ [开源项目](https://hamsterbase.com/docs/legal/credits.html)

HamsterBase 是一款自部署的离线网页知识库管理应用，可针对页面进行高亮和批注，重视隐私性和安全性。

![Screenshot](https://raw.githubusercontent.com/hamsterbase/hamsterbase/main/home.png)

## 在线 Demo

https://hamsterbase.onrender.com

## Docker 部署 (仅需 5 秒)

最新版本 : 0.2.0

```bash
docker run \
 -d --rm \
 --name hamsterbase2 \
 --publish 31001:31001 \
 --volume ~/.hamsterbase/data:/app/data \
 hamsterbase/hamsterbase:0.2.0 \
 --port 31001
```

## 特色

- 统一存储、管理、预览 HTML、[MHTML](https://zh.wikipedia.org/zh-cn/MHTML) 和 [Webarchive](https://en.wikipedia.org/wiki/Webarchive) 文档。
- 可对页面进行高亮、批注并且可溯源批注内容。
- 不依赖任何服务端，所有数据都在本地。

## 价格

https://hamsterbase.com/pricing/
