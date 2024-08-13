<script lang="ts">
    // Images Import
    import arrowBack from "$lib/images/arrow_back_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    import arrowFor from "$lib/images/arrow_forward_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    import reload from "$lib/images/sync_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    import lock from "$lib/images/lock_24dp_FFFFFF.svg"
    import gotoP from "$lib/images/move_item_24dp_FILL0_wght400_GRAD0_opsz24.svg"

    // Regular Imports
    import {l} from "$lib/stores/language.store"
    import p from "./Projects"
    import {onMount} from "svelte"

    let load = false;
    onMount(() => {
        setTimeout(() => {
            load = true
        }, 50);
    })

    let showDescription = false;
</script>

<div class="size-full" id="projects">
    <h1 class="text-5xl font-bold my-8">{$l === "EN" ? "Projects" : "Proyectos"}</h1>
    <div class="h-fit w-full min-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each $l === "EN" ? p.enProjects : p.esProjects as project}
            {#if project.type === "Web Application"}
                <div class="h-[15rem] lg:h-[17rem] xl:h-[20rem] flex items-end justify-center">
                    <div class="bg-black border-2 border-black w-full h-[90%]">
                        <div class="translate-x-[-0.4rem] translate-y-[-0.4rem] size-full relative border-2 border-black bg-white">
                            <div class="top select-none"></div> 
                            <div class="bot flex items-center justify-around p-2 select-none">
                                <span class="w-3/5 flex items-center justify-start">
                                    <span class="w-2/4 flex items-center justify-start gap-1 font-bold">
                                        <img src="{arrowBack}" alt="" class="size-6">
                                        <img src="{arrowFor}" alt="" class="size-6">
                                        <img src="{reload}" alt="" class="size-6 rotate-90">
                                    </span>
                                </span>
                                <span class="bg-gray-200 rounded-md px-2 w-3/6 h-full flex items-center overflow-hidden">
                                    <img src="{lock}" alt="" class="size-5 filter invert md:mr-2">
                                    <h3 class="text-sm font-bold">https://localhost</h3>
                                </span>
                            </div>

                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                            <div class="w-full h-[83%] p-4" on:mouseover={() => {}} on:mouseout={() => {}}>
                                <img src="{project.image}" alt="" class="size-full bb">
                            </div>

                            <button class="absolute right-4 bottom-4">
                                <img src="{gotoP}" class="bb size-8" alt="">     
                            </button> 
                        </div>
                    </div>
                </div>               
            {:else if project.type === "Command Line"}
                <div class="h-[15rem] lg:h-[17rem] xl:h-[20rem] flex items-end justify-center font-mono text-white" style="letter-spacing: 2px;">
                    <div class="bg-black border-2 border-black w-full h-[90%] relative rounded-md">
                        <div class="w-fit gap-2 h-[15%] bg-inherit flex items-center justify-start p-2 select-none">
                            <b class="border-2 border-red-600 size-5 rounded-full bg-red-600"></b>
                            <b class="border-2 border-yellow-500 size-5 rounded-full bg-yellow-500"></b>
                            <b class="border-2 border-green-600 size-5 rounded-full bg-green-600"></b>
                        </div>

                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <div class="w-full h-[85%] p-4">
                            <img src="{project.image}" alt="" class="size-full border">
                        </div>

                        <button class="absolute right-4 bottom-4">
                            <img src="{gotoP}" class="bb size-8 filter invert" alt="">     
                        </button> 
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<style lang="postcss">
    .top {
        @apply absolute top-[-8%] left-[-0.4%]
        border-2 border-black border-r-[50px]
        bg-black
        w-2/4 h-[12%];
    }
    .bot {
        @apply bg-black 
        w-[100.7%] h-[17%];
    }
</style>