import { Client, ClientOptions, HamsterBaseRequestLibOption } from './client';
import { Views } from './views/index';
import { WebPages } from './webpages/webpages';

export class HamsterBase {
  static fetchToRequestLib = (fetch: any) => {
    return async (url: string, options: HamsterBaseRequestLibOption) => {
      const response = await fetch(url, {
        method: options.method,
        headers: options.headers,
        body: options.body,
      });
      const status = response.status;
      const body = await response.text();
      return { status, body };
    };
  };

  private client: Client;
  public webpages: WebPages;
  public webpagesView: Views;

  constructor(options: ClientOptions) {
    this.client = new Client(options);
    this.webpages = new WebPages(this.client);
    this.webpagesView = new Views(this.client);
  }
}
