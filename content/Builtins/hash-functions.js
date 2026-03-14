() => `
<h1>Built-in Hash Functions & Methods</h1>

<p>Hashes, also known as maps or dictionaries, are collections of key-value pairs. G-lang provides a set of built-in functions and methods for working with hashes.</p>

<h2>Hash Basics</h2>
<p>Hash keys can be Strings, Integers, or Booleans. Values can be of any type.</p>
<pre><code>let person = {"name": "G", "age": 10, true: "is_awesome"};
println(person["name"]); // "G"
println(person.get("age")); // 10
</code></pre>

<h2>Function and Method Reference</h2>

<div class="function-doc">
    <div class="function-signature">keys(hash) / .keys() → Array</div>
    <div class="function-description">
        <p>Returns an array containing all the keys from the hash.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>hash</code> (Hash) - The input hash (implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Array of keys.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1, "b": 2};
println(keys(data)); // ["a", "b"] or ["b", "a"]
println(data.keys()); // ["a", "b"] or ["b", "a"]
        </code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">values(hash) / .values() → Array</div>
    <div class="function-description">
        <p>Returns an array containing all the values from the hash.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>hash</code> (Hash) - The input hash (implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Array of values.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1, "b": 2};
println(values(data)); // [1, 2] or [2, 1]
println(data.values()); // [1, 2] or [2, 1]
        </code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">clear(hash) / .clear() → Hash</div>
    <div class="function-description">
        <p>Returns a new, empty hash.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>hash</code> (Hash) - The input hash (implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new empty Hash.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1, "b": 2};
let cleared = clear(data);
println(cleared); // {}
let cleared_method = data.clear();
println(cleared_method); // {}
        </code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.len() → Integer</div>
    <div class="function-description">
        <p>Returns the number of key-value pairs in the hash.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Integer representing the number of pairs.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1, "b": 2};
println(data.len()); // 2</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.is_empty() → Boolean</div>
    <div class="function-description">
        <p>Checks if a hash has no key-value pairs.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the hash is empty, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let empty_hash = {};
println(empty_hash.is_empty()); // true
let full_hash = {"a": 1};
println(full_hash.is_empty()); // false</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.get(key) → Any</div>
    <div class="function-description">
        <p>Retrieves the value associated with the given key. If the key does not exist, it returns <code>null</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>key</code> (String, Integer, or Boolean) - The key of the value to retrieve.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The value associated with the key, or <code>null</code> if the key is not found.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"name": "G", "version": 1.0};
println(data.get("name")); // "G"
println(data.get("creator")); // null</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.has(key) → Boolean</div>
    <div class="function-description">
        <p>Checks if the hash contains the given key.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>key</code> (String, Integer, or Boolean) - The key to check for.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the key exists, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1, "b": 2};
println(data.has("a")); // true
println(data.has("c")); // false</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.set(key, value) → Hash</div>
    <div class="function-description">
        <p>Returns a new hash with the given key-value pair added or updated.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>key</code> (String, Integer, or Boolean) - The key to set.</li>
            <li><code>value</code> (Any) - The value to associate with the key.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new Hash with the key-value pair.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1};
let new_data = data.set("b", 2);
println(new_data); // {"a": 1, "b": 2}
let updated_data = new_data.set("a", 100);
println(updated_data); // {"a": 100, "b": 2}
println(data); // {"a": 1} (original is unchanged)
        </code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.remove(key) → Hash</div>
    <div class="function-description">
        <p>Returns a new hash with the given key removed.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>key</code> (String, Integer, or Boolean) - The key to remove.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new hash with the key removed.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"a": 1, "b": 2};
let new_data = data.remove("a");
println(new_data); // {"b": 2}
println(data); // {"a": 1, "b": 2} (original is unchanged)
        </code></pre>
    </div>
</div>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Explore <a href="#data-types">Data Types</a> for more information on hashes and other built-in types.
</div>
`;