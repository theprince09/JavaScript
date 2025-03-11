const user = {
    userName: "Prince",
    prince: 1000,
    WelcomeMassage: function(){
        console.log(`${this.userName},Welcome to this website`);
        //console.log(this);
    }
}
user.WelcomeMassage();
user.userName = "Manish";
console.log(this);

function chai(){
    let userNam2 = "Priunce"
    console.log(this.userNam2);
    
}
chai();


// Function Declaration
function addTwo(num1, num2) {
    return num1 + num2;
}

console.log(addTwo(3, 4)); // ✅ Output: 7

// Arrow Function
const addTwoArrow = (num1, num2) => num1 + num2;

console.log(addTwoArrow(3, 4)); // ✅ Output: 7
