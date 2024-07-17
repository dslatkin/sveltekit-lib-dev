<script lang="ts">
  import { onMount } from "svelte";

  console.log('Loading outer');

  onMount(() => {
    console.log('Outer mounted')
  })

</script>

<svelte:options customElement="my-outer" />

<div>
  Outer start
  <slot />
  Outer end
</div>

<style>
  div {
    background: pink;
    padding: 0.5rem;
  }
</style>
