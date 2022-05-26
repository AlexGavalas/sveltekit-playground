import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    compilerOptions: {
        enableSourcemap: false,
    },

    kit: {
        adapter: adapter(),

        // Override http methods in the Todo forms
        methodOverride: {
            allowed: ['PATCH', 'DELETE'],
        },

        // Disable Chromium warning
        floc: true,
    },
};

export default config;
