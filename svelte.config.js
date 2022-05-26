// import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    compilerOptions: {
        enableSourcemap: false,
    },

    kit: {
        adapter: vercel({
            edge: false,
            split: false,
            external: ['@sveltejs/kit/node/polyfills'],
        }),

        // Override http methods in the Todo forms
        methodOverride: {
            allowed: ['PATCH', 'DELETE'],
        },

        // Disable Chromium warning
        floc: true,
    },
};

export default config;
