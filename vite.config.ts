import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// GitHub Pages project URL: https://<user>.github.io/<repo-name>/
// Change this if the repository is renamed.
const GITHUB_PAGES_BASE = '/Rizki-Abdelhadi-portfolio/';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    // Dev server uses "/"; production build uses the repo subpath so assets load correctly.
    base: command === 'serve' ? '/' : GITHUB_PAGES_BASE,
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
