<!-- svelte-ignore tag-option-deprecated -->
<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<script lang="ts">
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    import Footer from "$lib/components/Footer.svelte"
    import ES from "$lib/images/es.png"
    import EN from "$lib/images/en.png"
    import Lang from "$lib/stores/language.store"
    import type {Languages} from "$lib/stores/language.store"
    let lang: Languages; 

    Lang().subscribe((l) => {
        lang = l
    })
</script>

<body class="w-full h-[100vh]">
    <div class="w-full px-4 md:px-12 h-max">
        <Navbar/>
        <slot></slot>
    </div>

    <span class="bg-black fixed bottom-2 left-2 md:bottom-5 md:left-5 rounded-full hover:drop-shadow-2xl">
        <button on:click={() => Lang().switchLang()} class="translate-x-1 bg-white border-2 border-black p-2 rounded-full">
            <img src="{lang === "EN" ? EN : ES}" alt="lang-flag" id="en" class="size-[2rem] md:size-[2.5rem] active:blur-sm active:scale-110 transition-all duration-200 ease-linear">
        </button>
    </span>
    <!-- <Footer/> -->
</body>

<style lang="postcss">

     body {
        @apply transition-all duration-300 ease-linear;
    --tw-bg-opacity: 1;
    --s: 50px; /* control the size*/
    --c1: #e6e6e6;
    --c2: rgb(246 246 246 / var(--tw-bg-opacity));;
        
    --_g: #0000 90deg,var(--c1) 0;
    background: 
        /* Smaller One */
        conic-gradient(from 90deg at 1px 1px,var(--_g)),
        /* Bigger One */
        conic-gradient(from 90deg at 1px 1px,var(--_g)),
        var(--c2);
    background-size: var(--s) var(--s), calc(var(--s)/5) calc(var(--s)/5);
    } 
</style>