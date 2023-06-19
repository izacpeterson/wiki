<!-- functional programming -->
<!-- Path: src/routes/js/functional/+page.svelte -->
<!-- Compare this snippet from src/routes/js/oop/+page.svelte: -->
<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="Functional Programming">
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Functional Programming</h1>
    <p class="mb-4">Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.</p>
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Pure Functions</h2>
    <p class="mb-4">A pure function is a function that always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must also not produce any observable side effects.</p>
    <CodeBlock code={[`// Pure function`, `function add(a, b) {`, `   return a + b;`, `}`, ``, `// Impure function`, `function add(a, b) {`, `   return a + b + new Date().getSeconds();`, `}`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Higher Order Functions</h2>
    <p class="mb-4">A higher order function is a function that takes a function as an argument, or returns a function.</p>
    <CodeBlock code={[`function add(a, b) {`, `   return a + b;`, `}`, ``, `function higherOrderFunction(a, b, callback) {`, `   return callback(a, b);`, `}`, ``, `higherOrderFunction(1, 2, add); // 3`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">First Class Functions</h2>
    <p class="mb-4">A programming language is said to have first-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.</p>
    <CodeBlock code={[`function add(a, b) {`, `   return a + b;`, `}`, ``, `const subtract = function(a, b) {`, `   return a - b;`, `}`, ``, `const multiply = (a, b) => {`, `   return a * b;`, `}`, ``, `const divide = (a, b) => a / b;`]} />
  </section>
  <section class=" mb-12">
    <h2 class="text-2xl font-bold mb-4">Pure Functions</h2>
    <p class="mb-4">A pure function is a function that always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must also not produce any observable side effects.</p>
    <CodeBlock code={[`// Pure function`, `function add(a, b) {`, `   return a + b;`, `}`, ``, `// Impure function`, `function add(a, b) {`, `   return a + b + new Date().getSeconds();`, `}`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Immutability</h2>
    <p class="mb-4">An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.</p>
    <CodeBlock code={[`const person = {`, `   name: "John",`, `   age: 30`, `};`, ``, `// Mutable`, `person.age = 31;`, ``, `// Immutable`, `const newPerson = Object.assign({}, person, { age: 31 });`, `const newPerson = { ...person, age: 31 };`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Recursion</h2>
    <p class="mb-4">Recursion is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result. Most loops can be rewritten in a recursive style, and in some functional languages this approach to looping is the default.</p>
    <CodeBlock code={[`function factorial(n) {`, `   if (n === 0) {`, `      return 1;`, `   }`, `   return n * factorial(n - 1);`, `}`, ``, `factorial(3); // 6`]} />
  </section>
</Article>
