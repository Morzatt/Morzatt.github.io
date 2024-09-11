<script lang="ts">
    export let data;
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    import {onMount} from "svelte"
    import Projects from "$lib/components/Projects";
    import type {Project} from "$lib/components/Projects";
    import {l} from "$lib/stores/language.store.js"

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
    prevTranslate = 0;

  onMount(() => {
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
        isDragging = true;
      };
    }

    function touchMove(event: any) {
      if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
        setSliderPosition();
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
        : event.touches[0].clientX;
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
class="w-full min-h-screen flex flex-col lg:flex-row items-center justify-around p-4">

    <!-- LEFT -->
    <div class="w-full lg:w-2/4 lg:p-4 lg:px-6 ">
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
            <div class="w-full h-[fit] p-1 flex flex-col items-center justify-center 
                    transition-all duration-100 ease-linear text-white">
                <video src="{project.video}" class="overflow-hidden size-full rounded-md" autoplay muted loop></video>
            </div>
        </div>
        <!-- PLAYER -->

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

            <h3 class="font-bold font-jersey text-4xl break-words mt-4 text-center w-full">{project.description}</h3>
        </div>
    </div>

    <!-- RIGHT / BOTTOM -->
    <div class="w-full h-screen lg:w-2/4 flex items-center justify-center -2 border-red-600 mt-[7rem] lg:mt-0 relative">

        <div class="absolute top-[-12%] lg:top-auto lg:bottom-0 left-[50%] translate-x-[-50%]
        w-fit gap-4 h-[fit] bg-inherit flex items-center justify-start p-1 select-none rounded-md transition-all duration-300 ease-linear">
            <b class="size-4 rounded-full {currentIndex === 0 ? "bg-gray-800" : "bg-gray-400"}"></b>
            <b class="size-4 rounded-full {currentIndex === 1 ? "bg-gray-800" : "bg-gray-400"}"></b>
            <b class="size-4 rounded-full {currentIndex === 2 ? "bg-gray-800" : "bg-gray-400"}"></b>
        </div>

        <div class="w-[4.5rem] absolute xl:relative left-0 top-[-17%]">
            <button class="slider-button shadow-[-5px_5px]" on:click={prevPage}>{`<`}</button>
        </div>

        <div class="w-full lg:w-[80%] h-full p-2 relative overflow-hidden select-none">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="main-carousel duration-500" on:dragstart|preventDefault bind:this={slider}>
                <div class="carousel-cell z-20" on:dragstart|preventDefault>
                    <h1 class="border-2 border-black p-4 text-2xl transition-all duration-[580ms]
                    shadow-[2px_4px] rounded-lg bg-clg">{project.ldescription}</h1>

                    <div class="w-full h-fit flex items-center justify-around mt-4 flex-wrap gap-3">
                        {#each project.technologies as tech}
                            <div class="border-2 border-black h-20 w-fit flex items-center shrink grow justify-center flex-col px-2 py-4 shadow-[3px_5px]">
                                <img src="{tech.icon}" alt="" class="max-w-[100%] max-h-[100%]">
                                <h1>{tech.name}</h1>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="carousel-cell z-10">
                    <h1 class="bg-white border-2 border-black p-4 text-4xl transition-all duration-[580ms]
                    shadow-[2px_4px] rounded-lg">{project.description}</h1></div>
                <div class="carousel-cell z-00">
                    <h1 class="bg-white border-2 border-black p-4 text-4xl transition-all duration-[580ms]
                    shadow-[2px_4px] rounded-lg">{project.ldescription}</h1>
                </div>
            </div>
        </div>

        <div class="w-[4.5rem] absolute xl:relative right-0 top-[-17%]">
            <button class="slider-button shadow-[5px_5px]" on:click={nextPage}>{`>`}</button>
        </div>
    </div>

</section>

<style lang="postcss">
    .main-carousel {
        @apply border-red-600 flex items-center justify-around gap-3 w-[300%] h-full absolute cursor-grab;
        transition: all 500ms cubic-bezier(0.955, 0.340, 0.090, 1.385);
        transition-timing-function: cubic-bezier(0.955, 0.340, 0.090, 1.385); 
    }
    .carousel-cell {
        @apply border-blue-600 size-full p-1;
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
        bg-black text-yellow-200 shadow-gray-700
        text-6xl
        flex items-center justify-center
        transition-all duration-100 ease-in;
    }

    .slider-button:active {
        @apply shadow-none shadow-gray-500 bg-gray-800;
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