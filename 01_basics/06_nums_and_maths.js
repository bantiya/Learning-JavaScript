const score = 400
let balance = new Number(100)

let newBalance = balance
newBalance = new Number(200).toFixed(2)  // <== After decimal 2 values and convert to string

// console.log(typeof newBalance)  // <== String
// console.log(balance); // <== [Number: 100]

const otherNumber = 23.82364

// console.log(otherNumber.toPrecision(2)) // => 24 (Give only 2 values in string)

const hundreds  = 1000000

// console.log(hundreds.toLocaleString())  // <== 1,000,000 (Convert to String and US thousands, )
// console.log(typeof(hundreds.toLocaleString())) // <== String


// +++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math.min(4,3,6,1,3,5,3))   // <== 1
// console.log(Math.max(4,3,6,1,3,5,3))   // <== 6

// console.log(Math.floor((Math.random() * 10) + 1))


/**
 * Math.random always gives value between 0 & 1.
 */

const min = 10
const max  = 20

// Formula to get value between 10 and 20 (min and max)
// Added min in the last as we need value from minimum to maximum
const finalValue = (Math.floor(Math.random() * (max - min + 1))) + min

console.log(finalValue)