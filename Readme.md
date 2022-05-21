# HamsterBase

[EULA](https://hamsterbase.com/docs/legal/eula/000.html) ｜ [Privacy policy](https://hamsterbase.com/docs/legal/privacy/000.html) ｜ [Credits](https://hamsterbase.com/docs/legal/credits.html)

HamsterBase is a self-hosted, local-first webpage knowledge base management application. You can easy highlight and annotate pages, valuing privacy and security.

![Screenshot](https://raw.githubusercontent.com/hamsterbase/hamsterbase/main/home.png)

## Online Demo

https://hamsterbase.onrender.com

## Docker deployment (only 5 seconds)

Latest Version: 0.2.0

```bash
docker run \
 -d --rm \
 --name hamsterbase2 \
 --publish 31001:31001 \
 --volume ~/.hamsterbase/data:/app/data \
 hamsterbase/hamsterbase:0.2.0 \
 --port 31001
```

## Features

- Store, manage, and preview HTML、[MHTML](https://en.wikipedia.org/wiki/MHTML) and [Webarchive](https://en.wikipedia.org/wiki/Webarchive) documents.
- Webpages can be highlighted, annotated and annotated retroactively.
- No dependency on any server, all data is local first.

## Pricing

https://hamsterbase.com/pricing/
