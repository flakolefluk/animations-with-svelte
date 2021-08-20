<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import {
    blur,
    crossfade,
    draw,
    fade,
    fly,
    scale,
    slide,
  } from 'svelte/transition';

  let show = false;
  let interval;

  let [from, to] = crossfade({
    fallback: () => {
      return { css: (t, u) => 'color:red' };
    },
  });

  onMount(() => {
    interval = setInterval(() => {
      show = !show;
    }, 2000);
  })

  onDestroy(() => {
    if (interval){
      clearInterval(interval);
    }
  });

  
</script>

<div class="playground">
  <div class="transition-item">
    <svg
      fill="#ffffff"
      width="32"
      height="32"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      {#if show}
        <path
          in:draw={{ duration: 1500 }}
          d="M1.414213562373095 0 16 14.585786437626904 L14.585786437626904 16 L0 1.414213562373095"
        />
        <path
          in:draw={{ duration: 1500 }}
          d="M14.585786437626904 0 L16 1.414213562373095 L1.414213562373095 16 L0 14.585786437626904"
        />
      {/if}
    </svg>
  </div>
  <div class="transition-item teleport">
    <div>
      {#if show}
        <span in:from={{ key: 'a' }} out:to={{ key: 'a' }}>cross...</span>
      {/if}
    </div>
    <div>
      {#if !show}
        <span in:from={{ key: 'a' }} out:to={{ key: 'a' }}>...fade</span>
      {/if}
    </div>
  </div>

  {#if show}
    <div class="transition-item" transition:blur>
      <span>Blur</span>
    </div>
    <div class="transition-item" transition:fade>
      <span>Fade</span>
    </div>
    <div class="transition-item" transition:fly={{ x: 30 }}>
      <span>Fly</span>
    </div>
    <div class="transition-item" transition:scale={{ start: 10 }}>
      <span>Scale</span>
    </div>
    <div class="transition-item" transition:slide>
      <span>Slide</span>
    </div>
  {/if}
</div>

<style>
  .teleport {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 200px;
    margin-left:auto;
    margin-right:auto;
    border: 2px solid #4f4f4f;
    border-radius: 8px;
    padding: 16px;
    
  }
  .teleport > div {
      width: 100px;
    }
  
  svg {
    height: 128px;
    width: 128px;
  }

  path {
    stroke: black;
  }

  .transition-item + .transition-item {
    margin-top: 40px;
  }
</style>
