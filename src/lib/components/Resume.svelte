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
        {#each $l == "EN" ? resumeInfo.enExperiences : resumeInfo.esExperiences as experience}
            <div class="border-2 border-black bg-white {experience.id === 1 ? "duration-[300ms]" : "duration-[350ms]"} {load ? "" : "translate-x-[-80%]"} transition-all ease-in
            pb-20">
                <div class="size-full border-2 border-inherit bg-white translate-x-[-0.40rem] translate-y-1 p-2 relative">
                    <button class="size-max absolute top-1 right-3">
                        <!-- <img src="" alt="" class="bb size-5"> -->
                        <h1 class="font-bolder text-lg">X</h1>
                    </button>

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
    <div class="box {load ? "loaded" : "notload"} transition-all duration-500">
        <div class="flex flex-col justify-center items-start h-full w-full ">
            <div class="bb w-full h-2/4">2</div>
            <div class="bb w-full h-2/4">3</div>
        </div>
    </div>
    <!-- EDUCATION -->
    <div class="box {load ? "loaded" : "notload"} transition-all duration-700 ">1</div>
</div>

<style lang="postcss">
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
</style>