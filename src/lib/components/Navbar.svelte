<script lang="ts">
    import Lang from "$lib/stores/language.store"
    import type {Languages} from "$lib/stores/language.store"
    import {setContactFormState, contentStore} from "$lib/stores/form.store"
    import logo from "$lib/images/logotg.svg"

    let lang: Languages; 

    Lang().subscribe((l) => {
        lang = l
    })
</script>

<nav class="w-full py-2 h-max">
    <div class="size-full rounded-lg bg-black pb-1 pr-1">
        <div class="size-full translate-y-[-3px] translate-x-[-2px] p-2 lg:px-5
                   flex items-center justify-around md:justify-between
                   bg-white border-2 border-black rounded-lg">

            <div class="flex items-center justify-center text-xl">
                <img src="{logo}" alt="logo" class="size-10 scale-150 hidden md:block">
                <p class="font-baloo font text-white font-extrabold drop-shadow-[2px_2px] shadow-blue-700 hidden lg:block">CDev</p>
            </div>
            
            <ul class="flex items-center justify-center w-full md:w-3/6 lg:w-2/6"> 
                <li>
                    <a href="/">
                        <i class="fa-solid fa-house"></i>
                        <b>{lang === "EN" ? "Home" : "Inicio"}</b>
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
                        href="/#contact" on:click={() => { contentStore.set("about") ;setContactFormState().showContactForm() }}>
                        <i class="fa-regular fa-envelope"></i>
                        <b>{lang === "EN" ? "Contact" : "Contacto"}</b>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap');

    .font-baloo {
        font-family: "Baloo 2", sans-serif;
        font-optical-sizing: auto;
        font-style: normal; 
    }
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