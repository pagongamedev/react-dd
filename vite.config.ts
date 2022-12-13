import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    dedupe: ['react'],
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      plugins: [
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-treemap.html'),
          template: 'treemap',
        }),
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-sunburst.html'),
          template: 'sunburst',
        }),
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-network.html'),
          template: 'network',
        }),
      ],
    },
  },
});
