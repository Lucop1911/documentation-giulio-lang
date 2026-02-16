() => `
<h1>Installation</h1>

<p>Get Giulio-lang up and running on your system with these installation instructions.</p>

<h2>Prerequisites</h2>

<p>To build Giulio-lang from source, you'll need:</p>

<ul>
    <li><strong>Rust 1.70 or later</strong> - <a href="https://www.rust-lang.org/tools/install" target="_blank">Install Rust</a></li>
    <li><strong>Cargo</strong> - Comes bundled with Rust</li>
    <li><strong>Git</strong> - For cloning the repository</li>
</ul>

<h2>Installing Rust</h2>

<p>If you don't have Rust installed, the easiest way is through rustup:</p>

<pre><code>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code></pre>

<p>Or visit <a href="https://www.rust-lang.org/tools/install" target="_blank">rustup.rs</a> for platform-specific instructions.</p>

<h2>Build from Source</h2>

<h3>Step 1: Clone the Repository</h3>

<pre><code>git clone https://github.com/lucop1911/giulio-lang.git
cd giulio-lang</code></pre>

<h3>Step 2: Build the Project</h3>

<pre><code>cargo build --release</code></pre>

<p>The <code>--release</code> flag builds an optimized binary. The compilation may take a few minutes the first time.</p>

<h3>Step 3: Locate the Binary</h3>

<p>After a successful build, the executable will be located at:</p>

<pre><code>target/release/giulio-lang</code></pre>

<h2>Add to PATH (Optional but Recommended)</h2>

<p>To run <code>giulio-lang</code> from anywhere in your system:</p>

<h3>Linux / macOS</h3>

<p>Add the binary location to your PATH by adding this line to your <code>~/.bashrc</code>, <code>~/.zshrc</code>, or equivalent:</p>

<pre><code>export PATH="$PATH:/path/to/giulio-lang/target/release"</code></pre>

<p>Or for the current session only:</p>

<pre><code>export PATH="$PATH:$(pwd)/target/release"</code></pre>

<p>Then reload your shell configuration:</p>

<pre><code>source ~/.bashrc  # or source ~/.zshrc</code></pre>

<h3>Windows</h3>

<p>Add <code>C:\\path\\to\\giulio-lang\\target\\release</code> to your system PATH environment variable:</p>

<ol>
    <li>Search for "Environment Variables" in Windows Settings</li>
    <li>Click "Edit the system environment variables"</li>
    <li>Click "Environment Variables"</li>
    <li>Under "System variables", find and select "Path", then click "Edit"</li>
    <li>Click "New" and add the full path to the release directory</li>
    <li>Click "OK" to save</li>
</ol>

<h2>Verify Installation</h2>

<p>Check that Giulio-lang is installed correctly by running:</p>

<pre><code>giulio-lang --version</code></pre>

<p>You should see the version number printed:</p>

<pre><code>0.1.0</code></pre>

<div class="alert alert-success">
    <strong>Success!</strong> Giulio-lang is now installed on your system.
</div>

<h2>Running Your First Program</h2>

<p>Create a file called <code>hello.giu</code>:</p>

<pre><code>println("Hello, Giulio-lang!");</code></pre>

<p>Run it with:</p>

<pre><code>giulio-lang run hello.giu</code></pre>

<p>Output:</p>

<pre><code>Hello, Giulio-lang!</code></pre>

<h2>Start the REPL</h2>

<p>To start the interactive REPL, simply run:</p>

<pre><code>giulio-lang</code></pre>

<p>You'll see:</p>

<pre><code>Giulio-lang v0.1.0
Type 'exit' or 'quit' to quit

>> </code></pre>

<p>Now you can type expressions and see results immediately!</p>

<div class="alert alert-info">
    <strong>Next Steps:</strong> Continue to the <a href="#quick-start">Quick Start</a> guide to learn the basics of Giulio-lang.
</div>

<h2>Troubleshooting</h2>

<h3>Command Not Found</h3>

<p>If you get a "command not found" error after adding to PATH:</p>

<ul>
    <li>Make sure you reloaded your shell configuration (<code>source ~/.bashrc</code>)</li>
    <li>Verify the path is correct with <code>echo $PATH</code></li>
    <li>Try opening a new terminal window</li>
</ul>

<h3>Build Errors</h3>

<p>If you encounter build errors:</p>

<ul>
    <li>Ensure you have Rust 1.70 or later: <code>rustc --version</code></li>
    <li>Update your Rust toolchain: <code>rustup update stable</code></li>
    <li>Clear the build cache and try again: <code>cargo clean && cargo build --release</code></li>
</ul>

<h3>Permission Errors (Linux/macOS)</h3>

<p>If you get permission errors when running the binary:</p>

<pre><code>chmod +x target/release/giulio-lang</code></pre>

<h2>Alternative: Run Without Installing</h2>

<p>You can run Giulio-lang directly from the repository without adding to PATH:</p>

<pre><code># From the giulio-lang directory
./target/release/giulio-lang

# Or with cargo
cargo run --release</code></pre>

<h2>Updating Giulio-lang</h2>

<p>To update to the latest version:</p>

<pre><code>cd giulio-lang
git pull origin main
cargo build --release</code></pre>
`;