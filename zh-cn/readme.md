# HamsterBase

HamsterBase 是一款自部署的离线网页知识库管理应用，可针对页面进行高亮和批注，重视隐私性和安全性。

## 在线 Demo

https://hamsterbase.onrender.com

## Docker 部署 (仅需 5 秒)

最新版本 : 0.1.0

```bash
docker run --rm --name hamsterbase --publish 3001:3001 --volume ~/.hamsterbase/data:/app/data hamsterbase/hamsterbase:0.1.0
```

## 特色

- 统一存储、管理、预览 [MHTML](https://zh.wikipedia.org/zh-cn/MHTML) 和 [Webarchive](https://en.wikipedia.org/wiki/Webarchive) 文档。
- 可对页面进行高亮、批注并且可溯源批注内容。
- 不依赖任何服务端，所有数据都在本地。

## 收费模式

1. 测试期间完全免费。
1. 单次购买解锁**当前**全部功能 + 未来一年的更新的功能，过期后原有功能照常使用。 如果要想使用后续更新的功能，可以以 4 折的价格续订。
1. 按照账户收费、不限制激活的设备数量。
1. 价格低于 Pocket Premium 一年订阅。
