<!-- svelte-ignore tag-option-deprecated -->
<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<script lang="ts">
    import "../../app.css"
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

<body class="h-screen">
    <div class="w-full h-fit px-4 md:px-12 relative pb-[18rem] min-[360px]:pb-[17rem] md:pb-[15rem]">
        <Navbar/>
        <slot></slot>

        <div class="size-max bg-black sticky bottom-16 lg:bottom-4 left-[-3%] rounded-full hover:drop-shadow-2xl z-50">
            <button on:click={() => Lang().switchLang()} class="translate-x-1 bg-white border-2 border-black p-2 rounded-full">
                <img src="{lang === "EN" ? EN : ES}" alt="lang-flag" id="en" class="size-[2rem] md:size-[2.5rem] active:blur-sm active:scale-110 transition-all duration-200 ease-linear">
            </button>
        </div>

        <Footer/>
    </div>
</body>


<style lang="postcss">

     body {
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