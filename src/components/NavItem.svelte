<script lang="ts">
  export let isActive: boolean = false;
  export let type: "text" | "icon-only" = "text";
  export let navigateTo: string = "/";
</script>

<a
  href={navigateTo}
  target={/^https:\/\/[a-z]{4,23}\.[a-z]{2,7}\/./.test(navigateTo)
    ? "_blank"
    : "_self"}
  class={`${
    type === "text" ? "px-3 py-2" : "p-2"
  } rounded-lg text-light-content fill-current dark:text-dark-content ${
    isActive
      ? "bg-[#dde3ee] dark:bg-[#343842] font-semibold"
      : "hover:bg-light-secondary dark:hover:bg-dark-secondary active:bg-[#dde3ee] active:dark:bg-[#343842]"
  }`}><slot /></a
>
