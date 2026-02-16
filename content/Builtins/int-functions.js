() => `
<h1>Built-in Integer Functions & Methods</h1>

<p>Giulio-lang provides a variety of functions and methods for working with integers. Integers represent whole numbers.</p>

<h2>Basic Operations</h2>

<h3>Arithmetic</h3>
<p>Integers support standard arithmetic operations using <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, and <code>%</code>.</p>
<pre><code>let x = 10;
let y = 3;
println(x + y); // 13
println(x - y); // 7
println(x * y); // 30
println(x / y); // 3
println(x % y); // 1</code></pre>

<h2>Method Reference</h2>

<p>These methods are called on an integer instance.</p>

<div class="function-doc">
    <div class="function-signature">.to_string() → String</div>
    <div class="function-description">
        <p>Returns the string representation of the integer.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A String.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let num = 42;
println(num.to_string()); // "42"</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.to_float() → Float</div>
    <div class="function-description">
        <p>Converts the integer to a floating-point number.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Float.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let num = 10;
println(num.to_float()); // 10.0</code></pre>
    </div>
</div>

<h2>Math Functions</h2>

<p>These operations are available both as global functions and as methods.</p>

<div class="function-doc">
    <div class="function-signature">abs(n) / .abs() → Integer</div>
    <div class="function-description">
        <p>Returns the absolute value of the integer.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>n</code> (Integer) - The number to process (implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The absolute value as an Integer.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let neg = -5;
println(abs(neg));   // 5
println(neg.abs());  // 5</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">pow(base, exp) / .pow(exp) → Integer</div>
    <div class="function-description">
        <p>Returns the base raised to the power of the exponent.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>base</code> (Integer) - The base number (implicit if used as a method).</li>
            <li><code>exp</code> (Integer) - The exponent. Must be non-negative.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The result of the exponentiation as an Integer.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let base = 2;
println(pow(base, 3)); // 8
println(base.pow(3));  // 8</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">min(a, b) / .min(other) → Integer</div>
    <div class="function-description">
        <p>Returns the smaller of two integers.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>a</code> (Integer) - The first integer (implicit if used as a method).</li>
            <li><code>b</code> (Integer) - The second integer.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The smaller Integer.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(min(10, 20)); // 10
println(10.min(20));  // 10</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">max(a, b) / .max(other) → Integer</div>
    <div class="function-description">
        <p>Returns the larger of two integers.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>a</code> (Integer) - The first integer (implicit if used as a method).</li>
            <li><code>b</code> (Integer) - The second integer.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The larger Integer.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(max(10, 20)); // 20
println(10.max(20));  // 20</code></pre>
    </div>
</div>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Explore <a href="#float-functions">Float Functions</a> for operations on floating-point numbers.
</div>
`;