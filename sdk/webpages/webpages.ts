import { Client } from '../client';
import { UpdateWebPage, UploadWebpageRequest, UploadWebpageResponse, WebPage, ListOptions } from './types';

export class WebPages {
  constructor(private client: Client) {}
  create(data: UploadWebpageRequest): Promise<UploadWebpageResponse> {
    return this.client.post<UploadWebpageResponse>('/webpages', data);
  }

  delete(id: string): Promise<string> {
    if (!id || typeof id !== 'string') {
      throw new Error('invalid webpage id');
    }
    return this.client.delete<string>(`/webpages/${id}`);
  }

  get(id: string): Promise<WebPage> {
    return this.client.get<WebPage>(`/webpages/${id}`);
  }

  getContent(id: string): Promise<string> {
    return this.client.get<string>(`/webpages/${id}/content`);
  }

  update(id: string, newData: UpdateWebPage): Promise<WebPage> {
    return this.client.put<WebPage>(`/webpages/${id}`, newData);
  }

  list(options?: ListOptions): Promise<WebPage[]> {
    if (options) {
      const searchParams = new URLSearchParams({});
      if (typeof options.liked === 'boolean') {
        searchParams.append('liked', String(options.liked));
      }
      if (typeof options.read === 'boolean') {
        searchParams.append('read', String(options.read));
      }
      if (typeof options.sort === 'string') {
        searchParams.append('sort', String(options.sort));
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
      return this.client.get<WebPage[]>(`/webpages?${searchParams.toString()}`);
    }
    return this.client.get<WebPage[]>(`/webpages`);
  }
}
