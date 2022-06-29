import { Client, ClientOptions } from './client';
import { WebPages } from './webpages/webpages';

export class HamsterBase {
  private client: Client;
  public webpages: WebPages;
  constructor(options: ClientOptions) {
    this.client = new Client(options);
    this.webpages = new WebPages(this.client);
  }
}
