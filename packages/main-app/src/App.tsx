/**
 * gegarron主应用
 */
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@main/router';
import { useThemeStore } from '@main/stores';

export default function App() {
  const theme = useThemeStore((state) => state.theme);

  // 初始化主题系统
  useEffect(() => {
    // 确保主题状态同步到 DOM
    useThemeStore.getState().setTheme(theme);
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
