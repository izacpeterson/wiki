<script>
  import "../app.css";
  import Logo from "$lib/images/Logo.svg";
  import Nav from "$lib/Nav.svelte";

  const navigation = [
    {
      name: "VisualUI",
      href: "/visual",
      children: [
        {
          name: "TailwindCSS",
          href: "/visual/tailwind",
        },
        {
          name: "Catppuccin",
          href: "/visual/catppuccin",
        },
      ],
    },
    {
      name: "Javascript",
      href: "/js",
      children: [
        {
          name: "Asynchronous JavaScript",
          href: "/js/async",
        },
        {
          name: "Object Oriented Programming",
          href: "/js/oop",
        },
        {
          name: "Functional Programming",
          href: "/js/functional",
        },
        // {
        //   name: "Regular Expressions",
        //   href: "/js/regex",
        // },
        // {
        //   name: "Node.js",
        //   href: "/js/node",
        // },
        {
          name: "TypeScript",
          href: "/js/typescript",
        },
      ],
    },
    {
      name: "Frameworks",
      href: "/frameworks",
      children: [
        {
          name: "Svelte and SvelteKit",
          href: "/frameworks/svelte",
        },
      ],
    },
    {
      name: "Linux",
      href: "/linux",
      children: [
        {
          name: "RHEL/Rocky Linux",
          href: "/linux/rhel",
        },
        {
          name: "Common Linux Commands",
          href: "/linux/common",
        },
      ],
    },
  ];
</script>

<div class="mocha bg-base text-text">
  <header class="bg-mantle p-4 shadow-xl flex justify-between">
    <img src={Logo} alt="" class="w-12 mr-8" />
    <a href="/">
      <h1 class="text-4xl font-bold text-green">Izac Wiki</h1>
    </a>
    <Nav items={navigation} />
  </header>
  <main class="min-h-screen flex pt-12">
    <nav class="hidden text-green lg:flex flex-col sticky top-0">
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
    <slot />
  </main>
</div>
