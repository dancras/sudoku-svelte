import path from 'path'
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
// import { transformSync } from '@swc/core';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
    // Unable to use SWC here for now. Imported variables for use in .svelte component templates
    // are trimmed by this compile as they are considered unused. The default pre-processor is
    // handling this in a bespoke way. TypeScript also has a solution "preserveValueImports" SWC
    // does not support the option.
    // typescript({ content }) {
    //   const { code } = transformSync(content, {
    //     jsc: {
    //       parser: { syntax: 'typescript' },
    //     }
    //   });
    //   return { code };
    // }
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
