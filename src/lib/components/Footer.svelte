<script lang="ts">
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
</script>

<footer class="w-[100wh] absolute left-0 bottom-0 px-4 py-2 rounded-t-lg mt-8 bg-black text-white">
    <div class="border">
        <a href="https://github.com/Morzatt">
            <i class="fa-brands fa-github text-4xl" on:mouseover={flip} on:mouseout={deflip}></i> 
        </a>
    </div>
</footer>

<style lang="postcss">
   
</style>
