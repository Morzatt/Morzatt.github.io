<script lang="ts">
    import {l} from "$lib/stores/language.store"
    import logo from "$lib/images/logotg.svg"

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

<footer class="w-full h-[30vh]
    px-8 py-4 
    rounded-t-lg bg-black text-white 
    absolute left-0 bottom-0
    flex items-center justify-center
    overflow-hidden">

    <div class="w-full h-full relative">
        <!-- Top -->
        <p class="absolute right-2  bottom-[-5%]"><i class="fa-regular fa-copyright"></i> {new Date().getFullYear()} Carlos Tineo. {$l === "EN" ? "All Rights Reserved." : "Todos los Derechos Reservados."}</p>


        <div class="size-full flex items-start justify-start">
            <div class="w-1/4">
                <span>
                    <p class="text-[#ffffffd0] text-lg">Got a project to discuss?</p>
                    <h1 class="text-5xl font-semibold">Contact Me!</h1>
                </span>

                <ul class="flex items-center justify-around w-fit h-[3rem] mt-6"> 
                    <i class="fa-solid fa-arrow-turn-up rotate-90 text-7xl mx-12"></i>
                    <li>
                        <a href="/" style="border-left: none; border-right: none;">
                            <i class="fa-regular fa-envelope"></i>
                        </a>           
                    </li>
                    <li>
                        <a href="/#projects">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/#contact" style="border-left: none; border-right: none;">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <img src="{logo}" alt="" class=" bg-white size-10 scale-[1.5] ml-4 hidden md:block filter invert">
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
        px-8
        transition-all duration-200 ease-in-out
        flex items-center justify-center text-4xl 
        border border-white h-full
        
        hover:bg-white hover:text-black;
    }
</style>
