/**
 * 主布局组件
 * 包含侧边栏、顶部栏和内容区域
 */
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

export default function MainLayout() {
  return (
    <div className="bg-background flex h-screen overflow-hidden">
      {/* 左侧导航栏 */}
      <Sidebar />

      {/* 右侧主内容区 */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* 顶部栏 */}
        <TopBar />

        {/* 内容区域 - 动态加载模块 */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
