<script>
  let counter = 0;
</script>
<main>
  <button on:click="{() => counter++}">Increment Counter</button>
  <h1>{counter}</h1>
  <h1>Svelte title</h1>
</main>