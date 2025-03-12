// Example 1: Basic if-else
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// Example 2: if-else if-else
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Example 3: Checking Even or Odd Number
let num = 7;

if (num % 2 === 0) {
    console.log(num + " is even.");
} else {
    console.log(num + " is odd.");
}

// Example 4: Nested if-else
let temperature = 35;

if (temperature > 30) {
    console.log("It's hot outside.");
    if (temperature > 40) {
        console.log("Stay hydrated!");
    }
} else {
    console.log("Weather is pleasant.");
}

// Example 5: Multiple Conditions (OR condition)
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}
