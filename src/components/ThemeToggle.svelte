<script lang="ts">
  import { onMount } from "svelte";

  let isDark: boolean;
  onMount(() => {
    const isDarkLocal = localStorage.getItem("theme");
    if (isDarkLocal === null) {
      localStorage.setItem("theme", "light");
      return;
    }
    isDark = isDarkLocal === "dark";
  });
  $: {
    if (typeof isDark !== "undefined") {
      localStorage.setItem("theme", isDark ? "dark" : "light");
      console.log("updates");
      document.querySelector("html").className = isDark ? "dark" : "light";
    }
  }
</script>

<button
  class="text-light-content dark:text-dark-content fill-none stroke-current bg-light-secondary dark:bg-dark-secondary active:ring-light-content-secondary dark:active:ring-dark-content-secondary p-2 active:ring-2 rounded-lg transition-all duration-100"
  on:click={() => (isDark = !isDark)}
>
  {#if isDark}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3V5.25M18.364 5.63604L16.773 7.22703M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.22703 16.773L5.63604 18.364M5.25 12H3M7.22703 7.22703L5.63604 5.63604M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  {:else}
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7519 15.0021C20.597 15.484 19.3296 15.7501 18 15.7501C12.6152 15.7501 8.25 11.3849 8.25 6.00011C8.25 4.67052 8.51614 3.40308 8.99806 2.24817C5.47566 3.71798 3 7.19493 3 11.2501C3 16.6349 7.36522 21.0001 12.75 21.0001C16.8052 21.0001 20.2821 18.5245 21.7519 15.0021Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  {/if}
</button>
