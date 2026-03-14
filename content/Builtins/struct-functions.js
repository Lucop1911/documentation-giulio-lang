() => `
<h1>Built-in Struct Functions & Methods</h1>

<p>Structs are composite data types that group together related data. G-lang provides several built-in functions and methods to work with struct instances.</p>

<h2>Struct Basics</h2>
<p>Struct fields are typically accessed through dedicated functions and methods. This functional approach ensures that struct manipulations are explicit and predictable.</p>
<pre><code>
struct Person {
    name: "Anonymous",
    age: 0
}

let p1 = Person{};
println(p1); // Person { name: "Anonymous", age: 0 }

let p2 = p1.set_field("name", "G");
println(p2); // Person { name: "G", age: 0 }

let name = p2.get_field("name");
println(name); // "G"
</code></pre>

<h2>Function and Method Reference</h2>

<div class="function-doc">
    <div class="function-signature">get_field(struct, field_name) / .get_field(field_name) → Any</div>
    <div class="function-description">
        <p>Retrieves the value of a specified field from a struct.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>struct</code> (Struct) - The struct instance to access (implicit if used as a method).</li>
            <li><code>field_name</code> (String) - The name of the field to retrieve.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The value of the field. The type depends on the field's value.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let p = Person{name: "Ada"};
let name = get_field(p, "name");
println(name); // "Ada"
let name_method = p.get_field("name");
println(name_method); // "Ada"</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> Accessing a field that does not exist will cause a runtime error.
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">set_field(struct, field_name, value) / .set_field(field_name, value) → Struct</div>
    <div class="function-description">
        <p>Returns a new struct with the value of a specified field updated. Since structs are immutable, the original struct is not modified.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>struct</code> (Struct) - The struct instance to use as a base (implicit if used as a method).</li>
            <li><code>field_name</code> (String) - The name of the field to set.</li>
            <li><code>value</code> (Any) - The new value for the field.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new Struct instance with the updated field.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let p1 = Person{age: 30};
let p2 = set_field(p1, "age", 31);
println(get_field(p1, "age")); // 30
println(get_field(p2, "age")); // 31
let p3 = p1.set_field("age", 32);
println(get_field(p3, "age")); // 32
</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">fields(struct) / .fields() → Array</div>
    <div class="function-description">
        <p>Returns an array containing the names of all fields in a struct.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>struct</code> (Struct) - The struct instance (implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Array of Strings, where each string is a field name.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let p = Person{};
let field_names = fields(p);
println(field_names); // ["name", "age"] or ["age", "name"]
let field_names_method = p.fields();
println(field_names_method); // ["name", "age"] or ["age", "name"]
        </code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">name(struct) / .name() → String</div>
    <div class="function-description">
        <p>Returns the name of the struct type.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>struct</code> (Struct) - The struct instance (implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A String representing the name of the struct's type.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let p = Person{};
let type_name = name(p);
println(type_name); // "Person"
let type_name_method = p.name();
println(type_name_method); // "Person"
        </code></pre>
    </div>
</div>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Learn more about defining your own <a href="#structs">Structs</a>.
</div>
`;