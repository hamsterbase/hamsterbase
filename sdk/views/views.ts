import { Client } from '../client';
import { WebPage } from '../webpages/types';
import { CreateViewRequest, CreateViewResponse, PatchViewRequest } from './types';

export class Views {
  constructor(private client: Client) {}

  patch(id: string, request: PatchViewRequest): Promise<CreateViewResponse> {
    return this.client.patch(`/views/${id}`, request);
  }

  create(request: CreateViewRequest): Promise<CreateViewResponse> {
    return this.client.post('/views', request);
  }

  views(): Promise<any[]> {
    return this.client.get('/views');
  }

  delete(id: string): Promise<void> {
    return this.client.delete(`/views/${id}`);
  }

  getWebpages(id: string): Promise<WebPage[]> {
    return this.client.get(`/views/${id}/webpages`);
  }
}
