import { join } from 'path';
require('isomorphic-fetch');
import { HamsterBase } from '../../hamsterbase';
import { describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest';
import { Fixtures, getBase64Fixture, getPort, resolveRoot } from '../utils';
import { createTestServer } from '../server';
import { WebsiteExt } from '../../webpages/types';
import { HttpError } from '../../error';

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
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('001: should get correct model', async () => {
    const { firstAddTime, ...result } = await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    expect(result).toEqual({
      createTime: 1656340958000,
      ext: 'mhtml',
      id: 'bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f',
      liked: false,
      link: 'https://hamsterbase.com/docs/what-is-hamsterbase.html',
      read: false,
      size: 597054,
      title: 'What is HamsterBase | HamsterBase',
      highlights: [],
      excerpt: '',
    });
  });

  it('002: should get correct webpage content', async () => {
    const content = await hamsterbase.webpages.getContent('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    expect(content).toEqual(await getBase64Fixture(Fixtures.HamsterBaseDocument_01_mht));
  });

  it('E001: should get 404 error when id is invalid', async () => {
    try {
      await hamsterbase.webpages.get('1');
    } catch (error) {
      expect(error.status).toBe(404);
      expect(error.message).toEqual('webpage not found');
    }

    try {
      await hamsterbase.webpages.getContent('1');
    } catch (error) {
      expect(error.status).toBe(404);
      expect(error.message).toEqual('webpage not found');
    }
  });

  it('E002: should get 404 error when webpage is deleted', async () => {
    await hamsterbase.webpages.delete('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    let error: HttpError | null = null;
    try {
      await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    } catch (err) {
      error = err;
    }
    expect(error!.status).toBe(404);
    expect(error!.message).toEqual('webpage not found');
  });
});
