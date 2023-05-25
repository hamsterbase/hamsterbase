import { ErrorCodes, HttpError, ResponseError } from './error';

export interface HamsterBaseRequestLibOption {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

export interface HamsterBaseRequestLibResponse {
  status: number;
  body: string;
}

export interface HamsterBaseRequestLib {
  (
    url: string,
    options: HamsterBaseRequestLibOption
  ): Promise<HamsterBaseRequestLibResponse>;
}
export interface ClientOptions {
  endpoint: string;
  token: string;
  requestLib?: HamsterBaseRequestLib;
}

export type HamsterBaseResponse<T> =
  | { success: true; data: T }
  | { success: false; message: string; error: ErrorCodes };

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

  private async request<T>(
    method: string,
    api: string,
    data?: unknown
  ): Promise<T> {
    const requestLib = this.options.requestLib ?? this.internalRequest;
    const response = await requestLib(
      `${this.options.endpoint}/public/api/v1${api}`,
      {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.options.token}`,
        },
        body: data ? JSON.stringify(data) : undefined,
      }
    );
    if (response.status !== 200) {
      const message = response.body;
      try {
        throw new HttpError(response.status, JSON.parse(message).message);
      } catch (error) {
        if (error instanceof HttpError) {
          throw error;
        }
        throw new HttpError(response.status, message);
      }
    }
    const json = JSON.parse(response.body);
    if (!json.success) {
      throw new ResponseError(json.error, json.message);
    }
    return json.data;
  }

  private async internalRequest(
    url: string,
    options: HamsterBaseRequestLibOption
  ): Promise<HamsterBaseRequestLibResponse> {
    const response = await fetch(url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
    });
    const status = response.status;
    const body = await response.text();
    return { status, body };
  }
}
