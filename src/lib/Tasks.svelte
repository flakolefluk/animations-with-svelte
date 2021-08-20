<script lang="ts">
  import { tweened } from 'svelte/motion';
  export let tasks: { id; title; date }[] = [];

  let selected;
  tasks = tasks.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else if (a.date === b.date) {
      return 0;
    } else {
      return -1;
    }
  });

  function pad(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  }

  function getDate(date) {
    return date
      ? `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(
          date.getDate(),
        )}`
      : '';
  }

  function getTime(date) {
    return date ? `${pad(date.getHours())}:${pad(date.getMinutes())}` : '';
  }

  let now = new Date();
  let date = tweened(now, { duration: 500 });

  function selectTask(task) {
    selected = task.id;
    date.set(task.date);
  }
</script>

<div class="task-view">
  <div class="task-list">
    <h2>Next tasks</h2>
    <ul>
      {#each tasks as task}
        <li
          class={selected === task.id ? 'selected' : ''}
          on:click={() => selectTask(task)}
        >
          {task.title}
        </li>
      {/each}
    </ul>
  </div>
  <div class="task-details">
    <h2>When?</h2>
    {#if selected}
      <p>{getDate($date)}</p>
      <p>{getTime($date)}</p>
    {/if}
  </div>
</div>

<style>
  .task-view {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
    border: 2px solid #4f4f4f;
    border-radius: 8px;
    padding: 16px;
  }
  li {
    padding: 4px 8px;
  }
  li.selected {
    background-color: lightcyan;
  }
  li:hover {
    background-color: lightgray;
  }
</style>
