() => `
<h1>Standard Library: HTTP Module</h1>

<p>The <code>http</code> module provides functions for making HTTP requests. All HTTP functions are asynchronous and return a Future that should be used with <code>await</code>.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std::http;</code></pre>

<p>All HTTP functions return a Hash with the following structure:</p>
<pre><code>{
    status: Integer,  // HTTP status code (e.g., 200, 404, 500)
    body: String     // Response body as a string
}</code></pre>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">get(url) → Future</div>
    <div class="function-description">
        <p>Sends an HTTP GET request to the specified URL.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>url</code> (String) - The URL to send the GET request to.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to a Hash containing <code>status</code> (Integer) and <code>body</code> (String).</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn fetch_data() {
    let response = await http.get("https://api.example.com/data");
    println(response["status"]); // e.g., 200
    println(response["body"]);   // response content
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">post(url, body) → Future</div>
    <div class="function-description">
        <p>Sends an HTTP POST request to the specified URL with the given request body.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>url</code> (String) - The URL to send the POST request to.</li>
            <li><code>body</code> (String) - The request body to send.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to a Hash containing <code>status</code> (Integer) and <code>body</code> (String).</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn create_user() {
    let response = await http.post("https://api.example.com/users", '{"name": "G"}');
    println(response["status"]); // e.g., 201
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">put(url, body) → Future</div>
    <div class="function-description">
        <p>Sends an HTTP PUT request to the specified URL with the given request body.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>url</code> (String) - The URL to send the PUT request to.</li>
            <li><code>body</code> (String) - The request body to send.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to a Hash containing <code>status</code> (Integer) and <code>body</code> (String).</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn update_user() {
    let response = await http.put("https://api.example.com/users/1", '{"name": "G v2"}');
    println(response["status"]); // e.g., 200
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">delete(url) → Future</div>
    <div class="function-description">
        <p>Sends an HTTP DELETE request to the specified URL.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>url</code> (String) - The URL to send the DELETE request to.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to a Hash containing <code>status</code> (Integer) and <code>body</code> (String).</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn remove_user() {
    let response = await http.delete("https://api.example.com/users/1");
    println(response["status"]); // e.g., 204
}</code></pre>
    </div>
</div>
`;
