<script lang="ts">
    import { page } from "$app/stores"
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<main transition:fly={{ duration: 200, y: 500, opacity: 0.5, easing: quintOut }} class="min-h-[70vh]">
    <div class="h-[60vh] text-3xl my-12 flex items-center justify-center flex-col">
        <h1 class="text-6xl">{$page.status}</h1>
        <h1>{$page.error?.message}</h1>
    </div>
</main>