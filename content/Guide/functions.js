() => `
<h1>Functions</h1>

<p>Functions are the primary way to organize code in Giulio-lang. They are first-class citizens, meaning they can be stored in variables, passed as arguments, and returned from other functions.</p>

<h2>Defining Functions</h2>

<p>Functions are created using the <code>fn</code> keyword. They can also be assigned to a variable but its not suggested.</p>

<pre><code>fn add(x, y) {
    return x + y;
}

println(add(5, 10)); // 15

let add = fn(x, y) {
    return x + y;
};

println(add(5, 10)); // 15</code></pre>

<h2>Parameters</h2>

<p>Functions can take any number of parameters. Parameters are listed in parentheses, separated by commas.</p>

<pre><code>fn greet(name, time_of_day) {
    println("Good " + time_of_day + ", " + name);
}

greet("Alice", "morning");</code></pre>

<h2>Return Values</h2>

<p>Functions return the value of the last expression executed in their body. You can also use the <code>return</code> keyword to return early.</p>

<h3>Implicit Return</h3>

<p>If the last statement in a function block is an expression (without a semicolon), that value is automatically returned.</p>

<pre><code>fn square(x) {
    x * x
}

println(square(4)); // 16</code></pre>

<h3>Explicit Return</h3>

<p>Use <code>return</code> to exit the function immediately with a value.</p>

<pre><code>fn absolute(n) {
    if (n < 0) {
        return -n // Returns early
    }
    return n
}</code></pre>

<h2>Higher-Order Functions</h2>

<p>Since functions are values, you can pass them to other functions or return them. This enables powerful functional programming patterns.</p>

<pre><code>fn apply_twice(func, val) {
    return func(func(val));
}

fn add_one(x) { x + 1 }

println(apply_twice(add_one, 5)); // 7</code></pre>

<h2>Closures</h2>

<p>Functions in Giulio-lang capture variables from their surrounding scope. This allows you to create closures—functions that "remember" the environment in which they were created.</p>

<pre><code>fn new_counter() {
    let count = 0;
    return fn() {
        count = count + 1;
        return count;
    }
}

let counter = new_counter();
println(counter()); // 1
println(counter()); // 2</code></pre>

<h2>Recursion</h2>

<p>Functions can call themselves recursively. This is useful for algorithms like calculating factorials or traversing data structures.</p>

<pre><code>fn factorial(n) {
    if (n == 0) { return 1; }
    return n * factorial(n - 1);
}

println(factorial(5)); // 120</code></pre>
`;