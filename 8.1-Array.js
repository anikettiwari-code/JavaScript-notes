const marval_heros = [ "iraonman", "thor","spiderman"]
const dc_heros = [ "suparman", "flash","batman"]

//marval_heros.push(dc_heros) // [ 'iraonman', 'thor', 'spiderman', [ 'suparman', 'flash', 'batman' ] ]
// console.log(marval_heros);

// const all_heros = marval_heros.concat(dc_heros) // [ 'iraonman', 'thor', 'spiderman', 'suparman', 'flash', 'batman' ]
// console.log(all_heros);

// Spread operator

// const all_newheros = [...marval_heros, ...dc_heros] // [ 'iraonman', 'thor', 'spiderman', 'suparman', 'flash', 'batman' ]
// console.log(all_newheros);

// const another_array = [1, 2, 3, [4, 5, 6],7, [6,  7, [4, 5]]]

// const reala_another_array = another_array.flat(Infinity) 
// // [
// //   1, 2, 3, 4, 5,
// //   6, 7, 6, 7, 4,
// //   5
// // ]
// console.log(reala_another_array);


console.log(Array.isArray("Aniket"));
console.log(Array.from("Aniket"))
console.log(Array.from({name: "aniket"})) // interesting of interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

//Array with isArray, from and of 