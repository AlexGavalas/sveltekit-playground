<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session }) => {
		return {
			props: {
				session,
			},
		};
	};
</script>

<script lang="ts">
	import '../app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';

	import { user } from '../stores/user';

	export let session = null;

	user.set(session);
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
