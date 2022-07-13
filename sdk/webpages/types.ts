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

export interface UpdateWebPage {
  title?: string;
  excerpt?: string;
  liked?: boolean;
  link?: string;
  read?: boolean;
}

export interface UploadWebpageResponse {
  id: string;
}



export interface FilterOptions {
  liked?: boolean;
  read?: boolean;
  annotated?: boolean;
  host?: string | string[];
  ext?: WebsiteExt | WebsiteExt[];
  /**
   * @default 30
   */
  per_page?: number;
  /**
   * @default 1
   */
  page?: number;
}



export interface ListOptions extends FilterOptions {
  /**
   * @default 'first_add_time_desc'
   */
  sort?: 'title_asc' | 'title_desc' | 'first_add_time_asc' | 'first_add_time_desc' | 'annotate_count_asc' | 'annotate_count_desc';
}

export interface SearchOptions extends FilterOptions {
  q: string;
}
