/**
 * Coverting to Number
 */

let score = "Hitesh"

//console.log(typeof score)

let valueInNumber = Number(score)

//console.log(typeof valueInNumber)
//console.log(valueInNumber) // <== This will give NaN (Not a number)


// "33" => 33
// "33abc" => Nan
// true => 1, false => 0

/**
 * Converting to Boolean
 */

let isLoggedIn = 1
let boolIsLoggedIn = Boolean(1)

//console.log(typeof isLoggedIn)
//console.log(boolIsLoggedIn) // <== This will give NaN (Not a number)


// 1 => true, 0 => false
// "" => false, "NonEmptyString" => true



/**
 * Converting to String
 */

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


// ********************************************* Operations *******************************************

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "Bhavya"
let str2 = " Antiya"

let str3 = str1 + str2 
// console.log(str3)

/**
 * Complex situation (Do not write suc messy) code
 */

// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + 2 + 2); // => 122
// console.log(1 + 2 + "2"); // => 32

// console.log(+true) // => 1
// console.log(-true) // => -1

let gameCounter = 100
++gameCounter

console.log(gameCounter);