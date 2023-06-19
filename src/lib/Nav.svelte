<!-- NavDrawer.svelte -->
<script>
  export let items;
  let navigation = items;

  let isOpen = false;

  function toggleDrawer() {
    isOpen = !isOpen;
  }
</script>

<div class="fixed inset-0 flex z-50" style={`display: ${isOpen ? "flex" : "none"};`}>
  <nav class="text-green flex flex-col sticky top-0 bg-base p-4">
    <ul class="list-disc text-blue underline ml-8">
      {#each navigation as nav}
        <li>
          <a href={nav.href}>{nav.name}</a>
          {#if nav.children}
            <ul class="list-square ml-8">
              {#each nav.children as child}
                <li>
                  <a href={child.href}>{child.name}</a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>

  <div class="flex-1 flex justify-end bg-gray-900 bg-opacity-50" on:click={toggleDrawer} />
</div>

<!-- Button to toggle the drawer -->
<button class="top-4 right-4 text-white p-2 rounded-md" on:click={toggleDrawer}>
  <svg class="h-6 w-6" fill="none" stroke="#a6e3a1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
</button>
