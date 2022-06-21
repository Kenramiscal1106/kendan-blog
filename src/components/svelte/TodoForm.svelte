<script>
  export let todos;
  export let todoText;
</script>

<form on:submit|preventDefault={(e) => {
  const formData = new FormData(e.target)
  const formDataEntries = Object.fromEntries(formData.entries())
  const todoToAdd = {
    ...formDataEntries,
    id: Math.random()
  }
  todos = [...todos, todoToAdd]
  todoText = ""
}}>
  <label for="todo-text" >todo</label>
  <input type="text" id="todo-text" name="text" bind:value={todoText}>
  <button type="submit">Add todo</button>
</form>

<style></style>