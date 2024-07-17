import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	compilerOptions: {
		customElement: true
	},

	/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig['onwarn']} */
	onwarn: (warning, handler) => {
		if (warning.code == 'missing-custom-element-compile-options') {
			/*
			 * https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#onwarn
			 * https://github.com/sveltejs/language-tools/issues/1079#issuecomment-2093788314
			 * 
			 * The default behavior of the Svelte compiler is to complain if it
			 * encounters custom element options defined in a template like
			 * `<svelte:options customElement="my-example" />`. Since we compile
			 * twice (once for SvelteKit using this config file where the
			 * option is intentionally ignored and once for the custom element
			 * using another config file), we can safely ignore this warning.
			 */
			return
		}
		handler(warning)
	},
};

export default config;
