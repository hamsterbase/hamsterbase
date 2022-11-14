import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HttpError } from '../../src/error';
import { HamsterBase } from '../../src/hamsterbase';
import { WebsiteExt } from '../../src/webpages/types';
import { createTestServer } from '../server';
import { Fixtures, getBase64Fixture, getPort, resolveRoot } from '../utils';
require('isomorphic-fetch');

describe('test create view', () => {
  let hamsterbase: HamsterBase;
  let dispose: () => void;

  let port: number;

  let initViewId: string;
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
    const res = await hamsterbase.webpagesView.create({ title: 'init_title', description: 'init_description' });
    initViewId = res.id;
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('01: result of get view and list view should be equal', async () => {
    const view = await hamsterbase.webpagesView.get(initViewId);
    const views = await hamsterbase.webpagesView.views();
    expect(views).toEqual([view]);
  });

  it('02: should throw not found error when view is not found', async () => {
    let err: HttpError | null = null;
    try {
      await hamsterbase.webpagesView.get('not_found');
    } catch (error: any) {
      err = error;
    }
    expect(err!.status).toBe(404);
    expect(err!.message).toEqual(`view not_found not found`);
  });
});
