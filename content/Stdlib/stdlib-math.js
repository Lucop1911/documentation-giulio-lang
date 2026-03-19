() => `
<h1>Standard Library: Math Module</h1>

<p>The <code>math</code> module provides common mathematical functions, including utilities for rounding, clamping, trigonometry, logarithms, and mathematical constants.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std::math;</code></pre>

<h2>Rounding Functions</h2>

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

<div class="function-doc">
    <div class="function-signature">floor(float_value) → Float</div>
    <div class="function-description">
        <p>Returns the largest integer less than or equal to the given float value.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>float_value</code> (Float) - The float to floor.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The floor of the Float value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(floor(3.14));  // 3.0
println(floor(-2.7)); // -3.0
println(floor(5.0));  // 5.0
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">ceil(float_value) → Float</div>
    <div class="function-description">
        <p>Returns the smallest integer greater than or equal to the given float value.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>float_value</code> (Float) - The float to ceil.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The ceiling of the Float value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(ceil(3.14));  // 4.0
println(ceil(-2.7)); // -2.0
println(ceil(5.0));  // 5.0
</code></pre>
    </div>
</div>

<h2>Power and Root Functions</h2>

<div class="function-doc">
    <div class="function-signature">sqrt(number) → Float</div>
    <div class="function-description">
        <p>Returns the square root of the given number. Accepts both integers and floats. The argument must be non-negative.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>number</code> (Integer or Float) - The number to take the square root of.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The square root as a Float.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(sqrt(16));  // 4.0
println(sqrt(2.0)); // 1.4142135...
println(sqrt(625)); // 25.0
</code></pre>
    </div>
</div>

<h2>Trigonometric Functions</h2>

<p>All trigonometric functions accept both integers and floats, and return Float values. Angles are measured in radians.</p>

<div class="function-doc">
    <div class="function-signature">sin(angle) → Float</div>
    <div class="function-description">
        <p>Returns the sine of the given angle (in radians).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>angle</code> (Integer or Float) - The angle in radians.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The sine of the angle.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(sin(0));          // 0.0
println(sin(math.PI / 2)); // 1.0
println(sin(math.PI));     // ~0.0 (floating point)
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">cos(angle) → Float</div>
    <div class="function-description">
        <p>Returns the cosine of the given angle (in radians).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>angle</code> (Integer or Float) - The angle in radians.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The cosine of the angle.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(cos(0));     // 1.0
println(cos(math.PI)); // -1.0
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">tan(angle) → Float</div>
    <div class="function-description">
        <p>Returns the tangent of the given angle (in radians).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>angle</code> (Integer or Float) - The angle in radians.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The tangent of the angle.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(tan(0));              // 0.0
println(tan(math.PI / 4));    // 1.0
</code></pre>
    </div>
</div>

<h2>Logarithmic Functions</h2>

<div class="function-doc">
    <div class="function-signature">log(number) → Float</div>
    <div class="function-description">
        <p>Returns the natural (base e) logarithm of the given number. The argument must be positive.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>number</code> (Integer or Float) - The number to take the logarithm of. Must be positive.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The natural logarithm of the number.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(log(1));      // 0.0
println(log(math.E));  // 1.0
println(log(10));      // ~2.302585
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">log10(number) → Float</div>
    <div class="function-description">
        <p>Returns the base-10 logarithm of the given number. The argument must be positive.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>number</code> (Integer or Float) - The number to take the logarithm of. Must be positive.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The base-10 logarithm of the number.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(log10(1));   // 0.0
println(log10(10));  // 1.0
println(log10(100)); // 2.0
</code></pre>
    </div>
</div>

<h2>Utility Functions</h2>

<div class="function-doc">
    <div class="function-signature">abs(number) → Integer or Float</div>
    <div class="function-description">
        <p>Returns the absolute value of the given number. Works with both integers and floats.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>number</code> (Integer or Float) - The number to get the absolute value of.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The absolute value. Returns an Integer if input is Integer, Float otherwise.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(abs(-5));    // 5
println(abs(5));     // 5
println(abs(-3.14)); // 3.14
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">min(a, b) → Integer or Float</div>
    <div class="function-description">
        <p>Returns the smaller of two numbers. Can mix integers and floats; returns Float if either argument is a Float.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>a</code> (Integer or Float) - First number.</li>
            <li><code>b</code> (Integer or Float) - Second number.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The smaller of the two values.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(min(3, 7));      // 3
println(min(5.0, 3.2));  // 3.2
println(min(10, -2));    // -2
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">max(a, b) → Integer or Float</div>
    <div class="function-description">
        <p>Returns the larger of two numbers. Can mix integers and floats; returns Float if either argument is a Float.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>a</code> (Integer or Float) - First number.</li>
            <li><code>b</code> (Integer or Float) - Second number.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The larger of the two values.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(max(3, 7));      // 7
println(max(5.0, 3.2));  // 5.0
println(max(10, -2));    // 10
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

<h2>Constants</h2>

<div class="function-doc">
    <div class="function-signature">PI → Float</div>
    <div class="function-description">
        <p>Mathematical constant π (pi), the ratio of a circle's circumference to its diameter.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>Approximately 3.141592653589793.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(math.PI);           // 3.141592653589793
println(2 * math.PI * 5);   // Circumference of circle with radius 5
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">E → Float</div>
    <div class="function-description">
        <p>Mathematical constant e, the base of natural logarithms.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>Approximately 2.718281828459045.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(math.E);           // 2.718281828459045
println(log(math.E));       // 1.0
</code></pre>
    </div>
</div>
`;
