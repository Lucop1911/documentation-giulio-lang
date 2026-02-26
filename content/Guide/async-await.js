() => `
<h1>Async & Await</h1>

<p>Giulio-lang supports asynchronous programming through the <code>async</code> and <code>await</code> keywords. Async functions allow you to write non-blocking code in a sequential, readable manner.</p>

<h2>Defining Async Functions</h2>

<p>Use the <code>async</code> keyword before <code>fn</code> to define an asynchronous function. Async functions automatically return a <code>Future</code> - a value that will be resolved asynchronously.</p>

<pre><code>async fn fetch_data() {
    return "data loaded";
}

async fn process_request(url) {
    let result = await fetch_data();
    return result;
}</code></pre>

<h2>The await Keyword</h2>

<p>Use <code>await</code> to pause execution of an async function until a Future is resolved. This allows you to write asynchronous code that looks synchronous.</p>

<pre><code>async fn main() {
    println("Starting...");

    let result = await some_async_operation();
    println("Result: " + result);

    println("Done!");
}</code></pre>

<h2>Waiting for Multiple Futures</h2>

<p>You can use multiple <code>await</code> statements in sequence. Each one waits for the previous Future to complete before continuing.</p>

<pre><code>async fn process_all() {
    let first = await get_first();
    let second = await get_second();
    let third = await get_third();

    return [first, second, third];
}</code></pre>

<h2>Using the Time Module</h2>

<p>The <code>std::time</code> module provides the <code>sleep</code> function, which pauses execution for a specified number of milliseconds. This is useful for testing async code or adding delays.</p>

<pre><code>import std::time;

async fn delayed_greet() {
    println("Starting...");
    await time.sleep(1000); // Wait 1 second
    println("Hello after 1 second!");
}</code></pre>

<h2>Using the IO Module</h2>

<p>The <code>std::io</code> module provides async-friendly file operations. You can read and write files asynchronously within async functions.</p>

<pre><code>import std::io;

async fn file_example() {
    io.write_file("example.txt", "Hello, World!");
    let content = io.read_file("example.txt");
    println(content);
    io.delete_file("example.txt");
}</code></pre>

<h2>Best Practices</h2>

<ul>
    <li>Always <code>await</code> async functions within an async function</li>
    <li>Use async functions for I/O-bound operations (file, network, etc.)</li>
    <li>Import <code>std::time</code> for timing operations</li>
    <li>Import <code>std::io</code> for file operations</li>
</ul>
`;
