<script lang="ts">
  import CodeBlock from "$lib/CodeBlock.svelte";
  import Article from "$lib/Article.svelte";

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  let izac = new Person("Izac", 26);
  izac.greet();

  class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
      super(name, age);
      this.grade = grade;
    }
    study() {
      console.log("Studying...");
    }
  }
  let john = new Student("John", 30, "A");
  john.greet();
  john.study();
</script>

<Article title="OOP">
  <section class="mb-12">
    <h1 class="text-2xl font-bold mb-4">Object Oriented JavaScript</h1>
    <p class="mb-4">Object Oriented Programming is a programming paradigm that uses objects and their interactions to design applications and computer programs.</p>
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Object</h2>
    <p class="mb-4">An object is a key having a value. The value can be a primitive data type, a function, or an object. The key is always a string, but the value can be anything.</p>
    <CodeBlock code={[`let person = {`, `   name: "John",`, `   age: 30,`, `   hobbies: ["reading", "music", "movies"],`, `   greet: function() {`, `       console.log("Hello, World!");`, `   }`, `};`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Class</h2>
    <p class="mb-4">A class is a blueprint for creating objects. It defines the properties and methods that an object can have.</p>
    <CodeBlock code={[`class Person {`, `   constructor(name, age) {`, `       this.name = name;`, `       this.age = age;`, `   }`, `   greet() {`, `       console.log("Hello, World!");`, `   }`, `}`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Instance</h2>
    <p class="mb-4">An instance is an object that is created from a class. It has all the properties and methods that were defined in the class.</p>
    <CodeBlock code={[`let person = new Person("John", 30);`]} />
  </section>
  <section class="mb-12">
    <h2 class="text-2xl font-bold mb-4">Inheritance</h2>
    <p class="mb-4">Inheritance is a mechanism that allows a class to inherit properties and methods from another class.</p>
    <CodeBlock code={[`class Person {`, `   constructor(name, age) {`, `       this.name = name;`, `       this.age = age;`, `   }`, `   greet() {`, `       console.log("Hello, World!");`, `   }`, `}`, `class Student extends Person {`, `   constructor(name, age, grade) {`, `       super(name, age);`, `       this.grade = grade;`, `   }`, `   study() {`, `       console.log("Studying...");`, `   }`, `}`]} />
  </section>
</Article>
