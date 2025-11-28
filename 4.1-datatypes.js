// primitive data types
// 7 types: string, number, boolean, null, undefined, symbol, bigint

const score = 100  
const scoreValue = 100.2 

console.log(typeof score); // number
console.log(typeof scoreValue); // number

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefineds involving different data types

const id = Symbol('123') // symbol
const anotherId = Symbol('123') // symbol

console.log(id == anotherId); // false

//const bigNumber = 90071992547419n 
console.log(typeof bigNumber); // bigints involving different data types



// reference data types
// 4 types: object, array, function

const heros = ['spiderman', 'ironman', 'hulk']  // array

const myObj = {                             // object
    name: 'aniket',
    age: 30,
    isActive: true,
}

const myFunction = function() {              // function
    console.log('hello world');
}

console.log(typeof myFunction); 
