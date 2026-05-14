import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// GitHub Actions sets GITHUB_REPOSITORY="owner/repo-name" — base path must match the repo segment.
// Local `npm run build`: falls back to this repo name (change if you build manually for another fork).
const defaultRepoName = 'Rizki-Abdelhadi-portfolio';
const repoName =
    process.env.GITHUB_REPOSITORY?.split('/')[1]?.trim() || defaultRepoName;
const githubPagesBase = `/${repoName.replace(/^\/+|\/+$/g, '')}/`;

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    // Dev server uses "/"; production build uses /repo-name/ so assets work on https://user.github.io/repo-name/
    base: command === 'serve' ? '/' : githubPagesBase,
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
