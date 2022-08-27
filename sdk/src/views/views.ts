import { Client } from '../client';
import { WebpagesList } from '../webpages/types';
import { CreateViewRequest, CreateViewResponse, PatchWebpagesViewRequest } from './types';

export class Views {
  constructor(private client: Client) {}

  create(request: CreateViewRequest): Promise<CreateViewResponse> {
    return this.client.post('/views', request);
  }

  delete(id: string): Promise<void> {
    return this.client.delete(`/views/${id}`);
  }

  patch(id: string, request: PatchWebpagesViewRequest): Promise<CreateViewResponse> {
    return this.client.patch(`/views/${id}`, request);
  }

  get(id: string): Promise<any> {
    return this.client.get(`/views/${id}`);
  }

  views(): Promise<any[]> {
    return this.client.get('/views');
  }

  getWebpages(id: string): Promise<WebpagesList> {
    return this.client.get(`/views/${id}/webpages`);
  }
}
