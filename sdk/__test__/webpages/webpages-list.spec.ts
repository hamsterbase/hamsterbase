import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HamsterBase } from '../../hamsterbase';
import { WebsiteExt } from '../../webpages/types';
import { createTestServer } from '../server';
import { Fixtures, getBase64Fixture, getPort, resolveRoot } from '../utils';
require('isomorphic-fetch');

describe('test webpages', () => {
  let hamsterbase: HamsterBase;
  let dispose: () => void;
  let port: number;
  beforeAll(() => {
    port = getPort();
  });

  beforeEach(async () => {
    const server = await createTestServer({
      port,
      database: join(resolveRoot('temp'), `${Math.random()}`),
    });
    hamsterbase = new HamsterBase({
      endpoint: server.endpoint,
      token: server.token,
      requestLib: fetch,
    });
    await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseDocument),
      ext: WebsiteExt.mhtml,
    });
    await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
      ext: WebsiteExt.webarchive,
    });
    await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubHome),
      ext: WebsiteExt.html,
    });
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('001: should get all pages', async () => {
    const result = await hamsterbase.webpages.list();
    expect(result.map((p) => ({ ...p, firstAddTime: null, createTime: null }))).toEqual([
      {
        id: 'd4a1267d1f8a8eeb20d7b4b86a9d91839809e083ceb42366847ed5ed3a6cf254',
        title: 'GitHub - hamsterbase/hamsterbase: self-hosted, local-first web archive application.',
        firstAddTime: null,
        createTime: null,
        ext: 'html',
        liked: false,
        link: 'https://github.com/hamsterbase/hamsterbase',
        read: false,
        size: 846558,
        annotateCount: 0,
      },
      {
        id: 'b03e82c2b622df1f039ecba4910f464becf5600b12425ea3d1f65d4c17d70d8d',
        title: 'Issues · hamsterbase/hamsterbase · GitHub',
        firstAddTime: null,
        ext: 'webarchive',
        createTime: null,
        liked: false,
        link: 'https://github.com/hamsterbase/hamsterbase/issues',
        read: false,
        size: 1785985,
        annotateCount: 0,
      },
      {
        title: 'What is HamsterBase | HamsterBase',
        id: 'bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f',
        firstAddTime: null,
        createTime: null,
        liked: false,
        link: 'https://hamsterbase.com/docs/what-is-hamsterbase.html',
        read: false,
        ext: 'mhtml',
        size: 597054,
        annotateCount: 0,
      },
    ]);
  });
});
