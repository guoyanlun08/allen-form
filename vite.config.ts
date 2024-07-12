import * as path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index'),
      name: 'AllenForm',
      fileName: 'allen-form',
    },
    rollupOptions: {
      external: [
        'element-plus',
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },

    },
    commonjsOptions: {
      esmExternals: ['vue'],
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
})
