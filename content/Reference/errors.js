() => `
<h1>Error Handling</h1>

<p>G-lang has a robust error handling system that categorizes errors into three main types: Lexer errors, Parser errors, and Runtime errors. Understanding these error types will help you debug and write more reliable code.</p>

<h2>Error Categories</h2>

<h3>Lexer Errors</h3>

<p>Lexer errors occur during the tokenization phase when the source code contains invalid characters or malformed tokens.</p>

<div class="alert alert-error">
    <strong>InvalidToken:</strong> The lexer encountered a token that it cannot recognize.
</div>

<div class="alert alert-error">
    <strong>UnexpectedCharacter:</strong> A character was found that is not valid in the current context.
</div>

<div class="alert alert-error">
    <strong>UnterminatedString:</strong> A string literal is missing its closing quote.
</div>

<pre><code>// Example: Unterminated string
let greeting = "Hello;  // Error: Unterminated string literal

// Example: Invalid character
let x = @;  // Error: Unexpected character: '@'
</code></pre>

<h3>Parser Errors</h3>

<p>Parser errors occur during the parsing phase when the syntax of the code is invalid or incomplete.</p>

<div class="alert alert-error">
    <strong>UnexpectedToken:</strong> A token was found that is not expected at this position.
</div>

<div class="alert alert-error">
    <strong>ExpectedToken:</strong> A specific token was expected but a different one was found.
</div>

<div class="alert alert-error">
    <strong>InvalidExpression:</strong> An expression could not be parsed correctly.
</div>

<div class="alert alert-error">
    <strong>UnexpectedEOF:</strong> The end of the file was reached unexpectedly.
</div>

<div class="alert alert-error">
    <strong>AwaitOutsideAsync:</strong> The <code>await</code> keyword was used outside of an async function.
</div>

<pre><code>// Example: Unexpected token
fn add(x, y) {
    return x + y
}  // Error: Missing semicolon or unexpected token

// Example: Await outside async
fn process() {
    let data = await fetch_data();  // Error: Cannot use 'await' outside of an async function
}
</code></pre>

<h3>Runtime Errors</h3>

<p>Runtime errors occur during program execution when an operation fails or an invalid state is encountered.</p>

<div class="alert alert-error">
    <strong>TypeMismatch:</strong> A value of an unexpected type was encountered.
</div>

<div class="alert alert-error">
    <strong>UndefinedVariable:</strong> An attempt was made to access a variable that has not been defined.
</div>

<div class="alert alert-error">
    <strong>InvalidOperation:</strong> An operation could not be performed on the given values.
</div>

<div class="alert alert-error">
    <strong>DivisionByZero:</strong> An attempt was made to divide by zero.
</div>

<div class="alert alert-error">
    <strong>ModuloByZero:</strong> An attempt was made to calculate modulo by zero.
</div>

<div class="alert alert-error">
    <strong>IndexOutOfBounds:</strong> An array index is outside the valid range.
</div>

<div class="alert alert-error">
    <strong>WrongNumberOfArguments:</strong> A function was called with an incorrect number of arguments.
</div>

<div class="alert alert-error">
    <strong>NotCallable:</strong> An attempt was made to call a value that is not a function.
</div>

<div class="alert alert-error">
    <strong>NotHashable:</strong> A value was used as a hash key but is not hashable.
</div>

<div class="alert alert-error">
    <strong>NotIndexable:</strong> An attempt was made to index into a value that does not support indexing.
</div>

<div class="alert alert-error">
    <strong>EmptyArray:</strong> An operation that requires at least one element was performed on an empty array.
</div>

<div class="alert alert-error">
    <strong>InvalidArguments:</strong> The arguments provided to a function are invalid.
</div>

<pre><code>// Example: Type mismatch
let num = 10 + "hello";  // Error: Type mismatch: expected integer, got string

// Example: Division by zero
let result = 10 / 0;  // Error: Invalid operation, Division by zero

// Example: Index out of bounds
let arr = [1, 2, 3];
println(arr[10]);  // Error: Index 10 out of bounds for array of length 3

// Example: Undefined variable
println(undefined_var);  // Error: Undefined variable: 'undefined_var'

// Example: Not callable
let x = 5;
x();  // Error: 5 is not callable
</code></pre>

<h2>Try-Catch-Finally</h2>

<p>G-lang supports structured exception handling using <code>try</code>, <code>catch</code>, and <code>finally</code> blocks. This allows you to handle runtime errors gracefully and execute cleanup code.</p>

<pre><code>try {
    let result = risky_operation();
    println(result);
} catch error {
    println("An error occurred: ", error);
} finally {
    println("This always executes");
}
</code></pre>

<h3>Catching Specific Error Types</h3>

<p>You can handle different types of errors differently by checking the error message or type:</p>

<pre><code>try {
    let value = array[100];
} catch error {
    if (error.contains("out of bounds")) {
        println("Array index was out of bounds");
    } else {
        println("Unexpected error: ", error);
    }
}
</code></pre>

<h3>Throwing Errors</h3>

<p>You can throw custom errors using the <code>throw</code> statement:</p>

<pre><code>fn validate_age(age) {
    if (age < 0) {
        throw "Age cannot be negative";
    }
    if (age > 150) {
        throw "Age cannot be greater than 150";
    }
    return age;
}

try {
    validate_age(-5);
} catch error {
    println("Validation failed: ", error);  // "Validation failed: Age cannot be negative"
}
</code></pre>

<h2>Error Propagation</h2>

<p>When working with functions that can fail, you can let errors propagate up the call stack:</p>

<pre><code>fn read_config(path) {
    if (!io.exists(path)) {
        throw "Config file not found: " + path;
    }
    return io.read_file(path);
}

fn load_settings() {
    let config = read_config("settings.json");
    // If read_config throws, the error propagates here
    return json.deserialize(config);
}
</code></pre>

<h2>Best Practices</h2>

<ul>
    <li><strong>Validate inputs:</strong> Check function arguments before performing operations</li>
    <li><strong>Use try-catch for expected failures:</strong> Wrap code that might fail in try-catch blocks</li>
    <li><strong>Provide meaningful error messages:</strong> Include context in error messages</li>
    <li><strong>Clean up resources:</strong> Use <code>finally</code> blocks to ensure cleanup code runs</li>
    <li><strong>Handle errors at appropriate levels:</strong> Don't catch errors you can't handle</li>
</ul>

<pre><code>fn process_file(path) {
    let file = null;
    try {
        file = io.read_file(path);
        return json.deserialize(file);
    } catch error {
        println("Failed to process file: ", error);
        return null;
    } finally {
        // Cleanup if needed
        if (file != null) {
            println("Processed successfully");
        }
    }
}
</code></pre>
`;
