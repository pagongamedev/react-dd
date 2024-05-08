import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  resolve: {
    dedupe: ['react'],
  },
  build: {
    // outDir: './hosting/public',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      plugins: [
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-treemap.html'),
          template: 'treemap',
        }) as unknown as PluginOption,
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-sunburst.html'),
          template: 'sunburst',
        }) as unknown as PluginOption,
        visualizer({
          filename: resolve(__dirname, 'analytics/stats-network.html'),
          template: 'network',
        }) as unknown as PluginOption,
      ],
    },
  },
});
