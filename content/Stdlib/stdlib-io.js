() => `
<h1>Standard Library: IO Module</h1>

<p>The <code>io</code> module provides a comprehensive set of functions for interacting with the file system. It allows you to read from and write to files, manage directories, and check the status of file system entries.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std::io;</code></pre>

<p>Most IO functions have both synchronous and asynchronous versions. The async versions return a Future and should be used with <code>await</code> inside async functions.</p>

<h2>File Operations</h2>

<div class="function-doc">
    <div class="function-signature">read_file(path) → String</div>
    <div class="function-description">
        <p>Reads the entire content of a file into a single string (synchronous).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to read.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A String containing the file's content.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let content = read_file("data.txt");
println(content);</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">read_file_async(path) → Future</div>
    <div class="function-description">
        <p>Reads the entire content of a file into a single string (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to read.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to a String containing the file's content.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn read_data() {
    let content = await io.read_file_async("data.txt");
    println(content);
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">write_file(path, content) → Null</div>
    <div class="function-description">
        <p>Writes a string of content to a file. If the file already exists, its contents are overwritten. If it does not exist, it is created (synchronous).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to write to.</li>
            <li><code>content</code> (String) - The content to write.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p><code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>io.write_file("output.txt", "Hello, Giulio!");</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">write_file_async(path, content) → Future</div>
    <div class="function-description">
        <p>Writes a string of content to a file (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to write to.</li>
            <li><code>content</code> (String) - The content to write.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to <code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn save_data() {
    await io.write_file_async("output.txt", "Hello, Giulio!");
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">append_file(path, content) → Null</div>
    <div class="function-description">
        <p>Appends a string of content to the end of a file (synchronous). If the file does not exist, it is created.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to append to.</li>
            <li><code>content</code> (String) - The content to append.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p><code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>io.append_file("log.txt", "New entry.");</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">append_file_async(path, content) → Future</div>
    <div class="function-description">
        <p>Appends a string of content to the end of a file (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to append to.</li>
            <li><code>content</code> (String) - The content to append.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to <code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn log_message() {
    await io.append_file_async("log.txt", "New entry.");
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">delete_file(path) → Null</div>
    <div class="function-description">
        <p>Deletes a file from the file system (synchronous).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to delete.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p><code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>io.delete_file("temp.txt");</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">delete_file_async(path) → Future</div>
    <div class="function-description">
        <p>Deletes a file from the file system (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the file to delete.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to <code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn cleanup() {
    await io.delete_file_async("temp.txt");
}</code></pre>
    </div>
</div>

<h2>Directory Operations</h2>

<div class="function-doc">
    <div class="function-signature">create_dir(path) → Null</div>
    <div class="function-description">
        <p>Creates a directory at the specified path (synchronous). It will create all parent directories if they do not exist.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path of the directory to create.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p><code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>io.create_dir("data/nested");</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">create_dir_async(path) → Future</div>
    <div class="function-description">
        <p>Creates a directory at the specified path (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path of the directory to create.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to <code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn setup() {
    await io.create_dir_async("data/nested");
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">delete_dir(path) → Null</div>
    <div class="function-description">
        <p>Deletes a directory and all of its contents recursively (synchronous).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path of the directory to delete.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p><code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>io.delete_dir("data/old_stuff");</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">delete_dir_async(path) → Future</div>
    <div class="function-description">
        <p>Deletes a directory and all of its contents recursively (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path of the directory to delete.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to <code>null</code> on success.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn cleanup() {
    await io.delete_dir_async("data/old_stuff");
}</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">list_dir(path) → Array</div>
    <div class="function-description">
        <p>Returns an array of strings containing the names of the files and directories within the specified directory (synchronous).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the directory to list.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Array of strings.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let items = io.list_dir(".");
println(items);</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">list_dir_async(path) → Future</div>
    <div class="function-description">
        <p>Returns an array of strings containing the names of the files and directories within the specified directory (asynchronous). Use with <code>await</code>.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to the directory to list.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Future that resolves to an Array of strings.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>async fn get_items() {
    let items = await io.list_dir_async(".");
    println(items);
}</code></pre>
    </div>
</div>

<h2>Path Information</h2>

<div class="function-doc">
    <div class="function-signature">exists(path) → Boolean</div>
    <div class="function-description">
        <p>Checks if a file or directory exists at the given path.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to check.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the path exists, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(io.exists("my_file.txt"));</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">is_file(path) → Boolean</div>
    <div class="function-description">
        <p>Checks if the given path exists and is a file.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to check.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the path points to a file, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(io.is_file("my_app"));</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">is_dir(path) → Boolean</div>
    <div class="function-description">
        <p>Checks if the given path exists and is a directory.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>path</code> (String) - The path to check.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the path points to a directory, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>println(io.is_dir("my_folder"));</code></pre>
    </div>
</div>
`;