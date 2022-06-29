import { Client } from '../client';
import { UploadWebpageRequest, UploadWebpageResponse } from './types';

export class WebPages {
  constructor(private client: Client) {}
  create(data: UploadWebpageRequest): Promise<UploadWebpageResponse> {
    return this.client.post<UploadWebpageResponse>('/webpages', data);
  }
}
