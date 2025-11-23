/**
 * 模块类型声明
 * 为动态导入的子模块提供类型定义
 */

declare module 'search-module' {
  import type { ComponentType } from 'react';
  const SearchModule: ComponentType;
  export default SearchModule;
}

declare module 'knowledge-module' {
  import type { ComponentType } from 'react';
  const KnowledgeModule: ComponentType;
  export default KnowledgeModule;
}

declare module 'notes-module' {
  import type { ComponentType } from 'react';
  const NotesModule: ComponentType;
  export default NotesModule;
}

// Shared 样式模块类型声明
declare module '@main/shared/styles' {
  const content: string;
  export default content;
}
