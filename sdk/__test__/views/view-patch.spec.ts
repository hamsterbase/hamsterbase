import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HamsterBase } from '../../src/hamsterbase';
import { PatchWebpagesViewRequest, WebpagesViewSortOrder } from '../../src/views';
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

  it('01: patch view should be correct', async () => {
    const patchOptions: PatchWebpagesViewRequest = {
      title: 'patch title',
      description: 'patch description',
      sort: WebpagesViewSortOrder.annotate_count_desc,
      match: 'or',
      limit: 100,
      enableLimit: true,
    };

    const patchResponse = await hamsterbase.webpagesView.patch(initViewId, patchOptions);
    expect(patchResponse).toEqual(await hamsterbase.webpagesView.get(patchResponse.id));
  });
});
