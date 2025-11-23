import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * 获取系统主题偏好
 */
function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * 应用主题到 DOM
 */
function applyTheme(theme: Theme) {
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

  if (resolvedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    console.log('[ThemeStore] Applied dark mode');
  } else {
    document.documentElement.classList.remove('dark');
    console.log('[ThemeStore] Applied light mode');
  }
}

/**
 * 全局主题状态管理
 * 支持亮色/暗黑模式切换，并持久化到 localStorage
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => {
      return {
        // 初始状态：默认跟随系统
        theme: 'light',

        // 设置主题
        setTheme: (theme) => {
          console.log('[ThemeStore] setTheme called:', theme);
          set({ theme });
          applyTheme(theme);
        },

        // 切换主题（循环：light → dark）
        toggleTheme: () => {
          const currentTheme = get().theme;
          let newTheme: Theme;

          if (currentTheme === 'light') {
            newTheme = 'dark';
          } else if (currentTheme === 'dark') {
            newTheme = 'light';
          } else {
            newTheme = 'light';
          }

          console.log('[ThemeStore] toggleTheme:', currentTheme, '→', newTheme);
          get().setTheme(newTheme);
        },
      };
    },
    {
      name: 'theme-storage', // localStorage key
      onRehydrateStorage: () => (state) => {
        console.log('[ThemeStore] Rehydrated from localStorage:', state?.theme);
        // 从 localStorage 恢复后，同步到 DOM
        if (state?.theme) {
          applyTheme(state.theme);
        }
      },
    }
  )
);
