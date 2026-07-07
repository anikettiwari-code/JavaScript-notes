// siggleton 

//const tinderUser = new Object() // siggleton obj
const tinderUser ={} // non siggleton obj the output are same {}

tinderUser.id = "123add"
tinderUser.name = "rama"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regualarUser ={
    email:"some@gmaiil.com",
    fullname:{
        userfullname:{
            firstname: "ramma",
            lastname: "ji"
        }
    }
}

console.log(regualarUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = { }