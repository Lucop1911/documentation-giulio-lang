() => `
<h1>Standard I/O</h1>

<p>Giulio-lang provides built-in functions for handling standard input and output operations, allowing your programs to interact with the user or the terminal.</p>

<h2>Output</h2>

<h3>print</h3>
<p>The <code>print</code> function writes text to the standard output (console) without appending a newline character at the end. It accepts multiple arguments and prints them sequentially.</p>

<pre><code>print("Hello, ");
print("World!");
// Output: Hello, World!</code></pre>

<h3>println</h3>
<p>The <code>println</code> function works like <code>print</code>, but it appends a newline character at the end of the output. It is commonly used for printing lines of text.</p>

<pre><code>println("Hello, World!");
println("This is a new line.");</code></pre>

<p>Both <code>print</code> and <code>println</code> can take multiple arguments of different types. They will be converted to strings and concatenated without automatic separators.</p>

<pre><code>let name = "Alice";
let age = 30;
println("Name: ", name, ", Age: ", age);
// Output: Name: Alice, Age: 30</code></pre>

<h2>Input</h2>

<h3>input</h3>
<p>The <code>input</code> function reads a line of text from the standard input (keyboard). It returns the input as a string, with the trailing newline removed.</p>

<p>You can optionally pass a prompt string to display to the user before waiting for input.</p>

<pre><code>let name = input("Enter your name: ");
println("Hello, ", name, "!");</code></pre>

<p>If no prompt is provided, it simply waits for input.</p>

<pre><code>println("Type something:");
let data = input();
println("You typed: ", data);</code></pre>

<div class="alert alert-info">
    <strong>Note:</strong> The <code>input</code> function returns a String. If you need a number, use conversion methods like <code>.to_int()</code> or <code>.to_float()</code>.
</div>
`;