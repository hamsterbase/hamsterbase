import { Client, ClientOptions } from './client';
import { Views } from './views';
import { WebPages } from './webpages/webpages';

export class HamsterBase {
  private client: Client;
  public webpages: WebPages;
  public webpagesView: Views;

  constructor(options: ClientOptions) {
    this.client = new Client(options);
    this.webpages = new WebPages(this.client);
    this.webpagesView = new Views(this.client);
  }
}
