() => `
<h1>Built-in Float Functions & Methods</h1>

<p>G-lang provides a variety of methods for working with floating-point numbers. Floats are used to represent numbers with fractional parts.</p>

<h2>Basic Operations</h2>

<h3>Arithmetic</h3>
<p>Floats support standard arithmetic operations using <code>+</code>, <code>-</code>, <code>*</code>, and <code>/</code>.</p>
<pre><code>let x = 10.5;
let y = 2.0;
println(x + y); // 12.5
println(x - y); // 8.5
println(x * y); // 21.0
println(x / y); // 5.25</code></pre>

<h2>Method Reference</h2>

<div class="function-doc">
    <div class="function-signature">.to_int() → Integer</div>
    <div class="function-description">
        <p>Converts the float to an integer by truncating the decimal part.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Integer representing the truncated value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let val = 5.99;
println(val.to_int()); // 5

let neg = -3.14;
println(neg.to_int()); // -3</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.to_string() → String</div>
    <div class="function-description">
        <p>Returns the string representation of the float.</p>
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
        <pre><code>let pi = 3.14159;
println(pi.to_string()); // "3.14159"</code></pre>
    </div>
</div>

<h2>Converting to Float</h2>

<p>You can convert Integers, BigIntegers, and Strings to floats using the <code>.to_float()</code> method.</p>

<div class="function-doc">
    <div class="function-signature">.to_float() → Float</div>
    <div class="function-description">
        <p>Converts the value to a Float. When converting from a String, whitespace is trimmed before parsing.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Float value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let from_int = 42.to_float();
let from_str = "  12.34  ".to_float();
println(from_str); // 12.34</code></pre>
    </div>
</div>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Explore <a href="#data-types">Data Types</a> for a broader overview of available types.
</div>
`;