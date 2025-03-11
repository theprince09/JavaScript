function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}
sayMyName();

function addTwoNumber(num1,num2){
    //console.log(num1 + num2);
    return (num1 + num2);
}
const ans = addTwoNumber(2,4);

console.log("Result: ",ans);


function loginUserName(userName){
    if(!userName){
        console.log("Please enter a username");
        return;   
    }
    return `${userName} just loggedIn`;
}

console.log(loginUserName());
console.log(loginUserName("Prince"));

function calculator(...num1){
    return num1;
}

console.log(calculator(200,300,400,50,600,700));



const user = {
    userName1:"Prince",
    price: 199
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName1} and the price is: ${anyObject.price}`);
    
}
handleObject(user);
handleObject({
    userName1:"Manish",
    price: 199
})
