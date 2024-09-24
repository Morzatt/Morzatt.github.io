<script lang="ts">
    // Images Import
    import arrowBack from "$lib/images/arrow_back_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    import arrowFor from "$lib/images/arrow_forward_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    import reload from "$lib/images/sync_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
    import a from "$lib/images/a.mp4"

    // Regular Imports
    import {l} from "$lib/stores/language.store"
    import p from "./Projects"
    import {onMount} from "svelte"
    import Projects from "./Projects";

    let load = false;
   
    let descriptions: Record<string, { blur: boolean, state: boolean }> = {};
    
    onMount(() => { 
        setTimeout(() => {
            load = true
        }, 50);
    })

    for (let i of $l === "EN" ? p.enProjects : p.esProjects) {
        descriptions[i.key] = { blur: false, state: false }
    }

    function showDescription(key: string) {
        descriptions[key].blur = true
        setTimeout(() => {
            descriptions[key].blur = false 
            descriptions[key].state = true
        }, 100);
    }

    function hideDescription(key: string) {
        descriptions[key].blur = true
        setTimeout(() => {
            descriptions[key].blur = false 
            descriptions[key].state = false 
        }, 100);
    }
</script>

<div class="w-full min-h-screen" id="projects">
    <h1 class="text-7xl font-bold my-8 font-jersey">{$l === "EN" ? "Projects" : "Proyectos"}</h1>
    <div class="h-fit w-full min-h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each $l === "EN" ? p.enProjects : p.esProjects as project, i}
            {#if project.type === "Web Application"}
                <div class="h-[15rem] lg:h-[17rem] xl:h-[20rem] max-w-[400px] flex items-end justify-center {load ? "" : `translate-y-[-50%]`} transition-all ease-in-out duration-[{`${((i+1)*100)}ms`}]">
                    <div class="bg-black border-2 border-black w-full h-[90%]">
                        <div class="translate-x-[-0.4rem] translate-y-[-0.4rem] size-full relative border-2 border-black {project.bg ? `bg-[${project.bg}]` : "bg-white"}">
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
                                    <i class="fa-solid fa-lock mr-2"></i>
                                    <h3 class="text-sm font-bold truncate">https://mrzt.gh</h3>
                                </span>
                            </div>

                            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                            <a class="w-full h-[83%] p-1 cursor-pointer flex flex-col items-center justify-center 
                                        {descriptions[project.key].blur ? "blur-md" : ""} transition-all duration-100 ease-linear" 
                                href="/projects/{project.key}"
                                on:mouseover={() => showDescription(project.key)} 
                                on:mouseout={() => hideDescription(project.key)}>

                                <video src="{descriptions[project.key].state ? a : project.thumnail}" class="overflow-hidden {descriptions[project.key].state ? "size-5/6" : "size-full"}" autoplay muted loop></video>
                                <h1 class="font-jersey text-5xl font-bold {descriptions[project.key].state ? "" : "hidden"}">{$l === "EN" ? "See More" : "Ver más"}</h1>
                            </a>
                        </div>
                    </div>
                </div>
            {:else if project.type === "Command Line"}
                <div class="h-[15rem] lg:h-[17rem] xl:h-[20rem] max-w-[400px] flex items-end justify-center font-mono text-white {load ? "" : `translate-y-[-50%]`} transition-all ease-in-out {`duration-[${(i+1)*100}ms]`}" style="letter-spacing: 2px;">
                    <div class="{descriptions[project.key].state ? "bg-black" : (project.bg ? project.bg : "bg-black")} w-full h-[90%] relative rounded-md">
                        <div class="w-fit gap-2 h-[15%] bg-inherit flex items-center justify-start p-2 select-none rounded-md">
                            <b class="border-2 border-red-600 size-5 rounded-full bg-red-600"></b>
                            <b class="border-2 border-yellow-500 size-5 rounded-full bg-yellow-500"></b>
                            <b class="border-2 border-green-600 size-5 rounded-full bg-green-600"></b>
                        </div>

                        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                        <a class="w-full h-[85%] p-2 cursor-pointer flex flex-col items-center justify-center 
                                    {descriptions[project.key].blur ? "blur-md" : ""} transition-all duration-100 ease-linear text-white" 
                            href="/projects/{project.key}"
                            on:mouseover={() => showDescription(project.key)} 
                            on:mouseout={() => hideDescription(project.key)}>

                            <video src="{descriptions[project.key].state ? a : project.video}" class="overflow-hidden {descriptions[project.key].state ? "filter invert size-5/6" : "size-full"}" autoplay muted loop></video>
                            <h1 class="font-jersey text-5xl font-bold {descriptions[project.key].state ? "" : "hidden"}">{$l === "EN" ? "See More" : "Ver más"}</h1>
                        </a>
                    </div>
                </div>
            {:else if project.type === "Mobile"}
                <div class="h-[15rem] lg:h-[17rem] xl:h-[20rem] max-w-[300px] flex items-end justify-center font-mono text-white" style="letter-spacing: 2px;">
                    <div class="bg-black border-2 w-2/4 border-black h-[90%] relative rounded-xl flex items-center justify-center">
                        <div class="absolute top-2 left-[50%] translate-x-[-50%] bg white w-1/4 h-1 bg-white"></div>
                        <div class="w-[90%] h-[85%] bg-white rounded-md flex items-center justify-center">

                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                            <div class="size-full p-4 cursor-pointer">
                                <video src="{a}" class="size-full" autoplay muted loop></video>                               
                            </div>
                        </div>
                        <div class="absolute bottom-1 left-[50%] translate-x-[-50%] bg white size-4 bg-white rounded-full"></div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<style lang="postcss">
    .top {
        @apply absolute top-[-8%] left-[-0.65%]
        border-2 border-black border-r-[200px]
        bg-black
        w-2/4 h-[12%];
        clip-path: polygon(0 1%, 85% 0, 100% 100%, 0% 100%);
    }
    .bot {
        @apply bg-black 
        w-[100.7%] h-[17%];
    }
    
</style>