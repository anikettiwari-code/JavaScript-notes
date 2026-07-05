// object literals
// symbal 

const mySym = Symbol("key1")


const JsUser ={
    name : "Aniket",
    "full name": "Aniket tiwari",
    [mySym]:"myKey1",
    age: 20,
    location: "Mumbai",
    email: "aniket@emi.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "Saturday" ]
}

console.log(JsUser.email) // aniket@emi.com
console.log(JsUser["email"]) // aniket@emi.com
//console.log(JsUser.full name);// but don't use (.) in in object it's so error
console.log(JsUser["full name"]); // Aniket tiwari
console.log(typeof JsUser[mySym]); // using [] to show symbal


