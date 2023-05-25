import { Client } from '../client';
import { WebpagesList } from '../webpages/types';
import {
  CreateViewRequest,
  PatchWebpagesViewRequest,
  WebpagesView,
} from './types';

export class Views {
  constructor(private client: Client) {}

  create(request: CreateViewRequest): Promise<WebpagesView> {
    return this.client.post('/views', request);
  }

  delete(id: string): Promise<WebpagesView> {
    return this.client.delete(`/views/${id}`);
  }

  patch(id: string, request: PatchWebpagesViewRequest): Promise<WebpagesView> {
    return this.client.patch(`/views/${id}`, request);
  }

  get(id: string): Promise<WebpagesView> {
    return this.client.get(`/views/${id}`);
  }

  views(): Promise<WebpagesView[]> {
    return this.client.get('/views');
  }

  getWebpages(id: string): Promise<WebpagesList> {
    return this.client.get(`/views/${id}/webpages`);
  }
}
