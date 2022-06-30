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
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('001: should get correct property when upload mthml', async () => {
    const result = await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseDocument),
      ext: WebsiteExt.mhtml,
    });
    expect(result).toEqual({
      id: 'bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f',
      title: 'What is HamsterBase | HamsterBase',
      link: 'https://hamsterbase.com/docs/what-is-hamsterbase.html',
    });
  });

  it('002: should get correct property when upload html', async () => {
    const webarchive = await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubHome),
      ext: WebsiteExt.html,
      title: 'HamsterBase Home',
    });
    expect(webarchive).toEqual({
      id: 'd4a1267d1f8a8eeb20d7b4b86a9d91839809e083ceb42366847ed5ed3a6cf254',
      link: 'https://github.com/hamsterbase/hamsterbase',
      title: 'HamsterBase Home',
    });
  });

  it('003: property should not be overridden when a file is uploaded.', async () => {
    const first = await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
      ext: WebsiteExt.webarchive,
    });
    expect(first).toEqual({
      id: 'b03e82c2b622df1f039ecba4910f464becf5600b12425ea3d1f65d4c17d70d8d',
      link: 'https://github.com/hamsterbase/hamsterbase/issues',
      title: 'Issues · hamsterbase/hamsterbase · GitHub',
    });

    const second = await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
      ext: WebsiteExt.webarchive,

      title: 'Issues',
    });
    expect(second).toEqual({
      id: 'b03e82c2b622df1f039ecba4910f464becf5600b12425ea3d1f65d4c17d70d8d',
      link: 'https://github.com/hamsterbase/hamsterbase/issues',
      title: 'Issues · hamsterbase/hamsterbase · GitHub',
    });
  });

  it('004: should get correct property when property is correct and ext is error. should override property when ext change.', async () => {
    const first = await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
      ext: WebsiteExt.html,
      title: 'HamsterBase: Github Issue',
      link: 'https://github.com/hamsterbase',
    });
    expect(first).toEqual({
      id: 'b03e82c2b622df1f039ecba4910f464becf5600b12425ea3d1f65d4c17d70d8d',
      link: 'https://github.com/hamsterbase',
      title: 'HamsterBase: Github Issue',
    });

    const second = await hamsterbase.webpages.create({
      content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
      ext: WebsiteExt.webarchive,
    });
    expect(second).toEqual({
      id: 'b03e82c2b622df1f039ecba4910f464becf5600b12425ea3d1f65d4c17d70d8d',
      link: 'https://github.com/hamsterbase/hamsterbase/issues',
      title: 'Issues · hamsterbase/hamsterbase · GitHub',
    });
  });
  describe('Testing error conditions', () => {
    it('E001: should throw 400 error when content or ext is invalid.', async () => {
      const badRequests = [
        {
          content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
          ext: 'web' as any,
        },
        {
          ext: WebsiteExt.webarchive,
        },
        {
          content: '',
        },
        {
          content: 1,
        },
      ];
      try {
        for (const iterator of badRequests) {
          await hamsterbase.webpages.create(iterator as any);
        }
      } catch (error) {
        expect(error.status).toBe(400);
        expect(error.message).toEqual('content or ext is invalid');
      }
    });

    it('E002: should throw 400 error when link is invalid.', async () => {
      try {
        await hamsterbase.webpages.create({
          content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
          ext: WebsiteExt.webarchive,
          link: 'equinix.com',
        });
      } catch (error) {
        expect(error.status).toBe(400);
        expect(error.message).toEqual('link is invalid. link should start link http://www.example.com.');
      }
    });

    it('E003: should throw E0001 error when content parsing fails.', async () => {
      try {
        await hamsterbase.webpages.create({
          content: await getBase64Fixture(Fixtures.HamsterBaseGithubIssue),
          ext: WebsiteExt.mhtml,
        });
      } catch (error) {
        expect(error.code).toBe('E0001');
        expect(error.message).toBe('parse error: Missing MHTML headers; Line 1');
      }

      try {
        await hamsterbase.webpages.create({
          content: await getBase64Fixture(Fixtures.HamsterBaseDocument),
          ext: WebsiteExt.webarchive,
        });
      } catch (error) {
        expect(error.code).toBe('E0001');
        expect(error.message).toBe(`parse error: Invalid binary plist. Expected 'bplist' at offset 0.`);
      }
    });
  });
});
