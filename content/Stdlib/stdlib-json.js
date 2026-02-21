() => `
<h1>Standard Library: JSON Module</h1>

<p>The <code>json</code> module provides functions for working with JSON (JavaScript Object Notation) data. It allows for serialization (converting Giulio-lang objects to JSON strings) and deserialization (converting JSON strings back into Giulio-lang objects).</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std::json;</code></pre>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">serialize(value) → String</div>
    <div class="function-description">
        <p>Serializes a Giulio-lang value (like a Hash, Array, String, etc.) into a JSON string.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>value</code> (Any) - The Giulio-lang value to serialize. Supported types include Integer, Float, Boolean, String, Array, Hash, Struct, and Null.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A String containing the JSON representation of the value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let data = {"name": "Giulio", "version": 1.0, "features": ["fast", "simple"]};
let json_string = json.serialize(data);
println(json_string); // {"name":"Giulio","version":1.0,"features":["fast","simple"]}
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">deserialize(json_string) → Any</div>
    <div class="function-description">
        <p>Deserializes a JSON string into a Giulio-lang value. JSON objects are converted to Hashes, arrays to Arrays, etc.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>json_string</code> (String) - The JSON string to parse.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Giulio-lang value (Hash, Array, etc.) representing the parsed JSON.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let text = '{"id": 123, "active": true}';
let data = json.deserialize(text);
println(data["id"]); // 123
println(data.get("active")); // true
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">prettify(json_string) → String</div>
    <div class="function-description">
        <p>Parses a JSON string and returns a new, well-formatted (indented) JSON string, which is useful for printing and debugging.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>json_string</code> (String) - The JSON string to format.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new, pretty-printed JSON string.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let compact_json = '{"user":{"id":1,"name":"Giulio"}}';
let pretty_json = json.prettify(compact_json);
println(pretty_json);
// {
//   "user": {
//     "id": 1,
//     "name": "Giulio"
//   }
// }
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">validate(json_string) → Boolean</div>
    <div class="function-description">
        <p>Checks if a given string is a valid JSON string.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>json_string</code> (String) - The string to validate.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the string is valid JSON, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let valid = '{"key": "value"}';
let invalid = '{"key": "value",}'; // trailing comma

println(json.validate(valid));   // true
println(json.validate(invalid)); // false
</code></pre>
    </div>
</div>

`;