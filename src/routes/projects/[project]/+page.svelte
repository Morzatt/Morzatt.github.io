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
    function touchStart(index) {
      return function (event) {
        startPos = getPositionX(event);
        isDragging = true;
      };
    }

    function touchMove(event) {
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
    function getPositionX(event) {
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
class="w-full h-fit lg:h-[100vh] flex flex-col lg:flex-row items-center justify-around p-4 bb">
    <!-- LEFT -->
    <div class="w-full h-fit lg:w-2/4 lg:h-full lg:p-4 lg:px-6 bb">
        <!-- PLAYER -->
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

    <!-- RIGHT -->
    <div class="w-full h-[100vh] lg:w-2/4 lg:h-full flex items-center justify-center border-2 border-red-600 mt-12 lg:mt-0">
        <div class="w-[10%] hidden lg:block">
            <button class="w-full px-4 py-2 text-6xl" on:click={prevPage}>{`<`}</button>
        </div>

        <div class="w-full lg:w-[80%] h-full p-2 relative overflow-hidden bb select-none">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="main-carousel duration-500" on:dragstart|preventDefault bind:this={slider}>
                <div class="carousel-cell z-20" on:dragstart|preventDefault>
                    <h1 class="bg-white border-2 border-black p-4 text-4xl transition-all duration-[580ms]
                    shadow-[2px_4px] rounded-lg">{project.ldescription}</h1>
                </div>
                <div class="carousel-cell z-10">                    <h1 class="bg-white border-2 border-black p-4 text-4xl transition-all duration-[580ms]
                    shadow-[2px_4px] rounded-lg">{project.description}</h1></div>
                <div class="carousel-cell z-00">
                    <h1 class="bg-white border-2 border-black p-4 text-4xl transition-all duration-[580ms]
                    shadow-[2px_4px] rounded-lg">{project.ldescription}</h1>
                </div>
            </div>
        </div>

        <div class="w-[10%] hidden lg:block">
            <button class="w-full px-4 py-2 text-6xl" on:click={nextPage}>{`>`}</button>
        </div>
    </div>
</section>

<style lang="postcss">
    .main-carousel {
        @apply border-red-600 flex items-center justify-around gap-3 w-[300%] h-full absolute;
        transition: all 500ms cubic-bezier(0.955, 0.340, 0.090, 1.385);
        transition-timing-function: cubic-bezier(0.955, 0.340, 0.090, 1.385); 
    }
    .carousel-cell {
        @apply border-blue-600 size-full;
    }
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