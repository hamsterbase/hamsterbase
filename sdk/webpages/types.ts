export interface UploadWebpageRequest {
  /**
   * @required
   */
  ext: WebsiteExt;
  /**
   * @required
   *
   * base64 编码后的网页内容
   */
  content: string;
  title?: string;
  link?: string;
}

export const enum WebsiteExt {
  mhtml = 'mhtml',
  webarchive = 'webarchive',
  html = 'html',
}

export interface WebPage {
  title: string;
  excerpt: string;
  firstAddTime: number;
  createTime: number;
  liked: boolean;
  link?: string;
  ext: WebsiteExt;
  id: string;
  size: number;
  read: boolean;
  highlights: any[];
}

export interface UploadWebpageResponse {
  id: string;
}
