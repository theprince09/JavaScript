// 1️⃣ Global Scope
var globalVar = "I am a global variable";

function showGlobal() {
    console.log(globalVar); // Accessible inside function
}

showGlobal();
console.log(globalVar); // Accessible outside function


// 2️⃣ Function Scope (Local Scope)
function functionScopeExample() {
    var localVar = "I am inside a function"; // Local Scope
    console.log(localVar); // ✅ Accessible here
}

functionScopeExample();
// console.log(localVar); // ❌ Error: localVar is not defined


// 3️⃣ Block Scope (let & const)
if (true) {
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";
    var blockVar = "I am function scoped (var)";
    console.log(blockLet);  // ✅ Accessible
    console.log(blockConst); // ✅ Accessible
}

console.log(blockVar);  // ✅ Accessible (var is not block-scoped)
// console.log(blockLet);  // ❌ Error: blockLet is not defined
// console.log(blockConst); // ❌ Error: blockConst is not defined


// 4️⃣ Lexical Scope (Nested Scopes)
function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessible
    }
    innerFunction();
}

outerFunction();
// console.log(outerVar); // ❌ Error: outerVar is not defined


// 5️⃣ Scope with var, let, and const Differences
console.log(a); // ✅ Undefined (var is hoisted)
var a = 10;

// console.log(b); // ❌ ReferenceError (let is not initialized)
let b = 20;

// console.log(c); // ❌ ReferenceError (const is not initialized)
const c = 30;
