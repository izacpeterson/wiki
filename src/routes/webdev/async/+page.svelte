<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="Asynchronous JS">
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Promises</h1>
    <p class="mb-4">In JavaScript, promises are used to handle asynchronous operations. Promises represent the eventual completion (or failure) of an asynchronous operation and allow you to write asynchronous code in a more synchronous manner. Here's an example:</p>
    <CodeBlock code={[`function fetchData() {`, `   return new Promise((resolve, reject) => {`, `       // Asynchronous operation`, `       // If operation is successful, call resolve() with the result`, `       // If operation fails, call reject() with the error`, `   });`, `}`, ``, `fetchData().then(result => {`, `   // Handle successful result`, `}).catch(error => {`, `   // Handle error`, `});`]} />
    <p class="mb-4">In the above example, the function <code>fetchData</code> returns a new Promise that represents an asynchronous operation. The operation can either succeed (in which case <code>resolve</code> is called with the result) or fail (in which case <code>reject</code> is called with the error).</p>
    <p class="mb-4">You can chain <code>then()</code> and <code>catch()</code> methods on a promise to handle the successful result or the error, respectively. This allows you to write code that executes in a specific order even though the underlying operations are asynchronous.</p>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Async/Await</h1>
    <p class="mb-4">Async/await is a syntactic sugar for promises. It allows you to write asynchronous code in a more synchronous manner. Here's an example:</p>
    <CodeBlock code={[`async function fetchData() {`, `   const result = await someAsyncOperation();`, `   return result;`, `}`, ``, `try {`, `   const result = await fetchData();`, `   // Handle successful result`, `} catch (error) {`, `   // Handle error`, `}`]} />
    <p class="mb-4">In the above example, the function <code>fetchData</code> is an asynchronous function that uses the <code>await</code> keyword to wait for the result of the <code>someAsyncOperation</code> function. The <code>someAsyncOperation</code> function represents an asynchronous operation that returns a promise.</p>
    <p class="mb-4">If the operation is successful, the result is returned by the <code>fetchData</code> function. If the operation fails, an error is thrown and can be caught using a <code>try-catch</code> block.</p>
    <p class="mb-4">By using async/await, you can write code that appears to execute synchronously, even though the underlying operations are asynchronous.</p>
  </section>
</Article>
