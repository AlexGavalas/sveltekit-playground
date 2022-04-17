<script context="module" lang="ts">
    import type { Load } from '@sveltejs/kit';

    export const load: Load<{ todoId: string }> = async ({ params: { todoId } }) => {
        if (todoId === '123') {
            return {
                status: 301,
                redirect: '/',
            };
        }

        return {
            props: {
                id: todoId,
            },
        };
    };
</script>

<script lang="ts">
    export let id: number;
</script>

<h1>Hey {id}!</h1>
