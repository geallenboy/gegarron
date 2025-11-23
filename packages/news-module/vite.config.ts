import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@notes': path.resolve(__dirname, './src'),
      '@gegarron/main-app': path.resolve(__dirname, '../main-app/src/'),
    },
  },
  server: {
    port: 9991,
    strictPort: false,
    host: true,
  },
  build: {
    sourcemap: true,
  },
});
