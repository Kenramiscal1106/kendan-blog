<script lang="ts">
  import AllenCard from "./AllenCard.svelte";
  import FpSection from "./FPSection.svelte";
  let state: "404" | "viewing" | "done" = "404";
</script>

{#if state === "404"}
  <FpSection>
    <div>
      <h1 class="text-4xl font-bold">404 not Found</h1>
      <button on:click={() => (state = "viewing")}>Click to refresh</button>
    </div>
  </FpSection>
{:else if state === "viewing"}
  <FpSection>
    <AllenCard>Hi, baby</AllenCard>
  </FpSection>
  <FpSection
    bgSource="https://wallpapers.com/images/featured/ocean-sunset-background-6votg6vtmp90exfa.jpg"
  >
    <AllenCard>I love you soo much</AllenCard>
  </FpSection>
  <FpSection>
    <AllenCard>Happy 5th monthsary</AllenCard>
  </FpSection>
  <FpSection>
    <AllenCard>Mwaps</AllenCard>
  </FpSection>
{/if}
