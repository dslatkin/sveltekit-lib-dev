<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }

  console.log('Loading Counter.svelte')
</script>

<svelte:options customElement="my-counter" />

<button on:click={increment}>
  <slot />
  <p class="red">Shadowed .red content</p>
  <p>Count is {count}</p>
</button>
