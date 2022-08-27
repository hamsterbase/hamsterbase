# @hamsterbase/sdk

sdk of [hamsterbase](https://hamsterbase.com/developer)

## Install

```
npm i @hamsterbase/sdk --save
```

## How to use

### node

```ts
require('isomorphic-fetch');
const { HamsterBase } = require('@hamsterbase/sdk');

const client = new HamsterBase({
  token: 'token',
  endpoint: 'endpoint',
});

client.webpages.list().then((res) => {
  console.log(`fetch ${res.webpages.length} webpages`);
});
```
