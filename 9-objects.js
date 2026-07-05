// object literals

const JsUser ={
    name : "Aniket",
    "full name": "Aniket tiwari",
    age: 20,
    location: "Mumbai",
    email: "aniket@emi.com",
    isLoggedIn: false,
    lastLoginDays: ["monday" , "Saturday" ]
}

console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser"full name");//

console.log(JsUser["full name"]);
