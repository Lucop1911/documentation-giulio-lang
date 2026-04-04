() => `
<h1>Variables</h1>

<p>Variables are the fundamental building blocks for storing data in G-lang. They allow you to name and manipulate values throughout your program.</p>

<h2>Declaration</h2>

<p>Variables are declared using the <code>let</code> keyword. You must initialize a variable when you declare it.</p>

<pre><code>let name = "G";
let count = 0;</code></pre>

<h2>Dynamic Typing</h2>

<p>G-lang is dynamically typed, meaning you don't need to explicitly state the type of data a variable will hold. The type is inferred from the value.</p>

<pre><code>let x = 42;        // x is an Integer
let pi = 3.14;     // pi is a Float
let active = true; // active is a Boolean</code></pre>

<h2>Mutability</h2>

<p>Variables in G-lang are mutable. Once declared, you can update their value using the assignment operator <code>=</code>.</p>

<pre><code>let score = 10;
println(score); // 10

score = 20;
println(score); // 20</code></pre>

<h2>Compound Assignment</h2>

<p>G-lang supports compound assignment operators that combine an arithmetic operation with assignment:</p>

<pre><code>let x = 10;
x += 5;  // x is now 15 (equivalent to x = x + 5)
x -= 3;  // x is now 12 (equivalent to x = x - 3)
x *= 2;  // x is now 24 (equivalent to x = x * 2)
x /= 4;  // x is now 6  (equivalent to x = x / 2)
x %= 5;  // x is now 1  (equivalent to x = x % 5)</code></pre>

<p>These operators provide a convenient shorthand for updating variables with arithmetic operations.</p>

<h2>Multiple Variable Declarations</h2>

<p>G-lang allows you to declare multiple variables in a single statement:</p>

<pre><code>let x = 10, y = 20, z = 30;
let name = "Alice", age = 25, city = "New York";
</code></pre>

<p>Each variable can have its own initializer, or you can declare variables without initializers:</p>

<pre><code>let a, b, c; // All declared but undefined
let x = 5, y, z = 10; // Mixed initialization
</code></pre>

<h2>Tuple Assignments</h2>

<p>G-lang supports tuple assignment, allowing you to assign multiple variables at once from an array or function return value:</p>

<pre><code>// Swapping values
let a = 5;
let b = 10;
[a, b] = [b, a]; // Now a is 10, b is 5

// Destructuring from arrays
let [x, y] = [100, 200]; // x is 100, y is 200
let [first, second, third] = [1, 2, 3]; // first=1, second=2, third=3

// Skipping elements
let [first, , third] = [1, 2, 3]; // first=1, third=3 (second is skipped)

// Nested destructuring
let [[x1, y1], [x2, y2]] = [[1, 2], [3, 4]];
// x1=1, y1=2, x2=3, y2=4
</code></pre>

<p>Because of dynamic typing, you can technically assign a value of a different type to a variable, though it is often better practice to keep variables consistent.</p>

<pre><code>let data = 100;
data = "Now I'm a string"; // Valid</code></pre>

<h2>Naming Conventions</h2>

<p>Variable names must start with a letter or an underscore <code>_</code>, followed by any combination of letters, numbers, and underscores.</p>

<ul>
    <li><strong>Valid:</strong> <code>name</code>, <code>_private</code>, <code>item1</code>, <code>my_variable</code></li>
    <li><strong>Invalid:</strong> <code>1st_item</code>, <code>my-variable</code>, <code>let</code> (keyword)</li>
</ul>

<p>The standard convention in G-lang is to use <strong>snake_case</strong> for variable names.</p>

<div class="alert alert-info">
    <strong>Tip:</strong> Choose descriptive names for your variables to make your code easier to read and maintain.
</div>
`;