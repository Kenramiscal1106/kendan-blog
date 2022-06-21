<script>
  import { onMount } from "svelte";
  import TodoForm from "./TodoForm.svelte";
  import TodoItems from "./TodoItems.svelte";
  let todos = [];
  onMount(() => {
    const todosFromLS = localStorage.getItem("todos");

    if (!todosFromLS) {
      console.log("todos don't exist");
      return;
    }
    todos = JSON.parse(todosFromLS);
  });
</script>

<main>
  <TodoForm bind:todos={todos}/>
  <TodoItems {todos} />
</main>
