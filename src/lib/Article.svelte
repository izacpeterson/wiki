<script lang="ts">
  export let title: String;
</script>

<main class="w-1/2 py-12 m-auto">
  <h1 class="text-6xl font-bold mb-12">{title}</h1>
  <slot />
</main>
