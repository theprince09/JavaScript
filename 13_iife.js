// Immediately invoked function

(function chai(){
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED Two ${name}`);
})(`Prince`);

