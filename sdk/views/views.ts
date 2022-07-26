import { Client } from '../client';
import { WebPage } from '../webpages/types';
import { CreateViewRequest, CreateViewResponse } from './types';

export class Views {
  constructor(private client: Client) {}
  create(request: CreateViewRequest): Promise<CreateViewResponse> {
    return this.client.post('/views', request);
  }

  getWebpages(id: string): Promise<WebPage[]> {
    return this.client.get(`/views/${id}/webpages`);
  }
}
