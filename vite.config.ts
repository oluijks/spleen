import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
  plugins: [
    // @see https://kit.svelte.dev/docs/images#sveltejs-enhanced-img
    enhancedImages(),
    sveltekit(),
    purgeCss(),
  ],
});
