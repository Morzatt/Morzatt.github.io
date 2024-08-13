<!-- svelte-ignore tag-option-deprecated -->
<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<script lang="ts">
    import "../app.css"
    import Navbar from "$lib/components/Navbar.svelte"
    // import Footer from "$lib/components/Footer.svelte"
    // import { onMount } from "svelte"

    let body: HTMLBodyElement;
    let tracking = false
    function handleTracking() {
        tracking = true
    }
    function traceMouse(event: MouseEvent) {
        if (!tracking) return
        event.clientX
    }
</script>

<body class="w-full h-[100vh]" bind:this={body}
    on:mouseenter={handleTracking} 
    on:mousemove={traceMouse}
    >

    <div class="w-full px-4 md:px-12 h-max">
        <Navbar/>
        <slot></slot>
    </div>
    <!-- <Footer/> -->
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