// greet();
function add(a, b) {
    return a + b;
}
const hello = () => {console.log("Hello world");}
console.log(hello);
hello();

let b = 24;
console.log(b);

//About promise 

const myPromise = new Promise((resolve, reject) => {
    let age = 13;
    if (age > 18) {
        resolve("Eligible for movie.")
    } else {
        reject("Not eligible for movie.")
    }
})
const Eligibility = async() => {
    const response = await myPromise;
    console.log(response);
}
Eligibility();
