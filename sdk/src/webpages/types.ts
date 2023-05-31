export interface UploadWebpageRequest {
  title?: string;
  link?: string;
  content: string;
  ext: WebsiteExt;
}

export enum WebsiteExt {
  mhtml = 'mhtml',
  webarchive = 'webarchive',
  html = 'html',
}

export interface WebpageHighlight {
  highlightId: string;
  type: 1;
  marker: {
    meta: {
      textBefore: string;
      textAfter: string;
    };
  };
  text: string;
  note?: string;
  editTime?: number;
}

export interface Webpage {
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
  highlights: WebpageHighlight[];
}

export interface PatchWebPageRequest {
  title?: string;
  excerpt?: string;
  liked?: boolean;
  link?: string;
  read?: boolean;
  labels?: string[];
}

export interface CreateHighlightRequest {
  text: string;
  textBefore: string;
  textAfter: string;
  tenThousandth?: number;
  note?: string;
}

export interface UploadWebpageResponse {
  id: string;
}

export interface WebpagesFilterOptions {
  liked?: boolean;
  read?: boolean;
  annotated?: boolean;
  host?: string | string[];
  labels?: string | string[];
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

export interface WebpagesListOptions extends WebpagesFilterOptions {
  /**
   * @default 'first_add_time_desc'
   */
  sort?:
    | 'title_asc'
    | 'title_desc'
    | 'first_add_time_asc'
    | 'first_add_time_desc'
    | 'annotate_count_asc'
    | 'annotate_count_desc';
}

export interface WebpagesSearchOptions extends WebpagesFilterOptions {
  q: string;
}

export interface UpdateWebpageHighlightOption {
  note: string;
}

export interface WebpagesList {
  webpages: Webpage[];
}
