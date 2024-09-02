<script lang="ts">
    import { page } from "$app/stores"
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<main transition:fly={{ duration: 200, y: 500, opacity: 0.5, easing: quintOut }}>
    <div class="text-3xl">
        <h1>{$page.status}</h1>
        <h1>{$page.error?.message}</h1>
    </div>
</main>