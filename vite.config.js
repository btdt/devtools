import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

/**
 * @see https://cn.vitejs.dev/config/
 */
export default defineConfig({
  base: '/devtools/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  build: {
    terserOptions: {
      drop_console: true,
      drop_debugger: true,
    },
    outDir: 'docs',
  },
  server: {
    host: '0.0.0.0',
    port: 3100,
    cors: false,
    open: false,
    fs: {
      strict: false,
    },
    proxy: {},
  },
});
