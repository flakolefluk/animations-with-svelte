<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  const toColor = tweened([255, 0, 0], {
    duration: 2000,
    easing: cubicOut,
  });

  let loop = () =>
    toColor
      .set([255, 0, 0])
      .then(() => toColor.set([0, 255, 0]))
      .then(() => toColor.set([0, 0, 255]))
      .then(() => loop());
  loop();
</script>

<div style={'background-color:rgb(' + $toColor.join(',') + ')'} />

<style>
  div {
    display: block;
    width: 100px;
    height: 100px;
  }
</style>
