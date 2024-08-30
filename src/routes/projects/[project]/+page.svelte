<script lang="ts">
    export let data;
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import Projects from "$lib/components/Projects";
    import type {Project} from "$lib/components/Projects";
    import {l} from "$lib/stores/language.store.js"

    let project: Project;

    $: {
        project = ($l === "EN" ? Projects.enProjects : Projects.esProjects).filter((p) => {
            return p.key === data.p
        })[0]
    }
</script>

<section transition:fly={{ duration: 200, y: 500, opacity: 0.5, easing: quintOut }}
class="w-full h-[100vh] flex flex-col md:flex-row items-center justify-around p-4">
    <div class="size-full lg:w-2/4 lg:h-full lg:p-4 lg:px-6 ">

        <div class="h-fit w-full relative rounded-md border-2 border-black bg-white shadow-[4px_7px]">
            <div class="w-full h-fit border-b-2 border-inherit">
                <div class="w-fit gap-2 h-[fit] bg-inherit flex items-center justify-start p-1 select-none rounded-md">
                    <b class="size-5 rounded-full bg-slate-900"></b>
                    <b class="size-5 rounded-full bg-slate-600"></b>
                    <b class="size-5 rounded-full bg-slate-400"></b>
                </div>
            </div>
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div class="w-full h-[fit] p-1 flex flex-col items-center justify-center 
                    transition-all duration-100 ease-linear text-white">
                <video src="{project.video}" class="overflow-hidden size-full rounded-md" autoplay muted loop></video>
            </div>
        </div>


        <div class="w-full h-fit mt-4">
            <div class="flex flex-col items-center justify-around">
                <div class="flex w-full items-center justify-around gap-8">
                    <h1 class="font-jersey font-bold text-8xl text-center">{project.title}</h1>   
                    <span class="w-fit px-12 flex items-center justify-around">
                        {#each project.links as link}
                            <a href="{link.link}" target="_blank" class="hover:drop-shadow-xl transition-all duration-100 ease-in">
                                <img src="{link.icon}" alt="" class="size-12">
                                {link.name}
                            </a>
                        {/each}
                    </span>
                </div>

                <div class="slider">
                    <div class="slider-inside">
                        {#each project.tags as tech}
                            <div class="bg-gray-300 mx-3 px-2 py-1 rounded-md text-center text-slate-700 inline-block">
                                <i class="fa-solid fa-hashtag"></i> <b>{tech}</b>
                            </div>
                        {/each}
                    </div>
                    <div class="slider-inside">
                        {#each project.tags as tech}
                            <div class="bg-gray-300 mx-3 px-2 py-1 rounded-md text-center text-slate-700 inline-block">
                                <i class="fa-solid fa-hashtag"></i> <b>{tech}</b>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            <h3 class="font-bold font-jersey text-4xl break-words mt-4 text-center w-full">{project.description}</h3>
        </div>
    </div>

    <div class="size-full lg:w-2/4 lg:h-full ">
        <h3 class="font-bold text-3xl text-left">{project.ldescription}</h3>

        <div class="w-full h-fit flex flex-col items-center justify-start">
            <h1 class="text-center font-jersey font-bold text-6xl">Stack</h1>

            <div class="w-full h-fit flex items-center justify-center">
                {#each project.technologies as tech}
                    <div class="bg-13 size-20 relative mx-1">
                        <div class="w-[75%] h-[70%] absolute right-[3%] top-[8%]
                        flex flex-col items-center justify-center">
                            <img src="{tech.icon}" alt="" class="size-fit max-h-[80%] max-w-[80%]">
                            <!-- <b class="w-full text-center mt-1">{tech.name}</b> -->
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="postcss">
    .bg-13 {
        background-image: url("../../../lib/images/13.svg");
        background-position:center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    .slider {
        @apply whitespace-nowrap flex items-center justify-around text-sm px-2 w-full overflow-hidden rounded-md;
    }

    .slider-inside {
        display: inline-block;
        animation: 25s slide infinite linear;
    }

    @keyframes slide {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }
</style>
