<script lang="ts">
  import { onMount } from "svelte";

  console.log('Loading inner');

  onMount(() => {
    console.log('Inner mounted')
  })
</script>

<svelte:options customElement="my-inner" />

<div>Inner</div>

<style>
  div {
    background: lightblue;
    padding: 0.5rem;
  }
</style>
