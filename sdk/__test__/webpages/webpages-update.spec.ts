import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HttpError } from '../../src/error';
import { HamsterBase } from '../../src/hamsterbase';
import { WebsiteExt } from '../../src/webpages/types';
import { createTestServer } from '../server';
import { Fixtures, getBase64Fixture, getPort, resolveRoot } from '../utils';
import { PatchWebPageRequest } from './../../src/webpages/types';
require('isomorphic-fetch');

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
      content: await getBase64Fixture(Fixtures.HamsterBaseDocument_01_mht),
      ext: WebsiteExt.mhtml,
    });
    dispose = server.dispose;
  });
  afterEach(async () => {
    await dispose();
  });

  it('001: should get correct model after update', async () => {
    const originalData = await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    const update: PatchWebPageRequest = {
      title: `new title ${Math.random()}`,
      link: `https://github.com/hamsterbase?q=${Math.random()}`,
      liked: true,
      read: true,
      excerpt: 'this is',
      labels: ['a', 'b'],
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
    } catch (error: any) {
      err = error;
    }
    expect(err!.status).toEqual(400);
    expect(err!.message).toEqual('link is invalid. link should start link http://www.example.com.');
  });

  it('E002: should ignore invalid fields and apply correct fields.', async () => {
    const errorData: [PatchWebPageRequest, PatchWebPageRequest][] = [
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
    ] as any as [PatchWebPageRequest, PatchWebPageRequest][];
    let originalData = await hamsterbase.webpages.get('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f');
    for (const iterator of errorData) {
      const result = await hamsterbase.webpages.update('bcf1e35729685a87ce18733080eaf0f80fec0c81a5a4608ef5b3f0272a37851f', iterator[0]);
      originalData = { ...originalData, ...iterator[1] };
      expect(result).toEqual(originalData);
    }
  });

  it('E003: should throw 404 when id is invalid', async () => {
    let err: HttpError;
    try {
      await hamsterbase.webpages.update('not_found', {
        link: `github.com`,
      });
    } catch (error: any) {
      err = error;
    }
    expect(err!.status).toEqual(404);
    expect(err!.message).toEqual('webpage not found');
  });
});
