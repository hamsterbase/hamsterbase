import { join } from 'path';
import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { HamsterBase } from '../../src/hamsterbase';
import {
  AnnotationFilterOperator,
  CreateViewRequest,
  FirstAddTimeFilterOperator,
  FirstAddTimeFilterRightOperands,
  WebpagesViewFilterType,
  WebpagesViewSortOrder,
} from '../../src/views';
import { WebsiteExt } from '../../src/webpages/types';
import { createTestServer } from '../server';
import { Fixtures, FixturesId, getBase64Fixture, getPort, resolveRoot } from '../utils';
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

  async function expectList(idList: string[], viewId: string) {
    const result = await hamsterbase.webpagesView.getWebpages(viewId);
    expect(result.webpages.map((p) => p.id)).toEqual(idList);
  }

  it('01: default options should be correct', async () => {
    const request: CreateViewRequest = { title: 'test', description: 'test description' };
    const { id, createdAt, ...rest } = await hamsterbase.webpagesView.create({ title: 'test', description: 'test description' });
    expect(rest).toEqual({
      title: request.title,
      sort: WebpagesViewSortOrder.add_time_desc,
      enableLimit: false,
      filters: [],
      limit: 25,
      match: 'and',
      description: request.description,
    });
    await expectList(
      [FixturesId.HamsterBaseGithubHome_03_html, FixturesId.HamsterBaseGithubIssue_02_webarchive, FixturesId.HamsterBaseDocument_01_mht],
      id
    );
  });

  it('02: all property should be correct', async () => {
    const request: CreateViewRequest = {
      title: 'test',
      description: 'test description',
      limit: 30,
      enableLimit: true,
      sort: WebpagesViewSortOrder.random,
      match: 'or',
      filters: [
        {
          type: WebpagesViewFilterType.multiple_selection,
          key: 'host',
          operator: true,
          rightOperand: ['hamsterbase.com'],
        },
        {
          type: WebpagesViewFilterType.constant,
          key: 'liked',
          operator: true,
        },
        {
          type: WebpagesViewFilterType.select,
          key: 'annotation',
          operator: AnnotationFilterOperator.is,
          rightOperand: 0,
        },
        {
          type: WebpagesViewFilterType.select,
          key: 'first-add-time',
          operator: FirstAddTimeFilterOperator.before,
          rightOperand: FirstAddTimeFilterRightOperands.day_1,
        },
        {
          type: WebpagesViewFilterType.constant,
          key: 'link-duplicate',
          operator: true,
        },
        {
          type: WebpagesViewFilterType.constant,
          key: 'title-duplicate',
          operator: true,
        },
      ],
    };
    const { id, createdAt, ...rest } = await hamsterbase.webpagesView.create(request);
    expect({
      ...rest,
      filters: rest.filters?.map((o) => {
        return { ...o, id: undefined };
      }),
    }).toEqual(request);

    expect(rest.filters?.map((p) => p.id.length)).toEqual([47, 47, 47, 47, 47, 47]);
  });
});
