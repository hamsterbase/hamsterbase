import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HamsterBase } from '../../src/hamsterbase';
import { CreateViewRequest } from '../../src/views';
import { createTestServer } from '../server';
import { getPort, resolveRoot } from '../utils';
require('isomorphic-fetch');

describe('test create view', () => {
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

  it('01: delete should work correct', async () => {
    const request: CreateViewRequest = { title: 'test', description: 'test description' };
    const { id } = await hamsterbase.webpagesView.create(request);
    const views = await hamsterbase.webpagesView.views();
    expect(views.length).toBe(1);
    const view = await hamsterbase.webpagesView.delete(id);
    expect([view]).toEqual(views);
    expect(await hamsterbase.webpagesView.views()).toEqual([]);
  });

  it('02: should throw not found error when delete a deleted view', async () => {
    const request: CreateViewRequest = { title: 'test', description: 'test description' };
    const { id } = await hamsterbase.webpagesView.create(request);
    await hamsterbase.webpagesView.delete(id);
    try {
      await hamsterbase.webpagesView.delete(id);
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.message).toEqual(`view ${id} not found`);
    }

    const nodeFount = 'not_found';

    try {
      await hamsterbase.webpagesView.delete(nodeFount);
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.message).toEqual(`view ${nodeFount} not found`);
    }
  });
});
