const name = "Aniket"
const rollNumber = 109

console.log(name + rollNumber + " value");

console.log(`hello my name  is ${name} and my roll number is ${rollNumber}`); // Template literals

const gameName = new String("Cricket") // String object 
console.log(gameName[0]); // C
console.log(gameName.__proto__); // [Object: null prototype] {}
console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.toLowerCase()); // cricket
console.log(gameName.charAt(2)); // i
console.log(gameName.indexOf('c')); // 4

const newString = gameName.substring(0,4) // 0 to 4-1
console.log(newString); // ric

const anotherString = gameName.slice(-7,4) // -7 to 4-1
console.log(anotherString); // Cric

const newStringOne =" aniket   "
console.log(newStringOne); // " aniket   "
console.log(newStringOne.trim()); // "aniket"

const URL = "https://www.youtube.com/"

console.log(URL.replace("https://"," -")); // " -www.youtube.com/"

console.log(URL.includes("youtube")); // true
console.log(URL.includes("facebook")); // false
console.log(gameName.split('r')); // [ 'C', 'icket' ]

const gameuse = new String("aniket-tiwari-gamer")
console.log(gameuse.split('-')); // [ 'aniket', 'tiwari', 'gamer' ]






