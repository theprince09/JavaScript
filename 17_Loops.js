// 1️⃣ For Loop - Runs a block of code a specific number of times
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i); // Prints 1 to 5
}

// 2️⃣ While Loop - Runs while a condition is true
console.log("\nWhile Loop:");
let j = 1;
while (j <= 5) {
    console.log(j); // Prints 1 to 5
    j++;
}

// 3️⃣ Do-While Loop - Runs at least once, even if the condition is false
console.log("\nDo-While Loop:");
let k = 1;
do {
    console.log(k); // Prints 1 to 5
    k++;
} while (k <= 5);

// 4️⃣ For-Of Loop - Iterates over an array (for iterable objects)
console.log("\nFor-Of Loop:");
let arr = ["Apple", "Banana", "Cherry"];
for (let fruit of arr) {
    console.log(fruit); // Prints each fruit
}

// 5️⃣ For-In Loop - Iterates over object properties
console.log("\nFor-In Loop:");
let obj = { name: "John", age: 25, city: "New York" };
for (let key in obj) {
    console.log(key + ": " + obj[key]); // Prints name, age, and city with values
}

// 6️⃣ forEach Loop - Executes a function for each array element
console.log("\nforEach Loop:");
arr.forEach((item, index) => {
    console.log(index + ": " + item); // Prints index & value
});

// 7️⃣ Break Statement - Exits a loop early
console.log("\nBreak Statement:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) break; // Stops loop at 3
    console.log(i);
}

// 8️⃣ Continue Statement - Skips an iteration
console.log("\nContinue Statement:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Skips 3
    console.log(i);
}
