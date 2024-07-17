
<script lang="ts">
    let messages: string[] = [];

    console.log('Loading Clicker.svelte')
</script>

<svelte:options customElement="my-clicker" />

<button on:click={() => { messages = [ ...messages, 'Nice click!']}}>
    Click Me
</button>

<p>
    {#each messages as message, i}
        {message}{#if i !== messages.length - 1}<br />{/if}
    {/each}
</p>