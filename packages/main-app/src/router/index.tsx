/**
 * 路由配置
 */
import { lazy, Suspense } from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@main/layouts';

// 加载中占位组件
function LoadingFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="border-primary mx-auto h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
        <p className="text-muted-foreground text-sm">加载中...</p>
      </div>
    </div>
  );
}

// 模块加载组件
function ModuleLoader({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

// 动态导入子模块
const NewsModule = lazy(() => import('news-module'));
const CryptoModule = lazy(() => import('crypto-module'));

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'news/*',
        element: (
          <ModuleLoader>
            <NewsModule />
          </ModuleLoader>
        ),
      },
      {
        path: 'crypto/*',
        element: (
          <ModuleLoader>
            <CryptoModule />
          </ModuleLoader>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/news" replace />,
      },
    ],
  },
]);
