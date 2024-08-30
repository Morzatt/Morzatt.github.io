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

<footer class="w-full px-4 py-2 rounded-t-lg mt-8 bg-black text-white">
    <div class="border">
        <a href="https://github.com/Morzatt">
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <i class="fa-brands fa-github text-4xl" on:mouseover={flip} on:mouseout={deflip}></i> 
        </a>
    </div>
</footer>

<style lang="postcss">
   
</style>
