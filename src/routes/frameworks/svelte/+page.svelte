<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="Svelte and SvelteKit">
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Svelte and SvelteKit</h1>
    <p class="mb-4">Svelte is a component-based JavaScript framework that allows you to build user interfaces declaratively. It's similar to React, Vue, and Angular, but it's different in that it compiles your code at build time rather than at runtime. This means that your code is compiled into highly efficient vanilla JavaScript that runs in the browser.</p>
    <p class="mb-4">SvelteKit is a framework for building web applications with Svelte. It's similar to Next.js and Nuxt.js, but it's different in that it's built on top of SvelteKit's file-based routing system. This means that you can build your entire application using only Svelte components and files.</p>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Vite Svelte Project Setup</h1>
    <p>To create a new Vite Svelte project, run the following commands:</p>
    <CodeBlock code={[`npm init vite@latest my-app -- --template svelte`, `cd my-app`, `npm install`, `npm run dev`]} />
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">SvelteKit project setup</h1>
    <p>To create a new SvelteKit project, run the following commands:</p>
    <CodeBlock code={[`npm init svelte@next my-app`, `cd my-app`, `npm install`, `npm run dev`]} />
  </section>
</Article>
