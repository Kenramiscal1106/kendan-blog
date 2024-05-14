<script lang="ts">
  export let bgSource: string = "";
</script>

<div
  class="h-screen flex justify-center items-center text-white"
  style={bgSource !== "" ? `background: url(${bgSource}) fixed center;` : ""}
>
  <slot></slot>
</div>

<style>
</style>
