<script lang="ts">
    import { onMount } from "svelte";
    import {l} from "$lib/stores/language.store"
    import resumeInfo from "./Resume"
    let load = false 
    onMount(() => {
        setTimeout(() => {
            load = true       
        }, 1);
    })            
</script>

<div id="resume" class="w-full h-full flex flex-col lg:flex-row items-center lg:justify-around relative"> 
    <!-- EXPERIENCE -->
    <div class="box {load ? "loaded" : "notload"} transition-all duration-200
    grid grid-cols-1 gap-4 p-4 overflow-y-scroll">
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

                    <ul class="my-2">
                        {#each experience.labours as labor}
                            <li class="break-words">{labor}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
    <!-- SKILLS -->
    <div class="box {load ? "loaded" : "notload"} transition-all duration-300 overflow-y-auto">
        <h1 class="text-3xl font-bold mb-4 text-center md:text-left">Technologies</h1>
        <div class="w-full grid grid-cols-2 gap-4 p-4 overflow-clip">
            {#each resumeInfo.techSkills as skills}
                <div class="min-w-fit border-2 border-dashed border-black p-2 flex items-center justify-center flex-col rounded-md">
                    <div class="page">
                        <div class="page-inside p-2 translate-x-[-2px] translate-y-0.5 border-2 border-black">
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
</style>