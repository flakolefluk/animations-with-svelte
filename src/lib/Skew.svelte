<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { skew } from './skew';

  export let skewOptions = {};

  let show = false;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      show = !show;
    }, 2000);
  });

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<div class="playground">
  {#if show}
    <div class="transition-item" transition:skew={skewOptions}>
      <span>Skew</span>
    </div>
  {/if}
</div>
