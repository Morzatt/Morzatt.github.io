<!-- svelte-ignore tag-option-deprecated -->
<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<script lang="ts">
    import {l} from "$lib/stores/language.store"
    import Shape from "$lib/components/Shape/Shape.svelte";
    import AboutMe from "$lib/components/AboutMe.svelte"
    import Resume from "$lib/components/Resume.svelte"
    import { onMount } from "svelte";
    import Projects from "$lib/components/Projects.svelte"

    type Content = "resume" | "about";
    let content: Content = "about";

    let isVisible = false;
    let element: HTMLDivElement;

    onMount(() => {
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        });

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    });
</script>

<main class="p-4 h-[100vh]">
    <section class="size-full title relative">
        <h1>{$l === "EN" ? 'Software = { "Services" };' : 'Ingeniero = De["Software."];'}</h1>
        <p>{$l === "EN" ? 
            "Development, Deployment and Maintenance of Full Stack Web Applications." : 
            "Desarrollo, Despligue y Mantenimiento de Aplicaciones Web Full Stack"}
        </p>

        <div class="md:w-2/4 w-full h-2/5 md:h-4/6 overflow-hidden flex items-center justify-center absolute right-0 bottom-14">
            <Shape/>
        </div>
    </section>

    <div class="mb-20 hidden items-center md:flex pb-20 gap-4 text-xl">
        <span class="w-64 block bg-black h-[1px]"></span>
        <h3>#Web Development</h3>
    </div>

    <section class="w-full h-fit lg:h-full flex flex-col items-center justify-center" id="contact">
        <div class="w-full h-fit flex items-center justify-start">
            <div class="md:w-1/4 w-full py-1 flex items-center justify-around ">
                <button class="{content === "about" ? "border-b-2" : ""} border-black" 
                on:click={() => content = "about"}>{$l === "EN" ? "About Me" : "Sobre Mi"}</button>

                <button class="{content === "resume" ? "border-b-2" : ""} border-black" 
                on:click={() => content = "resume"}>{$l === "EN" ? "Resume" : "Resúmen"}</button>
            </div>
        </div>
        {#key isVisible}
            <div bind:this={element} class="lg:size-[90%] size-full my-2">
                {#if content === "about"}
                    <AboutMe/>               
                {:else if content === "resume"}
                    <Resume/> 
                {/if}
            </div>           
        {/key}
    </section>

    <br>

    <section class="w-full h-fit lg:h-full mt-20">
        <Projects/>
    </section>
</main>

<style lang="postcss">
    .title {
        @apply border-black h-full w-full md:text-left text-center;
    }
    .title p {
        @apply mt-4 w-full md:w-2/4;
    }
    .title h1 {
        letter-spacing: 10px;
        animation: typing 2s steps(24), cursor .4s step-end infinite alternate;
        @apply font-bold md:whitespace-nowrap md:mt-10 text-6xl w-full border-r-[10px] border-black md:overflow-hidden md:break-words;
    }

    @keyframes cursor {
        50% {
            border-color: transparent;
        }
    }
    @keyframes typing {
        from {
            width: 0;
        }
    }
</style>