const score = 400
let balance = new Number(100)

let newBalance = balance
newBalance = new Number(200).toFixed(2)

// console.log(typeof newBalance)
// console.log(balance);

const otherNumber = 23.82364

// console.log(otherNumber.toPrecision(2)) // => 24

const hundreds  = 1000000

// console.log(hundreds.toLocaleString());



// +++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

// console.log(Math.min(4,3,6,1,3,5,3))
// console.log(Math.max(4,3,6,1,3,5,3))

// console.log(Math.floor((Math.random() * 10) + 1))

const min = 10
const max  = 20

const finalValue = (Math.floor(Math.random() * (max-min+1))) + min

console.log(finalValue)