export interface TableDataWithPagination {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  pagination: {
    size: number;
    total_pages: number;
    total_elements: number;
    current_page: number;
    has_previous: boolean;
    has_next: boolean;
  };
}
