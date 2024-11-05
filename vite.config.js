import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/nv/', // Replace 'your-repo-name' with your actual GitHub repository name
  plugins: [react()],
});
