() => `
<h1>Standard Library: Math Module</h1>

<p>The <code>math</code> module provides common mathematical functions, including utilities for rounding, clamping, and generating random numbers.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std.math;</code></pre>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">clamp(n, min, max) → Integer</div>
    <div class="function-description">
        <p>Restricts an integer to be within a specified range (inclusive). If <code>n</code> is less than <code>min</code>, it returns <code>min</code>. If <code>n</code> is greater than <code>max</code>, it returns <code>max</code>. Otherwise, it returns <code>n</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>n</code> (Integer) - The integer to clamp.</li>
            <li><code>min</code> (Integer) - The lower bound of the range.</li>
            <li><code>max</code> (Integer) - The upper bound of the range.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The clamped Integer.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(clamp(5, 0, 10));  // 5
println(clamp(-5, 0, 10)); // 0
println(clamp(15, 0, 10)); // 10
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">random(min, max) / random(max) / random() → Integer</div>
    <div class="function-description">
        <p>Generates a random integer within a specified range.</p>
        <ul>
            <li><code>random(min, max)</code>: Returns a random integer between <code>min</code> and <code>max</code> (inclusive).</li>
            <li><code>random(max)</code>: Returns a random integer between 0 and <code>max</code> (exclusive).</li>
            <li><code>random()</code>: Returns a random integer between 0 and 10 (inclusive).</li>
        </ul>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>min</code> (Integer) - Optional. The minimum value of the range.</li>
            <li><code>max</code> (Integer) - Optional. The maximum value of the range.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A random Integer.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>// Between 5 and 10
let r1 = random(5, 10);
println(r1);

// Between 0 and 99
let r2 = random(100);
println(r2);

// Between 0 and 10
let r3 = random();
println(r3);
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">round(float_value) → Float</div>
    <div class="function-description">
        <p>Rounds a floating-point number to the nearest whole number (as a float).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>float_value</code> (Float) - The float to round.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The rounded Float value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(round(3.14)); // 3.0
println(round(3.8));  // 4.0
println(round(-2.5)); // -2.0
</code></pre>
    </div>
</div>
`;