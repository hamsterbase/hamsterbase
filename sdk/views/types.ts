export const enum WebpagesViewSortOrder {
  random = 0,
  title_asc = 1,
  title_desc = 2,
  add_time_asc = 3,
  add_time_desc = 4,
  annotate_count_asc = 5,
  annotate_count_desc = 6,
}

export const enum WebpagesViewFilterType {
  constant = 0,
  select = 1,
  multiple_selection = 2,
}

export const enum AnnotationFilterOperator {
  is = 0,
  is_not = 1,
  is_greater_than = 2,
  is_less_than = 3,
}

export const enum FirstAddTimeFilterOperator {
  before = 0,
  after = 1,
}

export const enum FirstAddTimeFilterRightOperands {
  day_1 = 0,
  week_1 = 1,
  month_1 = 2,
  day_2 = 3,
  week_2 = 4,
  month_2 = 5,
}

export type WebpagesViewFilter =
  | {
      type: WebpagesViewFilterType.multiple_selection;
      key: 'host';
      operator: boolean;
      rightOperand: string[];
    }
  | {
      type: WebpagesViewFilterType.constant;
      key: 'liked';
      operator: boolean;
    }
  | {
      type: WebpagesViewFilterType.select;
      key: 'annotation';
      operator: AnnotationFilterOperator.is;
      rightOperand: number;
    }
  | {
      type: WebpagesViewFilterType.select;
      key: 'first-add-time';
      operator: FirstAddTimeFilterOperator.before;
      rightOperand: FirstAddTimeFilterRightOperands;
    }
  | {
      type: WebpagesViewFilterType.constant;
      key: 'link-duplicate';
      operator: boolean;
    }
  | {
      type: WebpagesViewFilterType.constant;
      key: 'title-duplicate';
      operator: boolean;
    };

export type WebpagesViewFilterMatchRule = 'and' | 'or';

export interface CreateViewRequest {
  title: string;
  description?: string;
  sort?: WebpagesViewSortOrder;
  limit?: number;
  enableLimit?: boolean;
  filters?: WebpagesViewFilter[];
  match?: WebpagesViewFilterMatchRule;
}

export interface PatchViewRequest {
  title?: string;
  description?: string;
  sort?: WebpagesViewSortOrder;
  limit?: number;
  enableLimit?: boolean;
  match?: WebpagesViewFilterMatchRule;
}

export type WithId<T> = T & { id: string };

export interface CreateViewResponse {
  id: string;
  title: string;
  createdAt: number;
  enableLimit: boolean;
  limit: number;
  sort: WebpagesViewSortOrder;
  filters?: WithId<WebpagesViewFilter>[];
}
