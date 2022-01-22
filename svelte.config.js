import path from 'path'
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { transformSync } from '@swc/core';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
      typescript({ content }) {
        const { code } = transformSync(content, {
          jsc: {
            parser: { syntax: 'typescript' },
          }
        });
        return { code };
      }
    }),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

    vite: {
      resolve: {
        alias: {
          '$': path.resolve('./src')
        }
      }
    }
	}
};

export default config;
