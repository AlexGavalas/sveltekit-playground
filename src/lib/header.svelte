<script lang="ts">
    import { page } from '$app/stores';
    import { user } from '../stores/user';
    import Button from '$lib/button.svelte';

    const handleLogin = async () => {
        const response = await fetch('/api/login', { method: 'POST' });
        const data = await response.json();
        user.set(data);
    };

    const handleLogout = async () => {
        const response = await fetch('/api/logout');

        if (response.redirected) {
            location.href = response.url;
        }

        user.set(null);
    };
</script>

<header>
    <div class="corner">
        <a href="/">
            <img src="/favicon.png" alt="SvelteKit" />
        </a>
    </div>

    <nav>
        <ul>
            <li class:active={$page.url.pathname === '/'}>
                <a sveltekit:prefetch href="/">Home</a>
            </li>
            <li class:active={$page.url.pathname === '/about'}>
                <a sveltekit:prefetch href="/about">About</a>
            </li>
            <li class:active={$page.url.pathname === '/poker'}>
                <a sveltekit:prefetch href="/poker">Poker</a>
            </li>
            {#if $user}
                <li class:active={$page.url.pathname === '/todos'}>
                    <a sveltekit:prefetch href="/todos">Todos</a>
                </li>
            {/if}
        </ul>
    </nav>

    <div class="corner">
        <Button on:click={$user ? handleLogout : handleLogin}>{$user ? 'Logout' : 'Login'}</Button>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    .corner {
        width: 100%;
        display: flex;
    }

    .corner:first-child {
        justify-content: flex-start;
    }

    .corner:last-child {
        justify-content: flex-end;
    }

    .corner img {
        height: 2rem;
        object-fit: contain;
    }

    ul {
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 5px;
    }

    li {
        position: relative;
        height: 100%;
        transition: box-shadow 0.2s linear;
    }

    li.active {
        box-shadow: 0 -3px var(--accent-color) inset;
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 1rem;
        color: var(--heading-color);
        font-weight: bold;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: color 0.2s linear;
    }

    a:hover {
        color: var(--accent-color);
    }
</style>
