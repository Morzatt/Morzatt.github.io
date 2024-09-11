<script lang="ts">
    import {renderShape} from "./Render";
    import {onMount} from "svelte"

    let pause = false;
    const framerate = pause ? 0 : 16;

    let x=0,y=0,z=0;
    let screen: string[][] = [];

    $: shapeProperties = {
        donutRadius:  3.5,
        donutThicknessRadius: 1.25,
        xIncrement: pause ? 0 : 0.1,
        yIncrement: pause ? 0 : 0,
        zIncrement: pause ? 0 : 0.1,
        distanceOfDonutFromViewer: 36,
        alphaSpacing: 0.07,
        betaSpacing: 0.02,
        lightSourceX: 0,
        lightSourceY: 1,
        lightSourceZ: -1,
        screenWidth: 110,
        screenHeight: 75,
        type: 'cube'
    };

    setInterval(() => {
        screen = renderShape(x, y, z, shapeProperties);
        x += shapeProperties.xIncrement;
        y += shapeProperties.yIncrement;
        z += shapeProperties.zIncrement;
    }, 1000/framerate)

    let isVisible = false;
    let element: HTMLDivElement;
    let observer: IntersectionObserver;

    $: {
        if (isVisible) {
            pause = false;
        } else {
            pause = true;
        };
    }

    onMount(() => {
        observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        });

        observer.observe(element);
    });
</script>

<div class="size-fit flex items-center justify-center flex-col select-none {pause ? "animate-pulse" : ""} hover:scale-110 transition-all duration-300 cursor-pointer drop-shadow-xl" on:click={() => pause = !pause}
    bind:this={element}>

    {#each screen as row}
        <div class="font-mono md:leading-3 md:tracking-[4px] whitespace-nowrap sm:leading-[8px] text-sm sm:tracking-widest leading-[6px]">
            {#each row as char}
                {#if (char === ' ')}
                    <span>&nbsp;</span>
                {:else}
                    {char}
                {/if}
            {/each}
        </div>
    {/each}
    </div>