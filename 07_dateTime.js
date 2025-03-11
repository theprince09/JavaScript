let myDate = new Date()
console.log (myDate.toString());
console.log (myDate.toDateString() ) ;
console.log (myDate.toLocaleString() ) ;
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString() );


let myTime = Date.now();
console.log(myTime);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getTime());

