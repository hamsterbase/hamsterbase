import { Client } from '../client';
import { UploadWebpageRequest, UploadWebpageResponse } from './types';

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
}
