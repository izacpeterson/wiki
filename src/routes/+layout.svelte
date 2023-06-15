<script>
  import "../app.css";

  const navigation = [
    {
      name: "WebDev",
      href: "/webdev",
      children: [
        {
          name: "TypeScript",
          href: "/webdev/typescript",
        },
        {
          name: "Asynchronous JavaScript",
          href: "/webdev/async",
        },
        {
          name: "Svelte and SvelteKit",
          href: "/webdev/svelte",
        },
        {
          name: "TailwindCSS",
          href: "/webdev/tailwind",
        },
        {
          name: "Catppuccin",
          href: "/webdev/catppuccin",
        },
      ],
    },
  ];
</script>

<main class="mocha min-h-screen bg-base text-text">
  <nav class="text-blue underline flex flex-col">
    {#each navigation as nav}
      <a href={nav.href}>{nav.name}</a>
      {#if nav.children}
        <ul class="list-disc ml-8">
          {#each nav.children as child}
            <li>
              <a href={child.href}>{child.name}</a>
            </li>
          {/each}
        </ul>
      {/if}
    {/each}
  </nav>
  <slot />
</main>
