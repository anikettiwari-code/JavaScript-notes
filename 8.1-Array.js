const marval_heros = [ "iraonman", "thor","spiderman"]
const dc_heros = [ "suparman", "flash","batman"]

//marval_heros.push(dc_heros) // [ 'iraonman', 'thor', 'spiderman', [ 'suparman', 'flash', 'batman' ] ]
// console.log(marval_heros);

// const all_heros = marval_heros.concat(dc_heros) // [ 'iraonman', 'thor', 'spiderman', 'suparman', 'flash', 'batman' ]
// console.log(all_heros);

// Spread operator

const all_newheros = [...marval_heros, ...dc_heros] // [ 'iraonman', 'thor', 'spiderman', 'suparman', 'flash', 'batman' ]
console.log(all_newheros);
