() => `
<h1>Control Flow</h1>

<p>Control flow statements allow you to dictate the order in which code is executed based on conditions and loops. Giulio-lang supports standard control flow mechanisms familiar to users of C-family languages.</p>

<h2>Conditional Execution</h2>

<h3>If-Else</h3>

<p>The <code>if</code> statement allows you to execute a block of code only if a specified condition is true. You can extend it with <code>else if</code> and <code>else</code> blocks to handle multiple conditions.</p>

<pre><code>let x = 10;

if (x > 0) {
    println("Positive");
} else if (x < 0) {
    println("Negative");
} else {
    println("Zero");
}</code></pre>

<div class="alert alert-info">
    <strong>Note:</strong> Parentheses <code>()</code> around the condition are required, as are the curly braces <code>{}</code> for the code blocks.
</div>

<h2>Loops</h2>

<p>Giulio-lang provides three ways to loop: <code>while</code> loops, C-style <code>for</code> loops, and iterator-style <code>for</code> loops.</p>

<h3>While Loops</h3>

<p>A <code>while</code> loop runs as long as a condition remains true.</p>

<pre><code>let count = 3;

while (count > 0) {
    println(count);
    count = count - 1;
}
println("Liftoff!");</code></pre>

<h3>For Loops (Iterator-style)</h3>

<p>The iterator-style <code>for</code> loop is the most common way to iterate over collections like arrays.</p>

<pre><code>let items = ["apple", "banana", "cherry"];

for (item in items) {
    println("I like ", item);
}

let numbers = [10, 20, 30];
for (n in numbers) {
    println(n);
}</code></pre>

<h3>For Loops (C-style)</h3>

<p>The C-style <code>for</code> loop gives you complete control over the iteration logic, consisting of an initializer, a condition, and an update statement.</p>

<pre><code>for (let i = 0; i < 5; i = i + 1) {
    println("Index: ", i);
}</code></pre>

<h2>Loop Control</h2>

<p>You can control the flow within loops using <code>break</code> and <code>continue</code>.</p>

<h3>Break</h3>

<p>The <code>break</code> statement terminates the loop immediately.</p>

<pre><code>let i = 0;
while (true) {
    if (i >= 5) {
        break; // Exit the loop
    }
    println("Looping...");
    i = i + 1;
}</code></pre>

<h3>Continue</h3>

<p>The <code>continue</code> statement skips the rest of the current iteration and moves to the next one.</p>

<pre><code>for (let i = 0; i < 5; i = i + 1) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    println(i); // Prints 1, 3
}</code></pre>

<h2>Error Handling</h2>

<p>Giulio-lang provides try-catch-finally blocks for handling errors and exceptions, along with the <code>throw</code> statement to raise exceptions.</p>

<h3>Throw</h3>

<p>The <code>throw</code> statement raises an exception that can be caught by a try-catch block.</p>

<pre><code>throw "Something went wrong!";</code></pre>

<p>You can throw any value, including strings, integers, or custom objects.</p>

<h3>Try-Catch</h3>

<p>The <code>try-catch</code> statement allows you to handle exceptions that might be thrown during execution.</p>

<pre><code>try {
    let result = risky_operation();
    println("Success: ", result);
} catch (error) {
    println("Caught error: ", error);
}</code></pre>

<p>The <code>catch</code> block receives the thrown value, which you can name whatever you like:</p>

<pre><code>try {
    throw "A problem occurred";
} catch (e) {
    println("Handled: ", e);
}</code></pre>

<h3>Try-Catch-Finally</h3>

<p>The <code>finally</code> block contains code that will always execute, regardless of whether an exception was thrown or caught.</p>

<pre><code>try {
    println("Trying...");
    throw "Error!";
} catch (e) {
    println("Caught: ", e);
} finally {
    println("This always runs");
}</code></pre>

<p>The <code>finally</code> block is useful for cleanup operations or logging after a try block completes.</p>

<pre><code>try {
    let content = read_file("data.txt");
    println(content);
} catch (e) {
    println("Error reading file: ", e);
} finally {
    println("Attempted to read file");
}</code></pre>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Now that you understand control flow, learn about <a href="#functions">Functions</a> to organize your code.
</div>
`;
