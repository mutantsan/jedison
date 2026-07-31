import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './src/index.js'),
      name: 'Jedison'
    },
    sourcemap: false,
    rollupOptions: {
      output: [
        {
          format: 'umd',
          name: 'Jedison',
          entryFileNames: 'jedison.umd.js',
          dir: resolve(__dirname, './dist/umd-debug')
        }
      ]
    },
    minify: false,
    emptyOutDir: false
  }
})
