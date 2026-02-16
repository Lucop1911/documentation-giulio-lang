() => `
<h1>Standard Library: Time Module</h1>

<p>The <code>time</code> module provides functions for getting the current system time and for pausing program execution.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std.time;</code></pre>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">now() → BigInteger</div>
    <div class="function-description">
        <p>Returns the current system time as the number of milliseconds since the Unix epoch (January 1, 1970 00:00:00 UTC).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A BigInteger representing the current timestamp in milliseconds.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let start_time = now();
// ... do some work ...
let end_time = now();
let duration = end_time - start_time;
println("Operation took: ", duration, "ms");
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">sleep(milliseconds) → Null</div>
    <div class="function-description">
        <p>Pauses the execution of the program for the specified duration.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>milliseconds</code> (Integer or BigInteger) - The number of milliseconds to sleep.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p><code>null</code> after the sleep duration has passed.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println("Waiting...");
sleep(1000); // Sleep for 1 second
println("Done.");
</code></pre>
    </div>
</div>
`;