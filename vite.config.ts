import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    devServer({
      entry: './server.js',
      exclude: [/^(?!\/api).*/],
    }),
  ],
});
