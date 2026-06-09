const assert = require('assert');

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { 
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b; 
}

console.log("Running tests...");
assert.strictEqual(add(2, 3), 5, "Add test failed");
assert.strictEqual(subtract(5, 3), 2, "Subtract test failed");
assert.strictEqual(multiply(4, 3), 12, "Multiply test failed");
assert.strictEqual(divide(10, 2), 5, "Divide test failed");
console.log("All tests passed! ✅");