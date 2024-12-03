// types/apiResponse.ts
import { Product } from './product';

export interface ApiResponse {
  data: Product[];
  meta: MetaData;
}

//Pagination.

export interface MetaData {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}
