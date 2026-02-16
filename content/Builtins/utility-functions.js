() => `
<h1>Utility Functions</h1>

<p>Giulio-lang includes a set of general-purpose utility functions that can be useful for debugging and dynamic type checking.</p>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">type(value) → String</div>
    <div class="function-description">
        <p>Returns a string representing the type of the given value.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>value</code> (Any) - The value whose type you want to inspect.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A String representing the type name (e.g., "Integer", "String", "Array", "Hash", "Boolean", "Null", "Function", or a struct name).</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(type(10));          // "Integer"
println(type("hello"));       // "String"
println(type([1, 2]));        // "Array"
println(type({}));            // "Hash"
println(type(true));          // "Boolean"
println(type(null));          // "Null"
println(type(println));       // "Function"

struct Car {}
let my_car = Car{};
println(type(my_car));        // "Struct Car"
        </code></pre>
    </div>
</div>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Explore <a href="#data-types">Data Types</a> for a detailed overview of all available types in Giulio-lang.
</div>
`;