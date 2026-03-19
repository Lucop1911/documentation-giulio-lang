() => `
<h1>CLI Reference</h1>

<p>The G-lang CLI (Command Line Interface) provides commands to run scripts, check for errors, and start the interactive REPL.</p>

<h2>Usage</h2>

<pre><code>gl [COMMAND] [OPTIONS]</code></pre>

<h2>Commands</h2>

<div class="function-doc">
    <div class="function-signature">(no command)</div>
    <div class="function-description">
        <p>Starts the REPL (Read-Eval-Print Loop) - an interactive shell for executing G-lang code.</p>
    </div>
    <div class="function-example">
        <pre><code>$ gl
g-lang v1.0.0
Type 'exit' or 'quit' to quit

>></code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">run &lt;file&gt;</div>
    <div class="function-description">
        <p>Executes a G-lang source file (.g extension).</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>file</code> (String) - The path to the .g file to execute.</li>
        </ul>
    </div>
    <div class="function-example">
        <pre><code>$ gl run script.g
Hello, World!</code></pre>
    </div>
    <div class="function-notes">
        <p>Note: The file must have a .g extension.</p>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">check &lt;file&gt;</div>
    <div class="function-description">
        <p>Lexes and parses a G-lang file to check for syntax errors, without executing it.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>file</code> (String) - The path to the .g file to check.</li>
        </ul>
    </div>
    <div class="function-example">
        <pre><code>$ gl check script.g
# No output means no errors found</code></pre>
    </div>
</div>

<h2>Options</h2>

<div class="function-doc">
    <div class="function-signature">-h, --help</div>
    <div class="function-description">
        <p>Prints the help message with usage information.</p>
    </div>
    <div class="function-example">
        <pre><code>$ gl --help</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">-v, --version, --v</div>
    <div class="function-description">
        <p>Prints the version number of G-lang.</p>
    </div>
    <div class="function-example">
        <pre><code>$ gl --version
1.0.0</code></pre>
    </div>
</div>

<h2>Examples</h2>

<div class="function-doc">
    <div class="function-signature">Running a Script</div>
    <div class="function-example">
        <pre><code>$ gl run hello.g
Hello, World!</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">Checking for Errors</div>
    <div class="function-example">
        <pre><code>$ gl check my_script.g
# Exit code 0 = success, non-zero = errors found</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">Interactive REPL</div>
    <div class="function-example">
        <pre><code>$ gl
g-lang v1.0.0
Type 'exit' or 'quit' to quit

>> 2 + 2
4
>> let x = 10;
null
>> x * 2
20
>> exit
Goodbye!</code></pre>
    </div>
</div>

<h2>Exit Codes</h2>

<ul>
    <li><strong>0:</strong> Success</li>
    <li><strong>1:</strong> General error (syntax error, file not found, etc.)</li>
</ul>

<h2>File Extensions</h2>

<p>G-lang source files must use the <code>.g</code> extension. If you try to run a file with a different extension, you'll receive an error:</p>

<pre><code>$ gl run script.txt
Error: File must have .g extension</code></pre>
`
