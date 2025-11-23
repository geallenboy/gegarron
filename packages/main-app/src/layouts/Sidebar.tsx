/**
 * 侧边栏导航组件
 */
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, BookOpen, FileText, Sun, Moon } from 'lucide-react';
import { cn } from '@main/utils';
import { useThemeStore } from '@main/stores';

const menuItems = [
  {
    path: '/news',
    label: '新闻资讯',
    icon: Search,
    description: '智能搜索文件和内容',
  },
  {
    path: '/crypto',
    label: '加密货币',
    icon: BookOpen,
    description: '加密货币',
  },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useThemeStore();

  // 根据主题模式选择图标和文字
  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return Sun;
      case 'dark':
        return Moon;
      default:
        return Sun;
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light':
        return '亮色模式';
      case 'dark':
        return '暗黑模式';
      default:
        return '亮色模式';
    }
  };

  const ThemeIcon = getThemeIcon();

  return (
    <aside className="bg-card flex w-64 flex-col border-r">
      {/* Logo区域 */}
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-primary text-xl font-bold">gegarron AI 空间</h1>
      </div>

      {/* 导航菜单 */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                'flex w-full items-center gap-3 rounded-lg px-4 py-3',
                'text-sm font-medium transition-all duration-200',
                'hover:bg-accent hover:text-accent-foreground',
                isActive ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground'
              )}
              title={item.description}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* 底部信息 */}
      <div className="space-y-3 border-t p-4">
        {/* 主题切换按钮 */}
        <button
          onClick={toggleTheme}
          className={cn(
            'flex w-full items-center gap-3 rounded-lg px-4 py-2.5',
            'text-sm font-medium transition-all duration-200',
            'bg-secondary hover:bg-accent',
            'text-secondary-foreground hover:text-accent-foreground'
          )}
          title="点击切换主题（亮色 → 暗黑)"
        >
          <ThemeIcon className="h-4 w-4" />
          <span>{getThemeLabel()}</span>
        </button>

        {/* 版本信息 */}
        <div className="text-muted-foreground text-xs">
          <p>版本 v1.0.0</p>
          <p className="mt-1">© 2025 gegarron科技</p>
        </div>
      </div>
    </aside>
  );
}
