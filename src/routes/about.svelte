<script context="module" lang="ts">
    import { browser, dev } from '$app/env';

    // we don't need any JS on this page, though we'll load
    // it in dev so that we get hot module replacement...
    export const hydrate = dev;

    // ...but if the client-side router is already loaded
    // (i.e. we came here from elsewhere in the app), use it
    export const router = browser;
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<h1>About this app</h1>

<div class="content">
    <p>
        The page you're looking at is purely static HTML, with no client-side interactivity needed.
        Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
        opening the devtools network panel and reloading.
    </p>
</div>

<style>
    h1 {
        text-align: center;
    }

    .content {
        max-width: var(--column-width);
        margin: 1rem auto;
        line-height: 1.5;
        display: grid;
        gap: 1rem;
    }
</style>
