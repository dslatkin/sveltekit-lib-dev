import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	// What's built and exported by /components doesn't include the JavaScript
	// that makes the custom element, so we need to do it here.
	compilerOptions: {
		customElement: true
	},

	/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig['onwarn']} */
	onwarn: (warning, handler) => {
		// Suppress the linting/build warning about missing custom element
		// compile options since we're using the actual Svelte component and not
		// the custom element constructor the library built from it.
		if (warning.code == 'missing-custom-element-compile-options') {
			return
		}
		handler(warning)
	},
};

export default config;
