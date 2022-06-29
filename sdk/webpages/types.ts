export interface UploadWebpageRequest {
  /**
   * @required
   */
  ext: 'mhtml' | 'webarchive' | 'html';
  /**
   * @required
   *
   * base64 编码后的网页内容
   */
  content: string;
  title?: string;
  link?: string;
}

export interface UploadWebpageResponse {
  id: string;
}
