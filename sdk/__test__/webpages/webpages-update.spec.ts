import { UpdateWebPage } from './../../webpages/types';
import { join } from 'path';
require('isomorphic-fetch');
import { HamsterBase } from '../../hamsterbase';
import { describe, it, expect, beforeEach, afterEach, beforeAll } from 'vitest';
import { Fixtures, getBase64Fixture, getPort, resolveRoot } from '../utils';
import { createTestServer } from '../server';
import { WebsiteExt } from '../../webpages/types';
import { HttpError } from '../../error';

describe('test update', () => {
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
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('001: should get correct model after update', async () => {
    const originalData = await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    const update: UpdateWebPage = {
      title: `new title ${Math.random()}`,
      link: `https://github.com/hamsterbase?q=${Math.random()}`,
      liked: true,
      read: true,
      excerpt: 'this is',
    };
    const result = await hamsterbase.webpages.update('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f', update);
    expect(result).toEqual({
      ...originalData,
      ...update,
    });
    expect(result).toEqual(await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f'));
  });

  it('E001: should throw 400 error when link is invalid', async () => {
    let err: HttpError;
    try {
      await hamsterbase.webpages.update('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f', {
        link: `github.com`,
      });
    } catch (error) {
      err = error;
    }
    expect(err!.status).toEqual(400);
    expect(err!.message).toEqual('link is invalid. link should start link http://www.example.com.');
  });

  it('E002: should ignore invalid fields and apply correct fields.', async () => {
    const errorData: [UpdateWebPage, UpdateWebPage][] = [
      [
        {
          title: 1,
          liked: true,
        },
        {
          liked: true,
        },
      ],
      [
        {
          ext: 'mhtml',
          title: 'new title',
        },
        {
          title: 'new title',
        },
      ],
      [
        {
          liked: 'TRUE',
          read: true,
        },
        { read: true },
      ],
      [
        {
          read: 'TRUE',
          liked: false,
          link: 'http://www.example.com',
        },
        {
          liked: false,
          link: 'http://www.example.com',
        },
      ],
    ] as any as [UpdateWebPage, UpdateWebPage][];
    let originalData = await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    for (const iterator of errorData) {
      const result = await hamsterbase.webpages.update('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f', iterator[0]);
      originalData = { ...originalData, ...iterator[1] };
      expect(result).toEqual(originalData);
    }
  });
});
