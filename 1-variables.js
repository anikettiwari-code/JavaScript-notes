const accountid = 12435
let accountemail = "aniket@gmail.com"
var accountpassword = "aniket123"
accountcity = "Mumbai"

// accountid = 54321 // This will cause an error because accountid is a constant

accountemail = "krish@gmail.com" // This will not cause an error because accountemail is a variable

accountpassword = "krish123" // This will not cause an error because accountpassword is a variable

accountcity = "Pune" // This will not cause an error because accountcity is a global variable

console.log(accountid);

console.table({accountemail, accountpassword, accountcity});