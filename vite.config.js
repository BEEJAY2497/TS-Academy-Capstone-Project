import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Determine if we are running a GitHub Pages deploy
const isGitHubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages
    ? '/TS-Academy-Capstone-Project/' // for GitHub Pages
    : './' // for local testing
});