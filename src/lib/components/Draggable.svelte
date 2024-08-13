<script lang="ts">
  let isDragging = false;
  let dragContainer: HTMLDivElement;
  let initialMouseX: number, 
      initialMouseY: number, 
      initialElementX: number, 
      initialElementY: number,
      h: number,
      w: number;
  
  // Function to update initial positions
  function updateInitialPositions(event: any) {
    initialMouseX = event.touches ? event.touches[0].clientX : event.clientX;
    initialMouseY = event.touches ? event.touches[0].clientY : event.clientY;

    initialElementX = parseFloat(getComputedStyle(dragContainer).left);
    initialElementY = parseFloat(getComputedStyle(dragContainer).top);
  }
  
  // Mouse handlers
  function handleMouseDown(event: any) {
    isDragging = true;
    updateInitialPositions(event);
  }

  function moveElement(event: any) {
    if (!isDragging) return;
    event.preventDefault();
    const dx = event.touches ? event.touches[0].clientX - initialMouseX : event.clientX - initialMouseX;
    const dy = event.touches ? event.touches[0].clientY - initialMouseY : event.clientY - initialMouseY;
    dragContainer.style.left = `${initialElementX + dx}px`
    dragContainer.style.top = `${initialElementY + dy}px`
  }

  function handleMouseMove(event: any) {
    moveElement(event)
  }

  function handleMouseUp(event : any) {
    isDragging = false;
  }

  function handleMouseLeave(event: any) {
    const cx = event.touches ? event.touches[0].clientX : event.clientX;
    const cy = event.touches ? event.touches[0].clientY : event.clientY;
    isDragging = false;
  }
</script>


<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="absolute border-[6px] size-full flex flex-col" bind:this={dragContainer}>
  <div class="bb w-full h-[40px] cursor-move touch-none
               select-none flex items-center justify-between px-2"

    on:mousedown={handleMouseDown}
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseLeave}

    on:touchstart={handleMouseDown}
    on:touchmove={handleMouseMove}
    on:touchend={handleMouseUp}
    on:touchcancel={handleMouseLeave}>
      <h2>TITULO</h2>
      <button class="font-bold" on:click={() => console.log("CULO")}>X</button>
  </div>

    <slot></slot>
</div>