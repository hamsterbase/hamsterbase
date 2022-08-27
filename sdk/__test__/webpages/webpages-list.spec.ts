import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HamsterBase } from '../../hamsterbase';
import { ListOptions, WebsiteExt } from '../../webpages/types';
import { createTestServer } from '../server';
import { FixturesId, Fixtures, getBase64Fixture, getPort, resolveRoot } from '../utils';
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
      content: await getBase64Fixture(Fixtures.HamsterBaseDocument_01_mht),
      ext: WebsiteExt.mhtml,
    });
    await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue_02_webarchive),
      ext: WebsiteExt.webarchive,
    });
    await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubHome_03_html),
      ext: WebsiteExt.html,
    });
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('001: should support get all pages', async () => {
    const result = await hamsterbase.webpages.list();
    expect(result.webpages.map((p) => ({ ...p, firstAddTime: null, createTime: null }))).toEqual([
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

  async function expectList(idList: string[], options: ListOptions) {
    const result = await hamsterbase.webpages.list(options);
    expect(result.webpages.map((p) => p.id)).toEqual(idList);
  }

  it('002: should support filter by liked status', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { liked: true });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { liked: true });
    await expectList([FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseGithubIssue_02_webarchive], { liked: false });
  });

  it('003: should support filter by read status', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { read: true });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { read: true });
    await expectList([FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseGithubIssue_02_webarchive], { read: false });
  });

  it('004: should support filter by host', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { link: 'https://z.com' });
    await hamsterbase.webpages.update(FixturesId.HamsterBaseGithubHome_03_html, { link: 'https://test.z.com' });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { host: 'z.com' });

    await expectList([FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseDocument_01_mht], { host: ['test.z.com', 'z.com'] });
    await expectList([FixturesId.HamsterBaseGithubIssue_02_webarchive], { host: ['github.com'] });
  });

  it('005: should support filter by ext', async () => {
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { ext: WebsiteExt.mhtml });
    await expectList([FixturesId.HamsterBaseGithubHome_03_html], { ext: WebsiteExt.html });
    await expectList([FixturesId.HamsterBaseGithubIssue_02_webarchive], { ext: WebsiteExt.webarchive });

    await expectList(
      [FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseDocument_01_mht],
      { ext: [WebsiteExt.webarchive, WebsiteExt.html, WebsiteExt.mhtml] }
    );
  });

  it('006: should support sort', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { title: 'bb' });
    await hamsterbase.webpages.update(FixturesId.HamsterBaseGithubIssue_02_webarchive, { title: 'aa' });
    await hamsterbase.webpages.update(FixturesId.HamsterBaseGithubHome_03_html, { title: 'cc' });

    await expectList(
      [FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubHome_03_html],
      { sort: 'title_asc' }
    );
    await expectList(
      [FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubIssue_02_webarchive],
      { sort: 'title_desc' }
    );

    await expectList(
      [FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseGithubHome_03_html],
      { sort: 'first_add_time_asc' }
    );

    await expectList(
      [FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseDocument_01_mht],
      { sort: 'first_add_time_desc' }
    );
  });

  it('007: should support per_page and page', async () => {
    await expectList([FixturesId.HamsterBaseGithubHome_03_html], { per_page: 1 });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { per_page: 1, page: 3 });

    await expectList([FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseGithubIssue_02_webarchive], { per_page: 2 });

    await expectList([FixturesId.HamsterBaseDocument_01_mht], { per_page: 2, page: 2 });
  });
});
