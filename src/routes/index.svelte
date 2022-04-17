<script lang="ts">
    export let messages: number[];
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Sveltekit Playground</h1>

<section>
    <br />

    <p>Data fetched from an API route</p>

    <br />

    {#each messages as message}
        <p>{message}</p>
    {/each}
</section>

<style>
    h1 {
        text-align: center;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
