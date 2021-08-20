<script lang="ts">
  import Tasks from './lib/Tasks.svelte';
  import Tweened from './lib/Tweened.svelte';
  import Spring from './lib/Spring.svelte';
  import Transition from './lib/Transition.svelte';
  import Skew from './lib/Skew.svelte';
  import Flip from './lib/Flip.svelte';
  import ExtendFlip from './lib/ExtendFLip.svelte';
  import AnimationFromTransition from './lib/AnimationFromTransition.svelte';

  let tasks = [
    { id: 1, title: 'Meeting', date: new Date('2021-12-17T03:24:00') },
    { id: 2, title: 'Gym', date: new Date('2021-08-22T09:12:00') },
    { id: 3, title: 'Movie', date: new Date('2021-09-01T22:07:00') },
  ];
</script>

<main>
  <!-- <Tasks {tasks} /> -->
  <!-- <Tweened /> -->
  <!-- <Spring /> -->
  <!-- <Transition /> -->
  <!-- <Skew skewOptions={{deg:12}}/> -->
   <!-- <Flip /> -->
   <!-- <AnimationFromTransition /> -->
 <ExtendFlip />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  :global(main > * + *)  {
    margin-top: 24px;
  }
</style>
