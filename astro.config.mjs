import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        // Example: Generate `page.html` instead of `page/index.html` during build.
        format: 'file'
      },
      vite: {
        build: {
          rollupOptions: {
            output: {
              entryFileNames: 'js/scripts.js',
              chunkFileNames: 'chunks/chunk.[hash].js',
              assetFileNames: 'assets/css/main[extname]',
            },
          },
        },
      },
  });
