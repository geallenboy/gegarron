/**
 * 路由路径常量
 */
export const RoutePath = {
  // 主路由
  HOME: '/',

  // AI搜索
  SEARCH: '/search',
  SEARCH_DETAIL: '/search/detail',

  // 知识库
  KNOWLEDGE: '/knowledge',
  KNOWLEDGE_DETAIL: '/knowledge/detail',

  // 笔记
  NOTES: '/notes',
  NOTES_EDIT: '/notes/edit',
  NOTES_NEW: '/notes/new',
} as const;

/**
 * 环境常量
 */
export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
