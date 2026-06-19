//1. with function keyword
function difference(a, b) {
    return (a - b);
}
console.log(difference(3,4));


const add= (a, b) => {
    return (a + b)
}
console.log(add(7,5));


(()=>console.log("Hey"))();
//4. iife function
(function greet(){
    console.log("Hello");   
})();