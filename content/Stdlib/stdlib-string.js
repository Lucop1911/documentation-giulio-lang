() => `
<h1>Standard Library: String Module</h1>

<p>The <code>string</code> module provides additional functions for string manipulation, including joining, reversing, and repeating strings.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std::string;</code></pre>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">join(array, separator) → String</div>
    <div class="function-description">
        <p>Joins all elements of an array (which must all be strings) into a single string, separated by the given separator.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>array</code> (Array) - An array of strings to join.</li>
            <li><code>separator</code> (String) - The string to insert between each element.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new String containing the joined elements.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let parts = ["G", "is", "awesome"];
let sentence = string.join(parts, " ");
println(sentence); // "G is awesome"

let csv = string.join(["a", "b", "c"], ",");
println(csv); // "a,b,c"
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">reverse(string) → String</div>
    <div class="function-description">
        <p>Returns a new string with the characters in reverse order.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>string</code> (String) - The string to reverse.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new String with characters in reverse order.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let original = "hello";
let reversed = string.reverse(original);
println(reversed); // "olleh"

let palindrome = "racecar";
let reversed_palindrome = string.reverse(palindrome);
println(reversed_palindrome); // "racecar"
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">repeat(string, count) → String</div>
    <div class="function-description">
        <p>Returns a new string that repeats the given string the specified number of times. The count must be non-negative.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>string</code> (String) - The string to repeat.</li>
            <li><code>count</code> (Integer) - The number of times to repeat the string. Must be non-negative.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new String containing the repeated text.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let stars = string.repeat("*", 5);
println(stars); // "*****"

let dashes = string.repeat("-", 3);
println(dashes); // "---"

let repeated = string.repeat("ab", 3);
println(repeated); // "ababab"

let empty = string.repeat("test", 0);
println(empty); // ""
</code></pre>
    </div>
</div>
`;
