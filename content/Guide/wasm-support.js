() => `
<h1>WebAssembly (WASM) Support</h1>

<p>G-lang has built-in support for WebAssembly (WASM), allowing you to import and use functions from compiled <code>.wasm</code> or text-format <code>.wat</code> files. This enables integration with a vast ecosystem of WASM modules and allows you to write performance-critical code in other languages that compile to WASM.</p>

<div class="alert alert-info">
     <strong>Note:</strong> WASM support must be enabled when building G-lang. If you encounter errors about WASM runtime not being available, ensure your installation includes WASM support.
</div>

<h2>WASI Support</h2>
<p>Our WASM runtime supports WASI (WebAssembly System Interface) preview versions 1 and 2 (WASI p1 and p2). This allows G-lang programs to interact with the system through standardized APIs when running WASM modules.</p>
<p>WASI provides access to:</p>
<ul>
    <li>File system operations</li>
    <li>Environment variables</li>
    <li>Clock and timing functions</li>
    <li>Random number generation</li>
    <li>Networking capabilities</li>
</ul>
<p>To use WASI features, ensure your WASM modules are compiled with WASI support enabled.</p>

<h2>Importing WASM Modules</h2>

<p>WASM modules are imported using the <code>wasm::</code> prefix followed by the module name (without extension). The interpreter will look for either a <code>.wasm</code> or <code>.wat</code> file in the same directory as your script.</p>

<pre><code>import wasm::my_module;

let result = my_module.add(5, 3);
println(result);
</code></pre>

<p>The module name can include path separators for subdirectories:</p>

<pre><code>import wasm::math::utils;

let value = utils.sqrt(16);
println(value);
</code></pre>

<h2>Supported File Formats</h2>

<h3>Binary WASM (.wasm)</h3>

<p>Compiled WebAssembly binary files are the standard format produced by most compilers (Rust, C, C++, etc.).</p>

<pre><code>import wasm::fast_math;

let result = fast_math.complex_calculation(1000);
println(result);
</code></pre>

<h3>Text Format WASM (.wat)</h3>

<p>WebAssembly Text Format is a human-readable form of WASM. Files with <code>.wat</code> extension are automatically parsed and compiled.</p>

<pre><code>import wasm::simple_ops;

let sum = simple_ops.sum_array([1, 2, 3, 4, 5]);
println(sum); // 15
</code></pre>

<h3>Example .wat File</h3>

<p>Here's a simple WAT module that adds two numbers:</p>

<pre><code>(module
  (func $add (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add)
  
  (export "add" (func $add)))
</code></pre>

<p>Save this as <code>math_ops.wat</code> in the same directory as your G-lang script:</p>

<pre><code>import wasm::math_ops;

let result = math_ops.add(10, 20);
println(result); // 30
</code></pre>

<h2>Type Conversions</h2>

<p>G-lang automatically converts between its native types and WASM types when calling functions:</p>

<table class="data-table">
    <thead>
        <tr>
            <th>G-lang Type</th>
            <th>WASM Type</th>
            <th>Notes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Integer</td>
            <td>i32</td>
            <td>32-bit signed integer</td>
        </tr>
        <tr>
            <td>Float</td>
            <td>f64</td>
            <td>64-bit floating point</td>
        </tr>
        <tr>
            <td>Boolean</td>
            <td>i32</td>
            <td>0 for false, 1 for true</td>
        </tr>
        <tr>
            <td>String</td>
            <td>i32 (pointer)</td>
            <td>Passed as memory pointer</td>
        </tr>
        <tr>
            <td>Array</td>
            <td>i32 (pointer)</td>
            <td>Passed as memory pointer to array data</td>
        </tr>
    </tbody>
</table>

<h3>Return Values</h3>

<p>Return values from WASM functions are automatically converted back to G-lang types:</p>

<pre><code>import wasm::calculator;

let num = calculator.get_number();  // Returns i32 -> Integer
println(num);

let pi_value = calculator.get_pi(); // Returns f64 -> Float
println(pi_value);
</code></pre>

<h2>Working with Strings</h2>

<p>When passing strings to WASM functions, G-lang handles memory allocation automatically. Strings are written to the WASM module's memory and passed as pointers.</p>

<pre><code>import wasm::string_processor;

let input = "Hello, WASM!";
let length = string_processor.string_length(input);
println(length); // 13

let upper = string_processor.to_upper(input);
println(upper); // "HELLO, WASM!"
</code></pre>

<div class="alert alert-warning">
    <strong>Memory Requirements:</strong> WASM modules that use strings or arrays must export memory. If a module doesn't export memory, string/array operations will fail.
</div>

<h2>Module Discovery</h2>

<p>G-lang searches for WASM modules in the following order:</p>

<ol>
    <li>First looks for <code>&lt;module_name&gt;.wasm</code></li>
    <li>If not found, looks for <code>&lt;module_name&gt;.wat</code></li>
    <li>If neither exists, throws an error</li>
</ol>

<p>For nested imports like <code>wasm::math::utils</code>:</p>

<ol>
    <li>Looks for <code>./math/utils.wasm</code></li>
    <li>Falls back to <code>./math/utils.wat</code></li>
</ol>

<h2>Example: Using a Rust-Compiled WASM Module</h2>

<h3>Rust Source (lib.rs)</h3>

<pre><code>#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn factorial(n: i32) -> i32 {
    if n <= 1 { 1 } else { n * factorial(n - 1) }
}

#[no_mangle]
pub extern "C" fn is_prime(n: i32) -> i32 {
    if n < 2 { return 0; }
    for i in 2..((n as f64).sqrt() as i32 + 1) {
        if n % i == 0 { return 0; }
    }
    1
}
</code></pre>

<h3>Compile with wasm-pack</h3>

<pre><code>wasm-pack build --target no-modules
</code></pre>

<h3>Use in G-lang</h3>

<pre><code>import wasm::my_wasm_lib;

println(my_wasm_lib.add(5, 3));       // 8
println(my_wasm_lib.factorial(5));    // 120
println(my_wasm_lib.is_prime(17));   // 1 (true)
println(my_wasm_lib.is_prime(15));   // 0 (false)
</code></pre>

<h2>Limitations</h2>

<ul>
    <li><strong>No host imports:</strong> WASM modules cannot import functions from the host environment (G-lang runtime)</li>
    <li><strong>Limited type support:</strong> Only basic types (integers, floats, booleans) and strings/arrays are supported</li>
    <li><strong>Linear memory:</strong> Complex memory management patterns may not work as expected</li>
    <li><strong>Single memory export:</strong> Modules should export a single "memory" instance</li>
</ul>

<h2>Error Handling</h2>

<p>WASM-related errors are wrapped as RuntimeErrors with descriptive messages:</p>

<pre><code>try {
    import wasm::nonexistent;
} catch error {
    println("Import failed: ", error);
    // Output: "Failed to find wasm module 'nonexistent': neither .wasm nor .wat file found"
}
</code></pre>

<div class="alert alert-error">
    <strong>Function not found:</strong> If you try to call a function that doesn't exist in the WASM module:
    <code>Invalid operation: Function 'unknown_func' not found in wasm module</code>
</div>

<div class="alert alert-error">
    <strong>Type mismatch:</strong> If you pass incompatible types:
    <code>Type mismatch: expected integer, got string</code>
</div>

<h2>Best Practices</h2>

<ul>
    <li><strong>Keep functions simple:</strong> Prefer simple, focused functions over complex APIs</li>
    <li><strong>Use i32 for integers:</strong> The most compatible type for cross-language integers</li>
    <li><strong>Export memory:</strong> Always export memory if your module handles strings</li>
    <li><strong>Test in isolation:</strong> Verify WASM functions work correctly before integrating</li>
    <li><strong>Document your interface:</strong> Specify which functions are available and their expected types</li>
</ul>
`;
