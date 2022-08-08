import { ErrorCodes, HttpError, ResponseError } from './error';

export interface ClientOptions {
  endpoint: string;
  token: string;
  requestLib: RequestLib;
}

export interface RequestLib {
  (url: string, options: RequestInit): Promise<Response>;
}

export type HamsterBaseResponse<T> = { success: true; data: T } | { success: false; message: string; error: ErrorCodes };

export class Client {
  constructor(private options: ClientOptions) {
    if (!options.endpoint) {
      throw new Error('endpoint is required');
    }
    if (!options.token) {
      throw new Error('token is required');
    }
  }

  post<T>(api: string, data: unknown) {
    return this.request<T>('POST', api, data);
  }

  patch<T>(api: string, data: unknown) {
    return this.request<T>('PATCH', api, data);
  }

  put<T>(api: string, data: unknown) {
    return this.request<T>('PUT', api, data);
  }

  delete<T>(api: string) {
    return this.request<T>('DELETE', api);
  }

  get<T>(api: string) {
    return this.request<T>('GET', api);
  }

  private async request<T>(method: string, api: string, data?: unknown): Promise<T> {
    const response = await this.options.requestLib(`${this.options.endpoint}/public/api/v1${api}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        authorization: `token ${this.options.token}`,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    if (response.status !== 200) {
      const message = await response.text();
      try {
        throw new HttpError(response.status, JSON.parse(message).message);
      } catch (error) {
        if (error instanceof HttpError) {
          throw error;
        }
        throw new HttpError(response.status, message);
      }
    }
    const json = (await response.json()) as HamsterBaseResponse<T>;
    if (!json.success) {
      throw new ResponseError(json.error, json.message);
    }
    return json.data;
  }
}
