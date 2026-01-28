// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://norsknytt.netlify.app',
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
