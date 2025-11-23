import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      //内部别名
      '@main': path.resolve(__dirname, './src'),
      '@auth': path.resolve(__dirname, '../auth/src'),
      '@news': path.resolve(__dirname, '../news-module/src'),
      '@gegarron/main-app': path.resolve(__dirname, './src'),
      '@gegarron/auth': path.resolve(__dirname, '../auth/src'),
      '@gegarron/payment': path.resolve(__dirname, '../payment/src'),
      // 模块入口别名
      'crypto-module': path.resolve(__dirname, '../crypto-module/src/index.tsx'),
      'news-module': path.resolve(__dirname, '../news-module/src/index.tsx'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 9988,
    strictPort: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        // 代码分割 - 每个模块独立打包
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // 'ui': ['@gegarron/shared'],
          // 'search-module': ['search-module'],
          // 'knowledge-module': ['knowledge-module'],
          // 'notes-module': ['notes-module'],
        },
      },
    },
  },
});
