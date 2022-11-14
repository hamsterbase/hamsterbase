import { join } from 'path';
import { afterEach, beforeAll, beforeEach, it, describe, expect } from 'vitest';
import { createTestServer } from '../server';
import { Fixtures, FixturesId, getPort, getTextFixture, resolveRoot } from '../utils';
require('isomorphic-fetch');

//https://github.com/gildas-lormeau/SingleFile/blob/64176119d50408d3fc37c21230a1c2e391f6418c/src/core/bg/downloads.js#L228
describe('test singlefile api', () => {
  let dispose: () => void;
  let token = '';

  let port: number;
  beforeAll(() => {
    port = getPort();
  });

  beforeEach(async () => {
    const server = await createTestServer({
      port,
      database: join(resolveRoot('temp'), `${Math.random()}`),
    });
    token = server.token;
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('test put singlefile', async () => {
    console.log('111', 'Basic ' + btoa('hamsterbase' + ':' + token));
    const res = await fetch(`http://127.0.0.1:${port}/external/api/singlefile/test.html`, {
      headers: {
        authorization: 'Basic ' + btoa('hamsterbase' + ':' + token),
      },
      method: 'PUT',
      body: await getTextFixture(Fixtures.HamsterBaseGithubHome_03_html),
    });
    expect((await res.json()).data.id).toBe(FixturesId.HamsterBaseGithubHome_03_html);
  });
});
