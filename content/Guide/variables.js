() => `
<h1>Variables</h1>

<p>Variables are the fundamental building blocks for storing data in Giulio-lang. They allow you to name and manipulate values throughout your program.</p>

<h2>Declaration</h2>

<p>Variables are declared using the <code>let</code> keyword. You must initialize a variable when you declare it.</p>

<pre><code>let name = "Giulio";
let count = 0;</code></pre>

<h2>Dynamic Typing</h2>

<p>Giulio-lang is dynamically typed, meaning you don't need to explicitly state the type of data a variable will hold. The type is inferred from the value.</p>

<pre><code>let x = 42;        // x is an Integer
let pi = 3.14;     // pi is a Float
let active = true; // active is a Boolean</code></pre>

<h2>Mutability</h2>

<p>Variables in Giulio-lang are mutable. Once declared, you can update their value using the assignment operator <code>=</code>.</p>

<pre><code>let score = 10;
println(score); // 10

score = 20;
println(score); // 20</code></pre>

<p>Because of dynamic typing, you can technically assign a value of a different type to a variable, though it is often better practice to keep variables consistent.</p>

<pre><code>let data = 100;
data = "Now I'm a string"; // Valid</code></pre>

<h2>Naming Conventions</h2>

<p>Variable names must start with a letter or an underscore <code>_</code>, followed by any combination of letters, numbers, and underscores.</p>

<ul>
    <li><strong>Valid:</strong> <code>name</code>, <code>_private</code>, <code>item1</code>, <code>my_variable</code></li>
    <li><strong>Invalid:</strong> <code>1st_item</code>, <code>my-variable</code>, <code>let</code> (keyword)</li>
</ul>

<p>The standard convention in Giulio-lang is to use <strong>snake_case</strong> for variable names.</p>

<div class="alert alert-info">
    <strong>Tip:</strong> Choose descriptive names for your variables to make your code easier to read and maintain.
</div>
`;