// Stack and Heap Memory

// Primitive data types are stored in stack memory
// Reference data types are stored in heap memory


let myname = 'aniket'  // stored in stack memory
let anotherName = myname // anotherName gets a copy of myname value
anotherName = 'krishna'  // changing anotherName does not affect myname

console.log(myname); // aniket
console.log(anotherName); // krishna

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}  // stored in heap memory

let userTwo = userOne // userTwo gets the reference to the same object in heap memory
userTwo.email = "user@gmail.com"
console.log(userOne.email); // user@gmail.com
console.log(userTwo.email); // user@gmail.com