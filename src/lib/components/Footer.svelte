<script lang="ts">
    import {l} from "$lib/stores/language.store"
    import pixel from "$lib/images/PixelArtIcons-30-512.webp"

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

<footer class="w-full h-[40vh]
    px-8 py-4 
    rounded-t-lg bg-black text-white 
    absolute left-0 bottom-0
    flex items-center justify-center
    overflow-hidden">

    <div class="text-[#ffffff48] absolute left-2 top-[0.90rem] h-[95%] overflow-hidden">
        {#each nm as n}
            <p class="{n == 6 ? "scale-[1.15] text-[#ffffff80]" : ""}">{n}</p> 
        {/each}
    </div>

    <div class="w-full h-full relative">
        <!-- Top -->
        <div class="h-3/4 border-b flex items-start justify-around">
            <div class="w-1/4 ">
                <span>
                    <p class="text-[#ffffffd0]">Want to Work With Me?</p>
                    <h1 class="text-5xl font-semibold">Contact Me!</h1>
                </span>

                <ul class="flex items-center justify-start w-fit h-[3rem] mt-4"> 
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
                </ul>
            </div>
            <div class="w-3/4 flex items-start justify-end gap-4">
                <span>
                    <ul>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>About</li>
                        <li>Click</li>
                        <li>Me</li>
                    </ul>
                </span>
                <span>
                    <ul>
                        <li>Reservation</li>
                        <li>Homemdae</li>
                        <li>Neglection</li>
                    </ul>
                </span>
                <span>
                    <ul>
                        <li>Newsletter</li>
                        <li>More</li>
                        <li>About Projects</li>
                        <li>Nenene</li>
                    </ul>
                </span>
            </div>
        </div>

        <!-- Bottom -->
        <div class="h-1/4 w-full flex items-center justify-between pt-3 relative">
            <img src="{pixel}" alt="logo" class="size-20 filter invert hidden md:block mb-3">

            <p class="absolute left-2/4 translate-x-[-50%] bottom-[-20%]"><i class="fa-regular fa-copyright"></i> {new Date().getFullYear()} Carlos Tineo. {$l === "EN" ? "All Rights Reserved." : "Todos los Derechos Reservados."}</p>

            <ul class="flex items-center justify-end w-full h-full md:w-3/6 lg:w-2/6"> 
                <li>
                    <a href="/" style="border-left: none; border-right: none;">
                        <i class="fa-brands fa-github"></i>
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
            </ul>
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
