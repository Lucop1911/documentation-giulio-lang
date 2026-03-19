() => `
<h1>REPL Mode</h1>

<p>The REPL (Read-Eval-Print Loop) is an interactive mode that allows you to execute G-lang code directly in the terminal. It's perfect for testing ideas, experimenting with the language, or debugging.</p>

<h2>Starting the REPL</h2>

<p>Simply run <code>gl</code> without any arguments to start the REPL:</p>

<pre><code>$ gl
g-lang v1.0.0
Type 'exit' or 'quit' to quit

>></code></pre>

<h2>Using the REPL</h2>

<p>At the <code>>> </code> prompt, you can enter any valid G-lang expression or statement. The REPL will evaluate it and print the result.</p>

<div class="function-doc">
    <div class="function-signature">Basic Expressions</div>
    <div class="function-example">
        <pre><code>>> 2 + 3
5
>>> "Hello, " + "World!"
Hello, World!
>>> [1, 2, 3].length()
3</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">Variables</div>
    <div class="function-description">
        <p>You can define variables and use them in subsequent expressions.</p>
    </div>
    <div class="function-example">
        <pre><code>>> let x = 10
null
>>> let y = 20
null
>>> x + y
30
>>> let greeting = "Hello"
null
>>> greeting + ", G!"
Hello, G!</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">Functions</div>
    <div class="function-description">
        <p>You can define and call functions.</p>
    </div>
    <div class="function-example">
        <pre><code>>> fn add(a, b) { a + b }
null
>>> add(5, 3)
8
>>> fn greet(name) { "Hello, " + name + "!" }
null
>>> greet("G")
Hello, G!</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">Control Flow</div>
    <div class="function-description">
        <p>You can use if-else statements and loops.</p>
    </div>
    <div class="function-example">
        <pre><code>>> if 5 > 3 { "greater" } else { "lesser" }
greater
>>> let n = 0
null
>>> while n < 5 { println(n); n = n + 1; }
0
1
2
3
4</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">Async Functions</div>
    <div class="function-description">
        <p>REPL supports async functions and the await keyword.</p>
    </div>
    <div class="function-example">
        <pre><code>>> async fn fetch_data() { "data loaded" }
null
>>> fetch_data()
Future</code></pre>
    </div>
</div>

<h2>REPL Commands</h2>

<div class="function-doc">
    <div class="function-signature">exit / quit</div>
    <div class="function-description">
        <p>Exits the REPL and returns to the terminal.</p>
    </div>
    <div class="function-example">
        <pre><code>>> exit
Goodbye!</code></pre>
    </div>
</div>

<h2>Built-in REPL Functions</h2>

<p>Within the REPL, you have access to several built-in functions:</p>

<div class="function-doc">
    <div class="function-signature">println(value)</div>
    <div class="function-description">
        <p>Prints a value to the console with a newline.</p>
    </div>
    <div class="function-example">
        <pre><code>>> println("Hello")
Hello
null</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">print(value)</div>
    <div class="function-description">
        <p>Prints a value to the console without a newline.</p>
    </div>
    <div class="function-example">
        <pre><code>>> print("Hello")
Helloprint(" World")
 World
null</code></pre>
    </div>
</div>

<h2>Multi-line Input</h2>

<p>The REPL supports multi-line input. If you start a block (like a function body or if statement), the REPL will continue prompting for more input until the block is closed:</p>

<div class="function-example">
    <pre><code>>> fn factorial(n) {
.     if n <= 1 {
.         1
.     } else {
.         n * factorial(n - 1)
.     }
. }
null
>>> factorial(5)
120</code></pre>
</div>

<h2>Tips and Tricks</h2>

<ul>
    <li><strong>Error Recovery:</strong> If you make a syntax error, the REPL will show you the error and let you try again.</li>
    <li><strong>Tab Completion:</strong> Not currently supported but coming soon.</li>
    <li><strong>History:</strong> Use arrow keys to navigate through previous commands (not currently supported).</li>
</ul>

<h2>Limitations</h2>

<p>While the REPL is powerful, be aware of some limitations:</p>
<ul>
    <li>Module imports work but file-based modules need proper paths</li>
    <li>Large outputs may be truncated</li>
    <li>Some async operations may behave differently than in scripts</li>
</ul>
`