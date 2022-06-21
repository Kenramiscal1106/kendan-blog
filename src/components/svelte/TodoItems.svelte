<script>
import Todo from "./Todo.svelte";

  export let todos;
</script>

<section>
  {#if todos}
    {#each todos as todo}
      <div>{todo.text}</div>
    {/each}
    {:else}
    <div>Sorry, there are no todos out here</div>
  {/if}
</section>

<style>
</style>
