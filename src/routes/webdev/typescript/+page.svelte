<script>
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";
</script>

<Article title="TypeScript">
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Variables</h1>
    <p class="mb-4">In TypeScript, variables can be declared using the <code>let</code> or <code>const</code> keywords. Additionally, variables can be explicitly typed using the <code>: Type</code> syntax. Here's an example:</p>
    <CodeBlock code={[`let message: string = "Hello, TypeScript!";`]} />
    <CodeBlock code={[`const pi: number = 3.14;`]} />
    <p class="mb-4">TypeScript provides type inference, allowing variables to have their types inferred by the compiler based on their initial values. This feature enables writing cleaner code without explicit type annotations. For more details on variables in TypeScript, refer to the TypeScript documentation on variables.</p>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Functions</h1>
    <p class="mb-4">In TypeScript, functions can be declared using the <code>function</code> keyword. Function parameters can be explicitly typed using the <code>: Type</code> syntax, and the return type can also be specified using the <code>: ReturnType</code> syntax. Here's an example:</p>
    <CodeBlock code={[`function add(x: number, y: number): number {`, `   return x + y;`, `}`]} />
    <p class="mb-4">In the above example, the function named "add" takes two parameters, "x" and "y", both of type number. It specifies the return type as number. The function body performs the addition of "x" and "y" and returns the result.</p>
    <p class="mb-4">TypeScript supports optional parameters, default parameter values, and rest parameters in functions, providing flexibility in function declarations. For more details on functions in TypeScript, refer to the TypeScript documentation on functions.</p>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Interfaces</h1>
    <p class="mb-4">In TypeScript, interfaces can be declared using the <code>interface</code> keyword. Interfaces are used to define the structure of objects, functions, classes, and arrays. Here's an example:</p>
    <CodeBlock code={[`interface Person {`, `   name: string;`, `   age: number;`, `}`]} />
    <p class="mb-4">In the above example, the interface named "Person" defines the structure of an object. It specifies that an object of type Person must have a <code>name</code> property of type string and an <code>age</code> property of type number.</p>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Classes</h1>
    <p class="mb-4">In TypeScript, classes can be declared using the <code>class</code> keyword. Classes are used to define the structure of objects, functions, and arrays. Here's an example:</p>
    <CodeBlock code={[`class Person {`, `   name: string;`, `   age: number;`, `   constructor(name: string, age: number) {`, `       this.name = name;`, `       this.age = age;`, `   }`, `}`]} />
    <p class="mb-4">In the above example, the class named "Person" defines the structure of an object. It specifies that an object of type Person must have a <code>name</code> property of type string and an <code>age</code> property of type number. It also specifies a constructor function that takes a <code>name</code> parameter of type string and an <code>age</code> parameter of type number.</p>
  </section>
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Enums</h1>
    <p class="mb-4">In TypeScript, enums can be declared using the <code>enum</code> keyword. Enums are used to define a set of named constants. Here's an example:</p>
    <CodeBlock code={[`enum Color {`, `   Red,`, `   Green,`, `   Blue`, `}`]} />
    <p class="mb-4">In the above example, the enum named "Color" defines a set of named constants. It specifies that the constants <code>Red</code>, <code>Green</code>, and <code>Blue</code> are of type <code>Color</code>.</p>
  </section>
</Article>
