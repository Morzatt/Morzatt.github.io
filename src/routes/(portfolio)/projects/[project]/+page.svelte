<svelte:head>
    <title>{project.title} - TineoDev</title>
</svelte:head>

<script lang="ts">
    export let data;
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import {onMount} from "svelte"
    import Projects from "$lib/components/Projects";
    import type {Project} from "$lib/components/Projects";
    import {l} from "$lib/stores/language.store.js"

    let load = false

    let project: Project;
    $: {
        project = ($l === "EN" ? Projects.enProjects : Projects.esProjects).filter((p) => {
            return p.key === data.p
        })[0]
    }

    // DOM Elements
  let slider: any;

    function nextPage() {
        if (currentIndex < 2) {
            currentIndex += 1
            setPositionByIndex()
        }
    }
    function prevPage() {
        if (currentIndex > 0) {
            currentIndex -= 1
            setPositionByIndex()
        }
    }

    $: currentIndex = 0
  // State
  let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    yAxis = 0,
    xAxis = 0;

  onMount(() => {
    setTimeout(() => {
       load = true; 
    }, 50);
    const slides = document.querySelectorAll('.carousel-cell');

    slides.forEach((slide, index) => {
      // Touch event listeners
      slide.addEventListener('touchstart', touchStart(index));
      slide.addEventListener('touchend', touchEnd);
      slide.addEventListener('touchmove', touchMove);

      // Mouse event listeners
      slide.addEventListener('mousedown', touchStart(index));
      slide.addEventListener('mouseup', touchEnd);
      slide.addEventListener('mouseleave', touchEnd);
      slide.addEventListener('mousemove', touchMove);
    });

    // Event callbacks
    function touchStart(index: number) {
      return function (event: any) {
        startPos = getPositionX(event);
        yAxis = getPositionY(event); 
        isDragging = true;
      };
    }

    function touchMove(event: any) {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;

        xAxis = currentPosition
        yAxis = getPositionY(event)

        if (xAxis > yAxis) { 
            setSliderPosition();            
        }
      }
    }

    function touchEnd() {
        isDragging = false;
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
        if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
        setPositionByIndex();
    }


    // Helper functions
    function getPositionX(event: any) {
      return event.type.includes('mouse')
        ? event.pageX
        : event.touches[0].pageX;
    }

    function getPositionY(event: any) {
      return event.type.includes('mouse')
        ? event.pageY
        : event.touches[0].pageY;
    }

    function setSliderPosition() {
      slider.style.transform = `translateX(-${-currentTranslate}px)`;
    }
  });

    function setPositionByIndex() {
        currentTranslate = currentIndex * -100;
        prevTranslate = currentTranslate;
        slider.style.left = `-${currentIndex*100}%`;
        slider.style.transform = `translateX(0px)`;
    }
</script>

<section transition:fly={{ duration: 200, y: 500, opacity: 0.5, easing: quintOut }}
class="relative w-full min-h-screen flex flex-col lg:flex-row items-start justify-around lg:p-4 ease-linear duration-200 transition-all">
    <!-- LEFT / TOP --> 
    <div class="w-full lg:w-2/4 lg:p-4 lg:px-6 lg:min-h-[50rem]">
        <!-- PLAYER -->
        <div class="h-fit w-full relative rounded-md border-2 border-black bg-white shadow-[4px_7px]">
            <div class="w-full h-fit border-b-2 border-inherit">
                <div class="w-fit gap-2 h-[fit] bg-inherit flex items-center justify-start p-1 select-none rounded-md">
                    <b class="size-5 rounded-full bg-red-600"></b>
                    <b class="size-5 rounded-full bg-yellow-500"></b>
                    <b class="size-5 rounded-full bg-green-600"></b>
                </div>
            </div>
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <div class="w-full h-[13rem] min-[370px]:h-[15rem] min-[480px]:h-[17rem] min-[580px]:h-[19rem] min-[680px]:h-[22rem] md:h-[24rem] min-[860px]:h-[26rem] lg:h-[20rem] p-1 flex flex-col items-center justify-center 
                    transition-all duration-100 ease-linear text-white">
                <!-- <video src="{project.video}" class="overflow-hidden size-full rounded-md" autoplay muted loop></video> -->
                <iframe src="{project.video}" width="100%" height="100%" allow="autoplay" title="project-video" class="rounded-md"></iframe>
            </div>
        </div>
        <!-- PLAYER -->

        <div class="w-full h-fit mt-4">
            <div class="flex flex-col items-center justify-around">
                <div class="flex flex-col xl:flex-row w-full items-center justify-center gap-2 xl:justify-around xl:gap-8 ">
                    <h1 class="font-jersey font-bold text-8xl text-center">{project.title}</h1>   

                    <span class="w-full xl:w-fit px-12 flex items-center justify-around ">
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
                        {#each project.tags as tag}
                            <div class="bg-gray-300 mx-3 px-2 py-1 rounded-md text-center text-slate-700 inline-block">
                                <i class="fa-solid fa-hashtag"></i> <b>{tag}</b>
                            </div>
                        {/each}
                    </div>
                    <div class="slider-inside">
                        {#each project.tags as tag}
                            <div class="bg-gray-300 mx-3 px-2 py-1 rounded-md text-center text-slate-700 inline-block">
                                <i class="fa-solid fa-hashtag"></i> <b>{tag}</b>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>

            <h3 class="font-semibold text-center text-xl break-words mt-4 w-full">{project.description}</h3>
        </div>
    </div>

    <!-- RIGHT / BOTTOM -->
    <div class="w-full h-[45rem] xl:h-[50rem] lg:w-2/4 flex items-center justify-start mt-[6rem] lg:mt-0 relative">
        <div class="absolute bottom-[-3rem] left-[50%] translate-x-[-50%] z-50
        w-fit gap-4 h-[fit] bg-inherit flex items-center justify-start p-1 select-none rounded-md transition-all duration-300 ease-linear">
            <b class="size-4 rounded-full {currentIndex === 0 ? "bg-gray-800" : "bg-gray-400"}"></b>
            <b class="size-4 rounded-full {currentIndex === 1 ? "bg-gray-800" : "bg-gray-400"}"></b>
            <b class="size-4 rounded-full {currentIndex === 2 ? "bg-gray-800" : "bg-gray-400"}"></b>
        </div>

        <div class="w-[4.5rem] absolute lg:static left-0 top-[-5rem] border-2 border-black bg-white rounded-lg">
            <button class="slider-button translate-x-[-5px] translate-y-[5px] active:translate-x-0 active:translate-y-0" on:click={prevPage}>{`<`}</button>
        </div>

        <div class="w-full lg:w-[90%] h-[44rem] xl:h-[49rem] p-1 relative overflow-hidden select-none">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- MAIN CAROUSEL -->
            <div class="main-carousel duration-500" on:dragstart|preventDefault bind:this={slider}>
                <!-- CAROUSEL CELL #1 -->
                <div class="carousel-cell z-20 max-h-[40rem] xl:max-h-[44rem] overflow-y-auto" on:dragstart|preventDefault>
                    <div class="w-full flex items-center justify-center">
                        <div class="main-title-out ">
                            <h2 class="main-title-in bg-black">{$l === "EN" ? "Description" : "Descripción"}</h2>
                        </div>
                    </div>

                    <div class="border-2 border-black p-2 rounded-lg bg-clg">
                        <h1 class="text-[1.1rem]">{project.ldescription}</h1>
                    </div>

                    <div class="w-full flex items-center justify-center">
                        <div class="main-title-out mt-8">
                            <h2 class="main-title-in bg-black">{$l === "EN" ? "Technologies" : "Tecnogologías"}</h2>
                        </div>
                    </div>

                    <div class="w-full h-fit flex items-center justify-around flex-wrap gap-3">
                        {#each project.technologies as tech}
                            <div class="border-2 border-black bg-clg h-20 w-fit flex items-center shrink grow justify-center flex-col px-2 py-4 shadow-[3px_5px]">
                                <img src="{tech.icon}" alt="" class="max-w-[100%] max-h-[100%]">
                                <h1>{tech.name}</h1>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- CAROUSEL CELL #2 -->
                <div class="carousel-cell z-10 max-h-[40rem] xl:max-h-[48rem] w-full overflow-x-visible overflow-y-auto">
                    <div class="w-full flex items-center justify-center">
                        <div class="main-title-out ">
                            <h2 class="main-title-in bg-black">{$l === "EN" ? "Features" : "Características"}</h2>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 gap-6">
                        {#if project.features}
                            {#each project.features as feature}
                                <div class="border-2 border-black bg-gray-200">
                                    <div class="size-full border-2 border-inherit bg-gray-200 translate-x-[-0.30rem] translate-y-1">
                                        <div class="size-full border-2 border-inherit bg-gray-200 translate-x-[-0.30rem] translate-y-1">
                                            <div class="size-full border-2 border-inherit bg-white translate-x-[-0.30rem] translate-y-1 p-[0.60rem] relative">
                                                <h1 class="text-lg font-semibold">{feature.title}</h1>
                                                <p class="text-md text-gray-500 break-words">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/each}
                        {/if}
                    </div>
                </div>

                <!-- CAROUSEL CELL #3 -->
                <div class="carousel-cell z-00">
                    <div class="w-full flex items-center justify-center">
                        <div class="main-title-out">
                            <h2 class="main-title-in bg-black">{$l === "EN" ? "Gallery" : "Galería"}</h2>
                        </div>
                    </div>
                    
                    <div class="w-full max-h-[38rem] xl:max-h-[44rem] overflow-y-auto grid grid-cols-2 grid- gap-2">
                        {#if project.images}
                            {#each project.images as image, i}
                                <a href="/projects/{project.key}/{i}">
                                    <img src="{image}" alt="" class="border-2 border-black p-1 cursor-pointer bg-clg">
                                </a>
                            {/each}                       
                        {/if}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-[4.5rem] absolute lg:static right-0 top-[-5rem]  bg-white border-2 border-black rounded-lg">
            <button class="slider-button translate-x-[5px] translate-y-[5px] active:translate-x-0 active:translate-y-0" on:click={nextPage}>{`>`}</button>
        </div>
    </div>
</section>

<style lang="postcss">
    .no-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    .no-scrollbar::-webkit-scrollbar {
        display: none;
        scrollbar-width: none;
        overflow: auto;
        -ms-overflow-style: none;
    }

    .main-carousel {
        @apply flex items-start justify-around gap-3 w-[300%] h-full absolute cursor-grab ;
        transition: all 500ms cubic-bezier(0.955, 0.340, 0.090, 1.385);
        transition-timing-function: cubic-bezier(0.955, 0.340, 0.090, 1.385); 
    }
    .carousel-cell {
        @apply size-full p-2;
    }

    .slider {
        @apply whitespace-nowrap flex items-center justify-around text-sm px-2 w-full overflow-hidden rounded-md;
    }

    .slider-inside {
        display: inline-block;
        animation: 25s slide infinite linear;
    }

    .slider-button {
        @apply w-full h-fit max-h-[10rem]
        px-4 py-2
        rounded-md
        bg-black text-white
        text-4xl
        flex items-center justify-center
        transition-all duration-100 ease-in z-20 relative;
    }

    .slider-button:active {
        @apply bg-white text-black border-none border-black;
    }

    @keyframes slide {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(-100%);
        }
    }
    .main-title-out {
        @apply size-fit bg-white border-2 border-black text-white font-bold text-xl mb-4;
    }
    .main-title-in {
        @apply size-full
        px-8 p-1
        border-2 border-black 
        scale-[.96]
        translate-y-[0.35rem]
        transition-all duration-100 ease-in-out;
    }
</style>