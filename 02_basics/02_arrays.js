const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

/**
 * Concatinate 2 arrays
 */

const newHeros = marvel_heros.concat(dc_heros)

// console.log(newHeros);


/**
 * Using spread operator
 */

const allHeros = [...marvel_heros, ...dc_heros]

// console.log(allHeros);

/**
 * Flatting the array
 */

const anotherArray = [1,2,3, [4,5,6], 7 , [6,7, [4,5]]]
const real_another_array = anotherArray.flat(2)

// console.log(real_another_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

/**
 * Convert to array
 */

console.log(Array.isArray("Bhavya")); // => false
console.log(Array.from("A, B")); // => [ 'A', ',', ' ', 'B' ]
console.log(Array.from({name:"Bhavya"})); // => []. Intersting {You need to specify what array you want to make : Key array, or Value array.}

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // => [ 100, 200, 300 ] {USE ARRAY.OF}