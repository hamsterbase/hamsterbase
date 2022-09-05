import { Client } from '../client';
import {
  PatchWebPageRequest,
  UploadWebpageRequest,
  UploadWebpageResponse,
  Webpage,
  WebpagesFilterOptions,
  WebpagesList,
  WebpagesListOptions,
  WebpagesSearchOptions,
} from './types';

export class WebPages {
  constructor(private client: Client) {}
  create(data: UploadWebpageRequest): Promise<Webpage> {
    return this.client.post<Webpage>('/webpages', data);
  }

  delete(id: string): Promise<Webpage> {
    if (!id || typeof id !== 'string') {
      throw new Error('invalid webpage id');
    }
    return this.client.delete<Webpage>(`/webpages/${id}`);
  }

  get(id: string): Promise<Webpage> {
    return this.client.get<Webpage>(`/webpages/${id}`);
  }

  getContent(id: string): Promise<string> {
    return this.client.get<string>(`/webpages/${id}/content`);
  }

  update(id: string, newData: PatchWebPageRequest): Promise<Webpage> {
    return this.client.patch<Webpage>(`/webpages/${id}`, newData);
  }

  list(options?: WebpagesListOptions): Promise<WebpagesList> {
    if (options) {
      const searchParams = this.buildFilterOptions(options);
      if (typeof options.sort === 'string') {
        searchParams.append('sort', String(options.sort));
      }
      return this.client.get<WebpagesList>(`/webpages?${searchParams.toString()}`);
    }
    return this.client.get<WebpagesList>(`/webpages`);
  }

  search(options: WebpagesSearchOptions): Promise<WebpagesList> {
    const searchParams = this.buildFilterOptions(options);
    searchParams.append('q', String(options.q));
    return this.client.get<WebpagesList>(`/search/webpages?${searchParams.toString()}`);
  }

  private buildFilterOptions(options: WebpagesFilterOptions) {
    const searchParams = new URLSearchParams({});
    if (typeof options.liked === 'boolean') {
      searchParams.append('liked', String(options.liked));
    }
    if (typeof options.read === 'boolean') {
      searchParams.append('read', String(options.read));
    }

    if (typeof options.host === 'string') {
      searchParams.append('host', String(options.host));
    } else if (Array.isArray(options.host)) {
      options.host.forEach((e) => {
        searchParams.append('host', String(e));
      });
    }
    if (typeof options.ext === 'string') {
      searchParams.append('ext', String(options.ext));
    } else if (Array.isArray(options.ext)) {
      options.ext.forEach((e) => {
        searchParams.append('ext', String(e));
      });
    }
    if (typeof options.page === 'number') {
      searchParams.append('page', String(options.page));
    }
    if (typeof options.per_page === 'number') {
      searchParams.append('per_page', String(options.per_page));
    }
    return searchParams;
  }
}
