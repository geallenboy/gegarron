/**
 * 共享类型定义
 */

// 通用类型
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type MaybePromise<T> = T | Promise<T>;

// API 响应类型
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

export type ApiResult<T> = Promise<ApiResponse<T>>;

// 分页参数
export interface PaginationParams {
  page: number;
  pageSize: number;
}

// 分页响应
export interface PaginationResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
