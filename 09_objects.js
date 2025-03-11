// Singleton Object (created using Object.create())
const singletonUser = Object.create(null); // Example of a singleton object

// Object Literal
const Users = {
    name: "Prince",
    age: 20,
    location: "Phagwara",
    email: "princce@gmail.com",
    isLogged: false,
    lastLogged: ["Monday", "Tuesday"],

    // Adding methods inside the object
    greeting: function () {
        console.log("Hello JS User");
    },

    greetingTwo: function () {
        console.log(`Hello JS User, ${this.name}`);
    }
};

// Accessing object properties
console.log(Users);
console.log(Users.email);

// Modifying an object property
Users.email = "manish@chatgpt.com";
console.log(Users.email);

// Calling object methods
Users.greeting(); 
Users.greetingTwo();

const tinderUser = {}; // Initialize an empty object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = { 
    email: "some@gmail.com", 
    fullname: { 
        userFullname: { 
            firstname: "Prince", 
            lastname: "raj" 
        } 
    }
};

console.log(regularUser.email); // Access email
console.log(regularUser.fullname.userFullname.firstname); // Access nested property
console.log(regularUser.fullname.userFullname.lastname);


const obj1 = { 3: "a", 2: "b" };
const obj2 = { 4: "b" };

const obj3 = { ...obj1, ...obj2 }; // Merging obj1 and obj2

console.log(obj3);
