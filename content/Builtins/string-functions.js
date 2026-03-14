() => `
<h1>Built-in String Functions & Methods</h1>

<p>G-lang provides a variety of built-in methods for string manipulation. Since strings are immutable, these methods always return a new string and do not modify the original one.</p>

<h2>Basic Operations</h2>

<h3>Concatenation</h3>
<p>You can join strings together using the <code>+</code> operator.</p>
<pre><code>let part1 = "Hello, ";
let part2 = "World!";
let greeting = part1 + part2;
println(greeting); // "Hello, World!"</code></pre>

<h3>Accessing Characters</h3>
<p>You can access individual characters of a string using the <code>.get(index)</code> method or square brackets <code>[]</code>.</p>
<pre><code>let message = "G";
println(message.get(0)); // "G"
println(message[1]); // "i"
</code></pre>

<h2>Method Reference</h2>

<div class="function-doc">
    <div class="function-signature">.len() → Integer</div>
    <div class="function-description">
        <p>Returns the number of characters in the string.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Integer representing the length of the string.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let message = "G";
println(message.len()); // 6</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.is_empty() → Boolean</div>
    <div class="function-description">
        <p>Checks if a string has no characters.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the string is empty, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let empty_str = "";
println(empty_str.is_empty()); // true
let full_str = "hello";
println(full_str.is_empty()); // false</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.get(index) → String</div>
    <div class="function-description">
        <p>Returns the character at the specified index as a new string.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>index</code> (Integer) - The index of the character to retrieve.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new String containing the character at the given index.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let letters = "abc";
println(letters.get(1)); // "b"</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> Requesting an index that is out of bounds will cause a runtime error.
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.starts_with(prefix) → Boolean</div>
    <div class="function-description">
        <p>Checks if a string starts with the specified prefix.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>prefix</code> (String) - The string to check for at the beginning.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the string starts with the prefix, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let filename = "document.pdf";
println(filename.starts_with("doc")); // true
println(filename.starts_with("img")); // false</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.ends_with(suffix) → Boolean</div>
    <div class="function-description">
        <p>Checks if a string ends with the specified suffix.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>suffix</code> (String) - The string to check for at the end.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the string ends with the suffix, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let filename = "photo.jpg";
println(filename.ends_with(".jpg")); // true
println(filename.ends_with(".png")); // false</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">replace(string, old, new) / .replace(old, new) → String</div>
    <div class="function-description">
        <p>Returns a new string with all occurrences of a substring replaced by a new one.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>string</code> (String) - The original string (implicit if used as a method).</li>
            <li><code>old</code> (String) - The substring to be replaced.</li>
            <li><code>new</code> (String) - The substring to replace with.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new String with the replacements made.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let message = "Hello world, world!";
let new_message = message.replace("world", "G");
println(new_message); // "Hello G, G!"
let new_message_fn = replace(message, "world", "G");
println(new_message_fn); // "Hello G, G!"</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">split(string, delimiter) / .split(delimiter) → Array</div>
    <div class="function-description">
        <p>Splits a string into an array of substrings based on a delimiter.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>string</code> (String) - The string to split (implicit if used as a method).</li>
            <li><code>delimiter</code> (String) - The string to split by.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Array of strings.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = "apple,banana,cherry";
let fruits = data.split(",");
println(fruits); // ["apple", "banana", "cherry"]
let fruits_fn = split(data, ",");
println(fruits_fn); // ["apple", "banana", "cherry"]
println(fruits[1]); // "banana"</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.trim() → String</div>
    <div class="function-description">
        <p>Removes whitespace from both the beginning and end of a string.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new String with leading and trailing whitespace removed.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let input = "   some text   ";
let trimmed = input.trim();
println("'", trimmed, "'"); // "'some text'"</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.to_int() → Integer</div>
    <div class="function-description">
        <p>Converts a string to an integer. The string is trimmed before conversion.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Integer value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let num_str = "  123  ";
let num = num_str.to_int();
println(num + 1); // 124</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> If the string cannot be parsed as an integer, a runtime error will occur.
    </div>
</div>


<div class="alert alert-success">
    <strong>Next Steps:</strong> Explore <a href="#data-types">Data Types</a> for more information on strings and other built-in types.
</div>
`;