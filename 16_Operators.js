// 🔢 Arithmetic Operators
let a = 10, b = 3;
console.log("Addition:", a + b);      // 13
console.log("Subtraction:", a - b);   // 7
console.log("Multiplication:", a * b);// 30
console.log("Division:", a / b);      // 3.333...
console.log("Modulus:", a % b);       // 1
console.log("Exponentiation:", a ** b);// 1000

// 🎯 Assignment Operators
let x = 5;
x += 3; console.log("x += 3:", x);    // 8
x -= 2; console.log("x -= 2:", x);    // 6
x *= 2; console.log("x *= 2:", x);    // 12
x /= 3; console.log("x /= 3:", x);    // 4
x %= 3; console.log("x %= 3:", x);    // 1
x **= 2; console.log("x **= 2:", x);  // 1

// 🔍 Comparison Operators
console.log("5 == '5':", 5 == "5");   // true
console.log("5 === '5':", 5 === "5"); // false
console.log("5 != '5':", 5 != "5");   // false
console.log("5 !== '5':", 5 !== "5"); // true
console.log("5 > 3:", 5 > 3);         // true
console.log("5 < 3:", 5 < 3);         // false
console.log("5 >= 5:", 5 >= 5);       // true
console.log("5 <= 4:", 5 <= 4);       // false

// ⚡ Logical Operators
console.log("true && false:", true && false); // false
console.log("true || false:", true || false); // true
console.log("!true:", !true);                 // false

// ❓ Nullish Coalescing Operator (??)
let user = null;
let defaultName = "Guest";
console.log("user ?? defaultName:", user ?? defaultName); // "Guest"

// 🤔 Ternary Operator
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Example:", status); // "Adult"

// 🧮 Bitwise Operators
console.log("5 & 1:", 5 & 1);   // 1 (AND)
console.log("5 | 1:", 5 | 1);   // 5 (OR)
console.log("5 ^ 1:", 5 ^ 1);   // 4 (XOR)
console.log("~5:", ~5);         // -6 (NOT)
console.log("5 << 1:", 5 << 1); // 10 (Left Shift)
console.log("5 >> 1:", 5 >> 1); // 2 (Right Shift)

// 🔍 Type Checking Operators
console.log("typeof 42:", typeof 42);          // "number"
console.log("typeof 'Hello':", typeof "Hello");// "string"
console.log("typeof true:", typeof true);      // "boolean"
console.log("typeof {}:", typeof {});          // "object"
console.log("typeof []:", typeof []);          // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// 🏷️ instanceof Operator
class Car {}
let myCar = new Car();
console.log("myCar instanceof Car:", myCar instanceof Car); // true
console.log("[] instanceof Array:", [] instanceof Array); // true

// 🌎 Spread and Rest Operators
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];  // Spread Operator
console.log("Spread Example:", arr2); // [1, 2, 3, 4, 5]

function sum(...nums) {       // Rest Operator
    return nums.reduce((a, b) => a + b, 0);
}
console.log("Rest Example (Sum):", sum(1, 2, 3, 4)); // 10
