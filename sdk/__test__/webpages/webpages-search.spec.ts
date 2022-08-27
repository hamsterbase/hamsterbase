import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HamsterBase } from '../../src/hamsterbase';
import { WebpagesListOptions, WebsiteExt } from '../../src/webpages/types';
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
    const result = await hamsterbase.webpages.search({ q: 'hamsterbase' });
    expect(result.webpages.map((p) => ({ ...p, firstAddTime: null, createTime: null }))).toMatchSnapshot('search result');
  });

  async function expectList(idList: string[], options: WebpagesListOptions) {
    const result = await hamsterbase.webpages.search({ q: 'hamsterbase', ...options });
    expect(result.webpages.map((p) => p.id)).toEqual(idList);
  }

  it('002: should support filter by liked status', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { liked: true });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { liked: true });
    await expectList([FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseGithubHome_03_html], { liked: false });
  });

  it('003: should support filter by read status', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { read: true });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { read: true });
    await expectList([FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseGithubHome_03_html], { read: false });
  });

  it('004: should support filter by host', async () => {
    await hamsterbase.webpages.update(FixturesId.HamsterBaseDocument_01_mht, { link: 'https://z.com' });
    await hamsterbase.webpages.update(FixturesId.HamsterBaseGithubHome_03_html, { link: 'https://test.z.com' });
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { host: 'z.com' });

    await expectList([FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubHome_03_html], { host: ['test.z.com', 'z.com'] });
    await expectList([FixturesId.HamsterBaseGithubIssue_02_webarchive], { host: ['github.com'] });
  });

  it('005: should support filter by ext', async () => {
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { ext: WebsiteExt.mhtml });
    await expectList([FixturesId.HamsterBaseGithubHome_03_html], { ext: WebsiteExt.html });
    await expectList([FixturesId.HamsterBaseGithubIssue_02_webarchive], { ext: WebsiteExt.webarchive });

    await expectList(
      [FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseGithubHome_03_html],
      { ext: [WebsiteExt.webarchive, WebsiteExt.html, WebsiteExt.mhtml] }
    );
  });

  it('007: should support per_page and page', async () => {
    await expectList(
      [FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseGithubHome_03_html],
      { page: 1 }
    );
    await expectList([FixturesId.HamsterBaseDocument_01_mht], { per_page: 1 });
    await expectList([FixturesId.HamsterBaseGithubHome_03_html], { per_page: 1, page: 3 });

    await expectList([FixturesId.HamsterBaseDocument_01_mht, FixturesId.HamsterBaseGithubIssue_02_webarchive], { per_page: 2 });

    await expectList([FixturesId.HamsterBaseGithubHome_03_html], { per_page: 2, page: 2 });
  });
});
