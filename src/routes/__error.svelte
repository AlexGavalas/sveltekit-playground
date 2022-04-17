<script context="module" lang="ts">
	import type { ErrorLoad } from '@sveltejs/kit';

	export const load: ErrorLoad = async ({ error }) => {
		return {
			props: {
				message: error.message,
			},
		};
	};
</script>

<script lang="ts">
	export let message: string;
</script>

<h1>Error {message}</h1>
<a href="/">Back to home</a>
