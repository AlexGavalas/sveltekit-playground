import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

// const vercelAdapterOptions = {
//     edge: false,
//     split: false,
//     external: [],
// };

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
