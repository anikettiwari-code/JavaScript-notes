/*conversion opratars in JavaScript are used to convert values from one type to another.
 Here are some common conversion operators and methods:*/


// let score = "42 "; // if number is in ("42") it is string type
// if number is in (42) it is number type


//console.log(typeof score);
//console.log(typeof(score));

//let valueInNumber = Number(score); // converts string to number
//console.log(typeof valueInNumber);// now it is number type
//console.log(valueInNumber); // if the string cannot be converted to a valid number,
//  it will result in NaN (Not-a-Number) ex let score = "42 abs";

// if let score = null then Number(score) will be 0
// if let score = undefined then Number(score) will be NaN
// if let score = true then Number(score) will be 1
// if let score = false then Number(score) will be 0
// if let score = " " (empty string) then Number(score) will be 0
// if let score = "abx" (non-numeric string) then Number(score) will be NaN


/*let isLOggedIn = "aniket"
let booleaninBoolean = Boolean(isLOggedIn);
console.log(booleaninBoolean); // converts number to boolean   // converts number to boolean

1 => true , 0 => false 
'', " ", null, undefined, NaN => false
"aniket" , "0", "false" => true
*/


let someNumber = 123;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);  