# HamsterBase

[Online Demo](https://hamsterbase.onrender.com) | [EULA](https://hamsterbase.com/redirect?to=eula) ｜ [Privacy policy](https://hamsterbase.com/redirect?to=privacy) ｜ [Credits](https://hamsterbase.com/redirect?to=credits) | [SDK](https://www.npmjs.com/package/@hamsterbase/sdk)

![](https://raw.githubusercontent.com/hamsterbase/hamsterbase/main/home.png)

HamsterBase is a self-hosted, local-first web archive application. You can easy highlight and annotate pages, valuing privacy and security.

## Features

- Store, manage, and preview HTML, [MHTML](https://en.wikipedia.org/wiki/MHTML) and [Webarchive](https://en.wikipedia.org/wiki/Webarchive) documents.
- Webpages can be highlighted, annotated and annotated retroactively.
- Create custom views to filter webpages.
- How to turn views into RSS feed.
- No dependency on any server, all data is local first.
- Full Text Search
- Open source SDK
- Dark Mode

## Docker deployment (only 5 seconds)

Latest stable Version: 0.5.1-stable, Latest beta Version: 0.6.0-beta

```bash
docker run \
 -d --rm \
 --name hamsterbase \
 --publish 31001:31001 \
 --volume ~/.hamsterbase/data:/app/data \
 hamsterbase/hamsterbase:stable \
 --port 31001
 --password pwd
```

## Build from source

1. Clone [repository](https://github.com/hamsterbase/hamsterbase)

   ```bash
   git clone --depth 1 https://github.com/hamsterbase/hamsterbase.git
   ```

2. Install dependencies

   ```bash
   cd release/hamsterbase-0.5.1-stable # stable version
   cd release/hamsterbase-0.6.0-beta   # beta version

   npm install
   ```

3. Download [sqlite fts extension](https://github.com/wangfenjin/simple/releases), Unzip the file and place it in `release/hamsterbase-{version}/extra/simple`.
4. Run Script `node main.js`. (require nodejs 16)
