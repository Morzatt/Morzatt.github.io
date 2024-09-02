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
    import plus_sign from "$lib/images/circle1.svg"
    import diamond from "$lib/images/diamond2.svg"
    import timer from "$lib/images/timer.gif"

    type Content = "resume" | "about";
    let content: Content = "about";

    let isVisible = false;
    let element: HTMLDivElement;
    let load = false
    onMount(() => {
        const observer = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
        });

        observer.observe(element);

        setTimeout(() => {
            load = true
        }, 3000)

        return () => {
            observer.unobserve(element);
        };
    });
</script>

<main class="p-4 h-[100vh]">
    <section class="size-full title relative">

        <div class="sq1 z-10">
            <h1 class="font-pixel tracking-wide">Software=["Services"];</h1>
            <p>{$l === "EN" ? 
                "< Development, Deployment and Maintenance of Full Stack Web Applications. />" : 
                "< Desarrollo, Despligue y Mantenimiento de Aplicaciones Web Full Stack. />"}
            </p>
        </div>


        <div class="ps-1 z-0">
            <img src="{plus_sign}" alt="">
        </div>

        <div class="diamond-1 z-0">
            <img src="{diamond}" alt="">
        </div>

        <div class="ps-2 z-0">
            <img src="{plus_sign}" alt="">
        </div>

        <div class="diamond-2 z-0">
            <img src="{diamond}" alt="">
        </div>

        <div class="w-full h-2/3 md:w-[55%] md:h-[65%] xl:w-[35%] xl:h-[65%] absolute right-0 bottom-[-40%] md:bottom-[-50%] xl:bottom-14 z-10">
            <div class="sq2 {load ? "bg-white" : "bg-white"}">
                {#if load}
                    <!-- <div class="size-[99%] flex items-center justify-center overflow-hidden"><Shape/></div> -->
                {:else}
                    <img src="{timer}" alt="">
                {/if}

                <p>{`< Efficient Software />`}</p>
            </div>
        </div>

        <div class="w-full h-2/4 md:h-[40%] md:w-[55%] hidden md:flex md:absolute md:left-[-5%] xl:left-0 bottom-8 min-[900px]:bottom-20 z-10">
            <div class="sq3 ">
                <p>{`< Long Term Service Deployment />`}</p>
            </div>
        </div>
    </section>

    <div class="my-16 md:mt-[350px] xl:mt-20 hidden items-center md:flex pb-20 gap-4 text-xl">
        <span class="w-64 block bg-black h-[1px]"></span>
        <h3>#Web Development</h3>
    </div>

    <section class="w-full h-fit lg:h-full flex flex-col items-center justify-center mt-[300px] md:mt-0" id="contact">
        <div class="w-full h-fit flex items-center justify-start">
            <div class="md:w-1/4 w-full py-1 flex items-center justify-around font-bold text-lg">
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

    <section class="w-full h-fit min-h-[100vh] mt-20">
        <Projects/>
    </section>
</main>

<style lang="postcss">
    .title {
        @apply  h-full w-full md:text-left text-center;
    }

    .title .sq1 {
        @apply relative
        z-10
        w-full lg:w-fit
        py-10 px-2 p-2
        border-[3px] border-gray-900 rounded-md
        bg-white shadow-[-2px_7px]; 
    }

    .title .sq1 h1 {
        @apply text-5xl md:text-6xl
        text-center lg:text-left
        w-full
        font-bold break-words;

        /* animation: typing 2s steps(26); */
    }
    .title .sq1 h1::after {
        content: "";
        border: 10px solid black;
        animation:cursor .4s step-end infinite alternate;
    }
    .title .sq1 p {
        @apply text-sm font-bold text-center 
        w-[90%] md:w-4/6 px-8 py-2
        bg-green-600 rounded-full 
        shadow-[-7px_7px] shadow-green-900
        absolute bottom-[-25%] md:bottom-[-20%] left-[50%] translate-x-[-50%];
    }

    .ps-1 {
        @apply size-14 absolute
        z-0
        top-[60%] right-[42%] 
        min-[425px]:top-[50%]
        md:top-[50%] md:right-[10.15%]
        lg:right-[2%] lg:top-[10%]
        xl:right-[15%]
        flex items-center justify-center; 
    }

    .ps-1 img {
        @apply size-full;
    }

    .ps-1::before {
        @apply w-[2px] bg-gray-900
        left-[50%] 
        top-[-245%] h-[250%]
        lg:h-[3px] lg:top-[50%] lg:left-[-800%] lg:w-[809%]
        absolute;
        content: ""
    }

    .ps-1::after {
        @apply w-[2px]  bg-gray-900
        h-[260%] bottom-[-255%] left-[50%] absolute
        lg:h-[600%] lg:bottom-[-595%];
        content: ""
    }

    .diamond-1 {
        @apply size-14 absolute
        z-0
        top-[60%] left-[10%]
        md:top-[70%] md:left-[60%]
        min-[900px]:top-[58%]
        xl:left-[57%] xl:top-[60%]
        flex items-center justify-center; 
    }

    .diamond-1 img {
        @apply size-full;
    }

    .diamond-1::before {
        @apply  bg-gray-900 absolute
        bottom-[-300%]  w-[2px] h-[300%] 
       xl:bottom-[49%] xl:h-[2px] xl:w-[300%] xl:right-[-299%];
        content: ""
    }

    .diamond-1::after {
        @apply w-[2px]  bg-gray-900
        left-[48.5%]
        h-[450%] top-[-450%]
        md:h-[2px] md:w-[500%] md:left-[-500%] md:top-[48.5%]
        xl:bottom-[52%] xl:h-[2px] xl:w-[300%] xl:left-[-300%]
        absolute rounded-b-full;
        content: ""
    }

    .ps-2 {
        @apply size-14 
        hidden absolute
        z-0
        /* top-[50%] right-[10%]
        md:top-[70%] md:right-60%]
        min-[900px]:top-[58%]
        lg:right-[57%] lg:top-[32.5%] */
        top-[57%] right-[42%]
        min-[425px]:top-[50%]
        min-[500px]:right-[calc(42%-10.5rem)]
        min-[640px]:right-[calc(42%-14rem)]
        md:top-[42.5%] md:left-[45%]
        min-[900px]:top-[31.5%]
        lg:flex items-center justify-center; 
    }

    .ps-2 img {
        @apply size-full relative;
    }

    .ps-2::before {
        @apply w-[265px] h-[2px] bg-gray-900
        top-[46%] right-[-265px] absolute;
        content: ""
    }

    .ps-2::after {
        @apply w-[2px] h-[50px] bg-gray-900
        left-[53%] bottom-[-46px] absolute
        ;
        content: ""
    }

    .diamond-2 {
        @apply size-14 absolute
        z-0
        top-[60%] right-[calc(42%-7rem)]
        min-[425px]:top-[50%]
        min-[500px]:right-[calc(42%-10.5rem)]
        min-[640px]:right-[calc(42%-14rem)]
        md:top-[42.5%] md:left-[7%]
        min-[900px]:top-[32%]
        flex items-center justify-center; 
    }

    .diamond-2 img {
        @apply size-full;
    }

    .diamond-2::before {
        @apply  bg-gray-900 absolute
        bottom-[47%]  w-[3.5rem] h-[2px] left-[-3.5rem]
        min-[500px]:w-[7rem] min-[500px]:left-[-7rem]
        min-[640px]:w-[10.5rem] min-[640px]:left-[-10.5rem]

        md:w-[2px] md:h-[200%] md:left-[48%] md:bottom-[-200%];

        /* xl:bottom-[49%] xl:h-[2px] xl:w-[300%] xl:right-[-299%]; */
        content: ""
    }

    .diamond-2::after {
        @apply w-[2px]  bg-gray-900
        left-[48.5%]
        h-[350%] top-[-350%]
        md:h-[200%] md:w-[2px] md:left-[48%] md:top-[-200%]
        /* xl:bottom-[52%] xl:h-[2px] xl:w-[300%] xl:left-[-300%] */
        absolute rounded-b-full;
        content: ""
    }

    .title .sq2 {
        @apply border-[3px] border-gray-900 size-full flex items-center justify-center 
        rounded-[4rem] rounded-tr-none rounded-bl-none shadow-[-7px_7px] ;
    }

    .title .sq2 p {
        @apply text-sm font-bold text-center 
        w-4/6 px-8 py-2
         bg-pink-600 rounded-full 
         absolute bottom-[-4%] left-[50%] translate-x-[-50%] shadow-[-7px_7px] shadow-red-900;
    }

    .title .sq3 {
        @apply border-[3px] border-gray-900 size-full 
        flex items-center justify-around
        rounded-full shadow-[-7px_7px] bg-white relative;
    }

    .title .sq3 p {
        @apply text-sm font-bold text-center 
        w-4/6 px-8 py-2
         bg-blue-500 rounded-full 
         absolute bottom-[-4%] left-[50%] translate-x-[-50%] shadow-[-7px_7px] shadow-blue-900;
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