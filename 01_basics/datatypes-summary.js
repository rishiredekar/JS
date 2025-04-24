// Primitive 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 8788875865873456736n



// Non-Primitive / Reference Type
// Array, Objects, Functions

const heros = ["hanunman", "naagraj", "shaktiman"]
let myObj = {
    name: "Rishi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// Memories

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "rishidotcom"

let anothername = myYoutubename
anothername = "coffeeaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "rishi@gmail.com",
    upi: "user@oksbi"
}

let userTwo = userOne

userTwo.email = "rishi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

