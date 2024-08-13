<script lang="ts">
    import ES from "$lib/images/es.png"
    import EN from "$lib/images/en.png"
    import Lang from "$lib/stores/language.store"
    import type {Languages} from "$lib/stores/language.store"
    import Shape from "./Shape/Shape.svelte";

    let lang: Languages; 

    Lang().subscribe((l) => {
        lang = l
    })
</script>

<nav class="w-full py-2 h-max">
    <div class="size-full rounded-lg bg-black pb-1 pr-1">
        <div class="size-full translate-y-[-3px] translate-x-[-2px] p-2
                   flex items-center justify-around md:justify-between
                   bg-white border-2 border-black rounded-lg">

            <img src="" alt="logo" class="size-10 bb hidden md:block ml-2">
            
            <ul class="flex items-center justify-center w-full md:w-3/6 lg:w-2/6"> 
                <li>
                    <a href="/">
                        <i class="fa-solid fa-house"></i>
                        <b>{lang === "EN" ? "About" : "Acerca De"}</b>
                    </a>           
                </li>
                <li>
                    <a href="/#projects">
                        <i class="fa-solid fa-diagram-project"></i>
                        <b>{lang === "EN" ? "Projects" : "Proyectos"}</b>
                    </a>
                </li>
                <li>
                    <a class="border-2 size-full rounded-lg py-1
                        border-black bg-black text-white hover:text-black hover:bg-white
                        flex items-center justify-center gap-1 hover:shadow-lg"
                        href="/#contact">
                        <i class="fa-regular fa-envelope"></i>
                        <b>{lang === "EN" ? "Contact" : "Contacto"}</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style lang="postcss">
    li{
        @apply w-1/3 flex items-center justify-center font-semibold
        md:px-2; 
    }
    li a {
        @apply gap-1 hover:gap-3 hover:drop-shadow-lg 
        transition-all duration-200 ease-linear 
        flex items-center justify-center
        max-[360px]:flex-col;
    }
    li a b {
        @apply font-semibold;
    }
</style>