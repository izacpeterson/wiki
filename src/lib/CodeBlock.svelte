<script lang="ts">
  export let code: string[];
</script>

<div class="p-4 rounded-md mb-4 bg-surface0">
  <div class="code-container">
    <pre>
      <code class="font-mono flex flex-col">
        {#each code as line}
          <div>{line}</div>
        {/each}
      </code>
    </pre>
  </div>
</div>

<style>
  .code-container {
    width: 100%;
    overflow-x: auto;
  }
</style>
