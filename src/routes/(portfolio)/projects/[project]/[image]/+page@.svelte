<script lang="ts">
    import "../../../../../app.css"
    export let data;
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import {onMount} from "svelte"
    import Projects from "$lib/components/Projects";
    import type {Project} from "$lib/components/Projects";
    import {l} from "$lib/stores/language.store.js"
    import { goto } from "$app/navigation";

    let load = false

    let project: Project;
    $: {
        project = ($l === "EN" ? Projects.enProjects : Projects.esProjects).filter((p) => {
            return p.key === data.p
        })[0]
    }

    onMount(() => {
        setTimeout(() => {
            load = true; 
        }, 50);
        imgLength = project.images?.length as number
    });

    let imageIndex = parseInt(data.img)
    let imgLength: number;

    function nextImg() {
        if (imageIndex < (imgLength - 1)) {
            goto(`/projects/${project.key}/${imageIndex++}`)
        }
    }

    function prevImg() {
        if (imageIndex > 0) {
            goto(`/projects/${project.key}/${imageIndex--}`)
        }
    }
</script>

<div class="w-full min-h-screen bg-black flex items-center justify-center text-white text-3xl">
    <button on:click={prevImg} class="absolute left-8 bottom-8 lg:bottom-auto lg:top-2/4 lg:translate-y-[-50%]"><i class="fa-solid fa-chevron-left"></i></button>
    <button on:click={nextImg} class="absolute right-8 bottom-8 lg:bottom-auto lg:top-2/4 lg:translate-y-[-50%]"><i class="fa-solid fa-chevron-right"></i></button>

    {#if project.images}
        <a href="/projects/{project.key}" class="absolute left-4 top-4"><i class="fa-solid fa-arrow-left"></i></a>
        <img src="{project.images[imageIndex]}" alt="" class="size-3/4">       
    {/if}
</div>

<style lang="postcss">
    button, a {
        @apply p-5 flex items-center justify-center rounded-md transition-all duration-200 ease-linear;
    }
    button:hover, a:hover {
        @apply bg-gray-700;
    }
</style>