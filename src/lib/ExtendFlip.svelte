<script>
  import { scale, blur } from 'svelte/transition';
  import { extendFlip } from './extendFlip';

  let flipAndBlur = extendFlip(blur);
  let flipAndScale = extendFlip(scale);

  let things = [
    { id: 1, name: 'foo', ready: true },
    { id: 2, name: 'bar', ready: false },
    { id: 3, name: 'baz', ready: true },
    { id: 4, name: 'fizz', ready: false },
  ];

  let sortBy = { field: 'id', order: 'DESC' };

  let sortedThings = things;

  function sortById() {
    if (
      sortBy.field !== 'id' ||
      (sortBy.field === 'id' && sortBy.order === 'DESC')
    ) {
      sortedThings = things.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
      sortBy = { field: 'id', order: 'ASC' };
    } else {
      sortedThings = things.sort((a, b) => {
        if (a.id > b.id) {
          return -1;
        } else if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
      sortBy = { field: 'id', order: 'DESC' };
    }
  }
  function sortByName() {
    if (
      sortBy.field !== 'name' ||
      (sortBy.field === 'name' && sortBy.order === 'DESC')
    ) {
      sortedThings = things.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      sortBy = { field: 'name', order: 'ASC' };
    } else {
      sortedThings = things.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
      sortBy = { field: 'name', order: 'DESC' };
    }
  }
  function sortByReadyState() {
    if (
      sortBy.field !== 'ready' ||
      (sortBy.field === 'ready' && sortBy.order === 'DESC')
    ) {
      sortedThings = [
        ...sortedThings.filter((x) => x.ready),
        ...sortedThings.filter((x) => !x.ready),
      ];
      sortBy = { field: 'ready', order: 'ASC' };
    } else {
      sortedThings = [
        ...sortedThings.filter((x) => !x.ready),
        ...sortedThings.filter((x) => x.ready),
      ];
      sortBy = { field: 'ready', order: 'DESC' };
    }
  }
</script>

<div class="container">
  <table>
    <tr>
      <th on:click={sortById}>id</th>
      <th on:click={sortByName}>name</th>
      <th on:click={sortByReadyState}>ready</th>
    </tr>
    {#each sortedThings as thing (thing.id)}
      <tr animate:flipAndBlur>
        <td>{thing.id}</td>
        <td>
          {thing.name}
        </td>
        <td><input type="checkbox" bind:checked={thing.ready} /></td>
      </tr>
    {/each}
  </table>
</div>

<style>
  td {
    width: 100px;
  }
  .container {
    width: 100vw;
    display: flex;
    flex-direction: row;
  }
  table,
  tr,
  td,
  th {
    border: 1px solid gray;
    border-collapse: collapse;
  }
  th {
    cursor: pointer;
  }
</style>
