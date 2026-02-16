() => `
<h1>Built-in Array Functions & Methods</h1>

<p>Giulio-lang provides a set of built-in functions and methods for common array manipulations. These generally follow a functional approach, returning a new array rather than modifying the original one in place.</p>

<h2>Accessing Elements</h2>

<h3>Index Access</h3>
<p>You can access individual array elements using square brackets <code>[]</code> with a zero-based index.</p>
<pre><code>let fruits = ["apple", "banana", "cherry"];
println(fruits[0]); // "apple"
println(fruits[2]); // "cherry"</code></pre>
<p>Additionally, a <code>get</code> method is provided.</p>
<div class="function-doc">
    <div class="function-signature">.get(index) → Any</div>
    <div class="function-description">
        <p>Returns the element at the specified index.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>index</code> (Integer) - The index of the element to retrieve.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The element at the given index.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let letters = ["a", "b", "c"];
println(letters.get(1)); // "b"</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> Requesting an index that is out of bounds will cause a runtime error.
    </div>
</div>

<h2>Method Reference</h2>

<div class="function-doc">
    <div class="function-signature">.len() → Integer</div>
    <div class="function-description">
        <p>Returns the number of elements in an array.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>An Integer representing the length of the array.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let numbers = [10, 20, 30, 40];
println(numbers.len()); // 4</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.is_empty() → Boolean</div>
    <div class="function-description">
        <p>Checks if an array has no elements.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <p>None.</p>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A Boolean: <code>true</code> if the array is empty, otherwise <code>false</code>.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let empty_arr = [];
println(empty_arr.is_empty()); // true
let full_arr = [1, 2];
println(full_arr.is_empty()); // false</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">head(array) / .head() → Any</div>
    <div class="function-description">
        <p>Returns the first element of an array.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>array</code> (Array) - The input array. Must not be empty. (Implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>The first element of the array. The type depends on the element.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let letters = ["a", "b", "c"];
println(head(letters)); // "a"
println(letters.head()); // "a"</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> Calling <code>head</code> on an empty array will cause a runtime error.
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">tail(array) / .tail() → Array</div>
    <div class="function-description">
        <p>Returns a new array containing all elements of the original array except for the first one.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>array</code> (Array) - The input array. Must not be empty. (Implicit if used as a method).</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new Array containing the "tail" of the original array.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let numbers = [1, 2, 3, 4];
let rest = tail(numbers);
println(rest); // [2, 3, 4]
let rest_method = numbers.tail();
println(rest_method); // [2, 3, 4]</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> Calling <code>tail</code> on an empty array will cause a runtime error.
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">push(array, value) / .push(value) → Array</div>
    <div class="function-description">
        <p>Returns a new array with the given value appended to the end.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>array</code> (Array) - The input array. (Implicit if used as a method).</li>
            <li><code>value</code> (Any) - The value to add to the end of the array.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new Array with the value appended.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let arr = [1, 2];
let new_arr = push(arr, 3);
println(new_arr); // [1, 2, 3]
let new_arr_method = arr.push(3);
println(new_arr_method); // [1, 2, 3]
println(arr);     // [1, 2] (The original array is unchanged)</code></pre>
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">.remove(index) → Array</div>
    <div class="function-description">
        <p>Returns a new array with the element at the specified index removed.</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>index</code> (Integer) - The index of the element to remove.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new array with the element removed.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let letters = ["a", "b", "c"];
let new_letters = letters.remove(1);
println(new_letters); // ["a", "c"]</code></pre>
    </div>
    <div class="alert alert-warning">
        <strong>Warning:</strong> Requesting an index that is out of bounds will cause a runtime error.
    </div>
</div>

<div class="function-doc">
    <div class="function-signature">cons(value, array) → Array</div>
    <div class="function-description">
        <p>Returns a new array with the given value prepended to the beginning. The name "cons" comes from Lisp and stands for "construct".</p>
    </div>
    <div class="function-params">
        <h4>Parameters</h4>
        <ul>
            <li><code>value</code> (Any) - The value to add to the beginning of the array.</li>
            <li><code>array</code> (Array) - The input array.</li>
        </ul>
    </div>
    <div class="function-returns">
        <h4>Returns</h4>
        <p>A new Array with the value prepended.</p>
    </div>
    <div class="function-example">
        <h4>Example</h4>
        <pre><code>let arr = ["b", "c"];
let new_arr = cons("a", arr);
println(new_arr); // ["a", "b", "c"]
println(arr);     // ["b", "c"] (The original array is unchanged)</code></pre>
    </div>
</div>

<h2>Complete Example</h2>
<p>Here is an example that uses several array functions together to process a list of numbers recursively.</p>
<pre><code>fn sum(arr) {
    if (arr.is_empty()) {
        return 0;
    }
    return head(arr) + sum(tail(arr));
}

let numbers = [10, 20, 30, 40, 50];
let total = sum(numbers);
println("The sum is: ", total); // The sum is: 150

let more_numbers = push(numbers, 60);
let even_more = cons(0, more_numbers);
println(even_more); // [0, 10, 20, 30, 40, 50, 60]
println(even_more.len()); // 7
</code></pre>

<div class="alert alert-success">
    <strong>Next Steps:</strong> Explore <a href="#data-types">Data Types</a> for more information on arrays and other built-in types.
</div>
`;