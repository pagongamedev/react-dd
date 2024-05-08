// import react from '@vitejs/plugin-react';
import million from 'million/compiler';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { type PluginOption, defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    million.vite(),
    WindiCSS(),
    VitePWA(),
  ],
  resolve: {
    dedupe: ['react'],
  },
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
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
