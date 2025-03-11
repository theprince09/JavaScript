/*

const myArr = [1, 2, 3, 4];  // Proper array declaration
const myHeroes = ["shaktiman", "naagraj"]; // Corrected array declaration
const myArr2 = new Array(1, 2); // Creating an array using the Array constructor

console.log(myArr);
console.log(myHeroes);
console.log(myArr2);

myArr.push(6);  // Adds 6 at the end of the array
myArr.push(7);  // Adds 7 at the end of the array
myArr.pop();    // Removes the last element (7)

myArr.unshift(9);  // Adds 9 at the beginning of the array
myArr.shift(); 

console.log(myArr.includes(9));  // Checks if 9 is in the array (false)
console.log(myArr.indexOf(3));   // Finds the index of 3 (2)
console.log(myArr); // Output: [1, 2, 3,


const newArr = myArr.join();  // Converts array to a string (default separator is a comma)

console.log(myArr);  // Output: [1, 2, 3, 4] (original array remains unchanged)
console.log(newArr); // Output: "1,2,3,4" (array converted to a string)

const mynl = myArr.slice(1, 3); // Extracts elements from index 1 to 2 (3 is excluded)
console.log(mynl); // Output: [2, 3]
console.log(myArr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)

const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log(myn2); // Output: [2, 3, 4] (removed elements)
console.log(myArr); // Output: [1, 5] (original array is modified)

*/


const another_array = [1, [2, [3, [4, 5]]]]; 

const real_another_array = another_array.flat(Infinity); // Flattens the array completely

console.log(real_another_array); // Output: [1, 2, 3, 4, 5]

console.log(Array.isArray("Hitesh")); // Output: false

console.log(Array.from("Hitesh")); // Output: ['H', 'i', 't', 'e', 's', 'h']

console.log(Array.from({ name: "jhdsfgbj" })); // This will throw an error

let score1 = 200 ;
let score2 = 200; 
let score3 = 200; 
console.log(Array.of(score1, score2, score3)); 
