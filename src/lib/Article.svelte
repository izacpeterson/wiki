<script lang="ts">
  export let title: String;
</script>

<main class="w-5/6 lg:w-1/2 mx-auto">
  <h1 class="text-4xl lg:text-6xl font-bold mb-12">{title}</h1>
  <slot />
</main>
