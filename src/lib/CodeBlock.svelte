<script lang="ts">
  export let code: string[];
</script>

<div class="p-4 rounded-md mb-4 bg-surface0">
  <pre class="flex">
<code class="flex flex-col font-mono">
  {#each code as line}
        <div>{line}</div>
      {/each}
</code>
</pre>
</div>
