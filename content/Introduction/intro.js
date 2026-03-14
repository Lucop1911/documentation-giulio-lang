() => `
<h1>Introduction to G-lang</h1>

<p>
    <a href="https://github.com/lucop1911/g-lang" target="_blank">
        <i class="fa-brands fa-github"></i> G-lang</a>
is a dynamically-typed interpreted programming language written in Rust. It's a lightweight, expressive language designed for simplicity and ease of use, providing a clean syntax with support for modern programming paradigms including functions, structs, and a flexible type system.
</p>

<h2>Key Features</h2>

<ul>
    <li><strong>Dynamically-typed:</strong> No need for explicit type annotations</li>
    <li><strong>Functions:</strong> First-class functions with closures</li>
    <li><strong>Structs:</strong> Define custom data structures with fields and methods</li>
    <li><strong>Control Flow:</strong> if/else conditions, while loops, for loops, and break/continue statements</li>
    <li><strong>Built-in Types:</strong> Integers, BigIntegers, floats, booleans, strings, arrays, and hash maps</li>
    <li><strong>Module System:</strong> Import and organize code across multiple files</li>
    <li><strong>REPL Mode:</strong> Interactive Read-Eval-Print Loop for quick experimentation</li>
    <li><strong>Standard Library:</strong> Built-in functions and modules for common operations</li>
</ul>

<h2>Design Philosophy</h2>

<p>G-lang aims to provide a balance between simplicity and power. The language syntax is clean and readable, making it easy for beginners to pick up while providing enough features for experienced programmers to build complex applications.</p>

<div class="alert alert-info">
    <strong>Getting Started:</strong> Check out the <a href="#installation">Installation</a> guide to set up G-lang, or jump straight to the <a href="#quick-start">Quick Start</a> for your first program.
</div>

<h2>Hello World</h2>

<p>Here's the traditional first program in G-lang:</p>

<pre><code>println("Hello, World!");</code></pre>

<h2>Example Programs</h2>

<h3>Variables and Functions</h3>

<pre><code>// Variables and arithmetic
let x = 10;
let y = 20;
let sum = x + y;
println(sum);

// First-class functions
let add = fn(a, b) { a + b };
println(add(5, 3));  // 8</code></pre>

<h3>Structs with Methods</h3>

<pre><code>struct Person {
    name: null,
    age: null,
    
    greet: fn() {
        println("Hello, I'm ", this.name);
    }
}

let person = Person { 
    name: "John", 
    age: 30 
};

person.greet();  // Hello, I'm John</code></pre>

<h3>Control Flow</h3>

<pre><code>// For loop (iterator-style)
let fruits = ["apple", "banana", "cherry"];
for (fruit in fruits) {
    println("I like ", fruit);
}

// For loop (C-style)
for (let i = 0; i < 10; i += 1) {
    if (i % 2 == 0) {
        println(i, " is even");
    }
}</code></pre>

<h2>Why G-lang?</h2>

<ul>
    <li><strong>Simple Syntax:</strong> Easy to read and write, perfect for scripting and rapid prototyping</li>
    <li><strong>Flexible:</strong> Dynamic typing allows for quick iterations without boilerplate</li>
    <li><strong>Interactive:</strong> The REPL makes experimentation and learning fast and fun</li>
    <li><strong>Extensible:</strong> Module system allows you to organize and reuse code effectively</li>
    <li><strong>Modern:</strong> Support for closures, structs, and functional programming patterns</li>
</ul>

<div class="alert alert-success">
    <strong>Ready to dive in?</strong> Continue to <a href="#installation">Installation</a> to get G-lang running on your system.
</div>
`;