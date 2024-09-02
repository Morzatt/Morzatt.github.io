<script lang="ts">
    import { onMount } from "svelte";
    import {l} from "$lib/stores/language.store"
    import resumeInfo from "./Resume"
    let load = false 
    let labors: Record<string | number, boolean> = {}
    let techs: Record<string | number, boolean> = {}

    onMount(() => {
        setTimeout(() => {
            load = true       
        }, 1);

        ($l === "EN" ? resumeInfo.experiences.enExperiences:resumeInfo.experiences.esExperiences).forEach((ex) => {
            labors[ex.id] = false;
        });

        resumeInfo.techSkills.forEach((tech) => {
            techs[tech.name] = false;
        })
    })            
</script>

<div id="resume" class="w-full h-full flex flex-col lg:flex-row items-center lg:justify-around relative"> 
    <!-- EXPERIENCE -->
    <div class="box {load ? "loaded" : "notload"} transition-all duration-200
    grid grid-cols-1 gap-4 p-3 overflow-y-scroll">
        {#each $l == "EN" ? resumeInfo.experiences.enExperiences : resumeInfo.experiences.esExperiences as experience}
            <div class="w-full h-fit border-2 border-black bg-gray-200 {experience.id === 1 ? "duration-[300ms]" : "duration-[350ms]"} {load ? "" : "translate-x-[-80%]"} transition-all ease-in">
                <div class="size-full border-2 border-inherit bg-white translate-x-[-0.40rem] translate-y-1 p-2 relative">
                    <span class="w-fit gap-2 px-3 my-2 flex justify-around items-center bg-blue-200 rounded-lg text-sm">
                        <b>{experience.date.from}</b> 
                        <i>-</i>
                        <b>{experience.date.to}</b>
                    </span>

                    <h3 class="text-md text-gray-500">{experience.name}</h3>
                    <h1 class="text-lg font-semibold">{experience.role}</h1>

                    <ul class="my-2 {labors[experience.id] ? "" : "max-h-[7rem]"} overflow-clip">
                        {#each experience.labours as labor}
                            <li class="break-words labor">{labor}</li>
                        {/each}
                    </ul>
                    
                    <div class="w-full h-fit text-right">
                        <button class="px-3 text-xl" on:click={() => labors[experience.id] = !labors[experience.id]}>
                            <i class="fa-solid fa-sort-down {labors[experience.id] ? "rotate-180" : ""} transition-all duration-50 ease-in-out"></i>
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <!-- SKILLS -->
    <div class="box {load ? "loaded" : "notload"} transition-all duration-300i overflow-y-scroll">
        <h1 class="text-3xl font-bold mb-4 text-center md:text-left">Technologies</h1>
        <div class="w-full grid grid-cols-2 gap-4 p-4">
            {#each resumeInfo.techSkills as skills, i}
                <div class="min-w-fit border-2 border-dashed border-black p-2 flex items-center justify-center flex-col rounded-md
                duration-[{i}00ms] transition-all ease-linear {load ? "" : `translate-y-[-100%]`} relative">

                    <!-- Frameworks -->
                    {#if skills.subTech}
                        <div class="absolute right-[-1.2%] top-[-1.5%] text-black">
                            <button class="size-fit flex items-center justify-center text-center max-h-4"
                            on:click={() => {techs[skills.name] = !techs[skills.name]}}>
                                <i class="fa-solid fa-square-caret-down transition-all duration-50 ease-in-out
                                {techs[skills.name] ? "rotate-180" : ""} text-xl">
                            </button>
                        </div>                       

                        <div class="size-fit
                            border-2 border-black
                            bg-white shadow-[2px_5px]
                            p-2 
                            {techs[skills.name] ? "scale-100": "scale-0 translate-x-[-100%]"}
                            rounded-md 
                            absolute top-[20%] left-[50%] translate-x-[-50%]
                            z-10
                            origin-top transition-all duration-200 ease-in-out">

                            <b class="text-lg w-full text-center font-semibold inline-block">Frameworks</b>

                            <div class="size-max {skills.subTech.length < 2 ? "flex items-center justify-center w-full" : "grid grid-cols-2"} gap-4 mt-1">
                                {#each skills.subTech as sub}
                                    <div class="p-2 size-fit flex flex-col items-center justify-center text-lg">
                                        <img src="{sub.icon}" alt="" class="max-w-24 max-h-10">
                                        <p class="mt-1">{sub.name}</p>
                                    </div>
                                {/each}
                            </div>

                            {#if skills.subTech?.length > 3}
                                <div class="absolute right-1 bottom-1 text-black">
                                    <button class="size-fit flex items-center justify-center text-center max-h-4"
                                    on:click={() => {techs[skills.name] = !techs[skills.name]}}>
                                        <i class="fa-solid fa-square-caret-down transition-all duration-50 ease-in-out
                                        {techs[skills.name] ? "rotate-180" : ""} text-xl">
                                    </button>
                                </div>                           
                            {/if}
                        </div>
                    {/if}

                    <!-- Tech -->
                    <div class="page">
                        <div class="page-inside p-2 translate-x-[-2px] translate-y-0.5 border-2 border-black relative">
                            <div class="page-inside border-2 bg-inherit flex items-center justify-center flex-col p-1 border-slate-400">
                                <img src="{skills.icon}" alt="" class="max-w-24 max-h-10">
                            </div> 
                        </div>
                    </div>               
                    <p class="text-lg text-center mt-1">{skills.name}</p>
                </div>
            {/each}
        </div>
    </div>
    <div class="box {load ? "loaded" : "notload"} transition-all duration-500
    grid grid-cols-2 grid-rows-6 p-4 overflow-y-scroll">
        {#each $l == "EN" ? resumeInfo.softSkills.enSoftSkills : resumeInfo.softSkills.esSoftSkills as skill}
            <div class="bg-message h-20  flex items-start justify-center relative">
                <div class="w-[77%] h-[75%] absolute top-[7%] flex items-center justify-center">
                    <h3 class="text-md text-gray-500 text-center"><i class="fa-solid fa-circle-nodes"></i> {skill}</h3>
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .bg-message {
        background-image: url("../images/14.svg");
        background-position:center;
        background-size:contain;
        background-repeat: no-repeat
    }

    .notload {
        @apply blur-sm absolute translate-x-[-100%] opacity-50;
    }

    .loaded {
        @apply blur-none relative ease-in-out opacity-100;
    }

    .box {
        @apply w-full lg:w-1/3 h-full;
    }

    .box::-webkit-scrollbar {
        display: none;
    }
    
    .page {
        @apply size-max p-[2px] bg-black; 
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%);
    }

    .page-inside {
        @apply bg-white size-full;
        clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 25%);
    }

    .labor::before {
        content: "";
        @apply size-[0.27rem] bg-black inline-flex mr-3;
    }
</style>