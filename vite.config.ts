import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import 'dotenv/config';

export default defineConfig(async () => ({
  base: process.env.VITE_BASE_URL || '/',
  plugins: [nodePolyfills(), vue()],
  clearScreen: false,
  server: {
    port: 1998,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
      'monaco-editor': path.resolve('node_modules/monaco-editor'),
    },
  },
  optimizeDeps: {
    include: ['monaco-editor'],
  },
  build: {
    outDir: process.env.VITE_BUILD_DIR || 'dist',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules') || id.includes('.pnpm')) {
            if (id.includes('/vue') || id.includes('/pinia')) {
              return 'core';
            }
            if (id.includes('monaco-editor')) {
              return 'monaco-editor';
            }
          }
        },
      },
    },
  },
}));
