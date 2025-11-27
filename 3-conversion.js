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


//let someNumber = 123;
//let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);  

//************************ opertions *********************** 

let value = 5
let negValue = -value; // negation operator
//console.log(negValue); // -5

//console.log(2+2); // 4
//console.log("2" + "2"); // "22" string concatenation
//console.log("2" + 2); // "22" string concatenation
//console.log(2 - 2); // 0
//console.log(2 * 2); // 4 use of multiplication operator
//console.log(2 ** 3); // 8 use of power operator 2*2*2
//console.log(2 / 2); // 1
//console.log(5 % 2); // 1 (modulus operator gives remainder)

let str1 = "Hello ";
let str2 = "World!";

let str3 = str1 + str2; // concatenation operator   
// console.log(str3); // "Hello World!"

// console.log( 1 +  "2" + 3); // "123"
// console.log( 1 +  2 + "3"); // "33"
// console.log( "1" +  2 + 3); // "123"
// console.log( "1" -  2 + 3); // 2  ( here - operator converts string to number)

// console.log(+true); // 1  (unary plus operator converts boolean to number)
// console.log(+""); // 0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2 ; // right to left associativity

let gamecouter = 100;
++gamecouter; // increment operator
console.log(gamecouter); // 101