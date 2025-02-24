<script lang="ts">
    import {l} from "$lib/stores/language.store"
    import logo from "$lib/images/logotg.svg"
    import {setContactFormState, contentStore} from "$lib/stores/form.store" 

    function flip(evt: MouseEvent) {
        const target = evt.target as HTMLElement
        target.classList.add("fa-flip")
        return
    }
    function deflip(evt: MouseEvent) {
        const target = evt.target as HTMLElement
        target.classList.remove("fa-flip")
        return
    }
    let nm = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
</script>

<footer class="w-full h-[16rem] min-[360px]:h-[14rem] md:h-[13rem]
    px-8 py-4 
    rounded-t-lg bg-black text-white 
    absolute left-0 bottom-0
    flex items-center justify-center
    overflow-hidden">

    <div class="w-full h-full relative">
        <!-- Top -->
        <p class="w-max absolute left-[50%] translate-x-[-50%] md:left-auto md:translate-x-0 md:right-2 bottom-[-5%]"><i class="fa-regular fa-copyright"></i> {new Date().getFullYear()} Carlos Tineo. {$l === "EN" ? "All Rights Reserved." : "Todos los Derechos Reservados."}</p>

        <div class="size-full flex items-start justify-start">
            <div class="w-full lg:w-2/4">
                <span>
                    <p class="text-[#ffffffd0] text-lg">Got a project to discuss?</p>
                    <h1 class="text-5xl font-semibold">Contact Me!</h1>
                </span>

                <ul class="flex items-center justify-around w-fit h-[3rem] mt-6"> 
                    <i class="fa-solid fa-arrow-turn-up rotate-90 text-5xl min-[400px]:text-6xl md:text-7xl mx-3 min-[400px]:mx-6 lg:mx-12"></i>
                    <li>
                        <a href="/#contact" style="border-left: none; border-right: none;" 
                        on:click={() => {contentStore.set("about") ;setContactFormState().showContactForm()}}>
                            <i class="fa-regular fa-envelope"></i>
                        </a>           
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/crtgdev/" target="_blank">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Morzatt" style="border-left: none; border-right: none;" target="_blank">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>

                    <img src="{logo}" alt="" class=" bg-white size-10 scale-[1.5] ml-2 lg:ml-4 hidden min-[410px]:block filter invert">
                </ul>
            </div>
        </div>
    </div>

</footer>

<style lang="postcss">
    li{
        @apply w-fit h-full
        flex items-center justify-center font-semibold; 
    }
    li a {
        @apply size-full
        px-6 md:px-8
        transition-all duration-200 ease-in-out
        flex items-center justify-center text-3xl md:text-4xl 
        border border-white h-full
        
        hover:bg-white hover:text-black;
    }
</style>
