() => `
<h1>Structs</h1>

<p>Structs (structures) allow you to define custom data types that group related data and behavior together. They are the primary mechanism for object-oriented programming patterns in G-lang.</p>

<h2>Defining a Struct</h2>

<p>Use the <code>struct</code> keyword to define a new type. Inside the block, you define fields (data) and methods (functions).</p>

<pre><code>struct User {
    username: null,
    email: null,
    is_active: true
}</code></pre>

<p>Fields can be initialized with default values.</p>

<h2>Instantiation</h2>

<p>To create an instance of a struct, use the struct name followed by curly braces containing the initial values for the fields.</p>

<pre><code>let user = User {
    username: "alice",
    email: "alice@example.com"
};</code></pre>

<p>Any fields not explicitly provided during instantiation will retain their default values defined in the struct definition.</p>

<pre><code>println(user.is_active); // true</code></pre>

<h2>Accessing and Modifying Fields</h2>

<p>Use the dot operator <code>.</code> to access or modify fields of a struct instance.</p>

<pre><code>// Accessing
println(user.username);

// Modifying
user.is_active = false; // NOT SUPPORTED CURRENTLY</code></pre>

<h2>Methods</h2>

<p>Methods are functions defined inside a struct. They allow you to define behavior associated with the data.</p>

<h3>The <code>this</code> Keyword</h3>

<p>Inside a method, the special variable <code>this</code> refers to the current instance of the struct. You use it to access fields and other methods.</p>

<pre><code>struct Rectangle {
    width: 0,
    height: 0,

    area: fn() {
        return this.width * this.height;
    },

    scale: fn(factor) {
        this.width = this.width * factor;
        this.height = this.height * factor;
    }
}</code></pre>

<h3>Calling Methods</h3>

<p>Methods are called using the dot notation, just like accessing fields.</p>

<pre><code>let rect = Rectangle {
    width: 10,
    height: 5
};

println("Area: ", rect.area()); // 50

rect.scale(2);
println("New dimensions: ", rect.width, "x", rect.height); // 20x10</code></pre>

<div class="alert alert-info">
    <strong>Convention:</strong> It is standard practice to use <strong>PascalCase</strong> for struct names (e.g., <code>Person</code>, <code>HttpRequest</code>) and <strong>snake_case</strong> for fields and methods.
</div>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Learn about the <a href="#stdlib-io">Standard Library</a> to see what built-in functionality is available.
</div>
`;