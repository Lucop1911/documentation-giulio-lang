() => `
<h1>Standard Library: Env Module</h1>

<p>The <code>env</code> module provides access to the program's environment, including command-line arguments.</p>

<p>To use the functions in this module, you must first import it:</p>
<pre><code>import std::env;</code></pre>

<h2>Function Reference</h2>

<div class="function-doc">
    <div class="function-signature">args() → Array</div>
    <div class="function-description">
        <p>Returns an array of strings containing the command-line arguments passed to the program. The first argument is typically the script name, followed by any additional arguments provided by the user.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Array of Strings containing the command-line arguments (excluding the interpreter/executable path).</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>// If run with: g my_script.g arg1 arg2 arg3
let arguments = env.args();
println(arguments); // ["arg1", "arg2", "arg3"]

// Accessing individual arguments
let first_arg = arguments[0];
println(first_arg); // "arg1"

// Check argument count
println(len(arguments)); // 3
</code></pre>
    </div>
</div>

<h2>Use Cases</h2>

<h3>Processing Command-Line Flags</h3>

<pre><code>import std::env;

fn main() {
    let args = env.args();
    
    // Check for help flag
    if (args.contains("--help") || args.contains("-h")) {
        println("Usage: my_program.g [options]");
        println("Options:");
        println("  --help, -h    Show this help message");
        println("  --verbose     Enable verbose output");
        return;
    }
    
    // Check for verbose flag
    let verbose = args.contains("--verbose");
    if (verbose) {
        println("Verbose mode enabled");
    }
}

main();
</code></pre>

<h3>Configuration via Arguments</h3>

<pre><code>import std::env;
import std::json;

fn main() {
    let args = env.args();
    
    // Expect: g config.g --file settings.json
    if (len(args) >= 2 && args[0] == "--file") {
        let config_path = args[1];
        let config_json = io.read_file(config_path);
        let config = json.deserialize(config_json);
        println("Loaded config from: ", config_path);
        println(config);
    } else {
        println("No config file specified");
    }
}

main();
</code></pre>
`;
