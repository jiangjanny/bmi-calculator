import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // 對於相對部署路徑非常重要！
  plugins: [react()]
});
