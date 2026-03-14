() => `
<h1>Data Types</h1>

<p>G-lang provides a robust set of built-in data types to handle various kinds of information. As a dynamically typed language, variables in G-lang can hold values of any type without explicit type declarations.</p>

<h2>Primitive Types</h2>

<h3>Integers</h3>
<p>Standard whole numbers, both positive and negative.</p>
<pre><code>let count = 42;
let temperature = -5;</code></pre>

<h3>Big Integers</h3>
<p>For calculations requiring numbers larger than standard integers can hold, G-lang supports Big Integers automatically. (Integers are automatically converted into BigIntegers or from BigIntegers whenever possible)</p>
<pre><code>let universe_atoms = 1000000000000000000000000000000;</code></pre>

<h3>Floats</h3>
<p>Floating-point numbers are used for values with decimal points.</p>
<pre><code>let pi = 3.14159;
let price = 19.99;</code></pre>

<h3>Booleans</h3>
<p>Represents logical truth with <code>true</code> and <code>false</code>.</p>
<pre><code>let is_valid = true;
let has_error = false;</code></pre>

<h3>Null</h3>
<p>Represents the absence of a value.</p>
<pre><code>let result = null;</code></pre>

<h2>Strings</h2>

<p>Strings are sequences of characters enclosed in double quotes <code>"</code>.</p>

<pre><code>let greeting = "Hello, World!";</code></pre>

<p>You can concatenate strings using the <code>+</code> operator:</p>

<pre><code>let first = "G";
let last = "Lang";
let full = first + " " + last; // "G Lang"</code></pre>

<h2>Collections</h2>

<h3>Arrays</h3>
<p>Arrays are ordered lists of values. They can hold elements of different types.</p>

<pre><code>let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];</code></pre>

<p>G-lang provides several built-in functions for working with arrays:</p>

<ul>
    <li><code>len(arr)</code>: Returns the number of elements.</li>
    <li><code>head(arr)</code>: Returns the first element.</li>
    <li><code>tail(arr)</code>: Returns a new array containing all elements except the first.</li>
    <li><code>push(arr, value)</code>: Adds an element to the end of the array.</li>
</ul>

<pre><code>let arr = [10, 20, 30];

println(len(arr));      // 3
println(head(arr));     // 10
println(tail(arr));     // [20, 30]

let new_arr = arr.push(40)
println(new_arr);       // [10, 20, 30, 40]</code></pre>

<p>You can also access elements by their index (0-based):</p>

<pre><code>println(arr[1]); // 20</code></pre>

<h3>Hashes</h3>
<p>Hashes (also known as dictionaries or maps) are collections of key-value pairs.</p>

<pre><code>let config = {
    "host": "localhost",
    "port": 8080,
    "debug": true
};</code></pre>

<h2>Type Conversion</h2>

<p>You can convert between types using built-in methods:</p>

<pre><code>// String to Integer
let num = "42".to_int();

// Integer to String
let str = 100.to_string();

// Integer to Float
let flt = 50.to_float();

// Float to Integer
let int_val = 3.99.to_int(); // 3</code></pre>

<div class="alert alert-info">
    <strong>See Also:</strong> For custom data structures, check out the <a href="#structs">Structs</a> section.
</div>
`;