import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes("dev");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: "index.html",
      precompress: false,
      strict: false
    }),
  },
  preprocess: vitePreprocess(),
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/Morzatt.github.io' : '',
  }
};
export default config;
