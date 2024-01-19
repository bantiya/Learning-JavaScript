// *******************   Dynamically Typed Language     **********************

/**
 * JavaScript is a dynamically typed language. This means that in JavaScript, 
 * you don't have to declare the type of a variable when you create one.
 */



// ******************* Two types of DataTypes  ******************* 

// 1. Primitive Datatypes (7 Category)

/**
 * String
 * Number ==>int, float, double, etc
 * Boolean
 * null ==> means empty(nothing) not zero
 * undefined ==> Variable & Memory are delared but not the value
 * Symbol ==> to make a value unique we use Symbol
 * BigInt ==> Some scientific and large values that Number cannot handle
 */



// 2. Reference Types / Non-Primitive Type

/**
 * Arrays
 * Objects
 * Functions
 */



// Number
const score = 100
const scoreValue = 100.3

// Boolean
const isLoggedIn = false

// Null
const outsideTemp = null

// Undefined
let userEmail;  // <== he will have an undefined value

// Symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id)          // Symbol(123)
console.log(anotherId)   // Symbol(123)
// Values are same but the returned value that we get are not same     
console.log(id == anotherId)  // false


// BigInt
const bigNumber = 234567890987654321234567890765432345678n
console.log(typeof(bigNumber))  // bigint (Put n at the last to convert in bigint)


// Arrays
const heros = ['shaktiman', 'naagraj', 'doga']

// Objects
const newObj = {
    name:'bhavya',
    age:24
}
console.log(newObj) // { name: 'bhavya', age: 24 }

// Function
const myFunction = function(){
    console.log("Hello  World")
}
myFunction()


// ******************* TypeOF  ******************* 

// You can use typeOf to get the type of a variable

/** 
 * The result of typeof null being "object" in JavaScript is actually
 *   a historical bug that has persisted for compatibility reasons.
*/ 

const outTemp = null
console.log(typeof(outTemp))   // object


// ******************* 2 types of memories  *******************


// 1. Stack (Primitive Types)
/**
 * Whenever we use stack memory we get a copy of the variable
 */

let myValue = "Bhavya"
let anotherValue = myValue
console.log("myValue: ", myValue, ", and anotherValue: ", anotherValue)
// myValue:  Bhavya , and anotherValue:  Bhavya
anotherValue = "Vishal"
console.log("myValue: ", myValue, ", and anotherValue: ", anotherValue)
// myValue:  Bhavya , and anotherValue:  Vishal


// 2. Heap (Non-Primitive Types)
/**
 * Whenever we use heap memory we get a reference so whatever you
 * change will be changed in the original value
 */

let user = {
    email:"user@gmail.com",
    upi:"user@ybl"
}
console.log(user)
// { email: 'user@gmail.com', upi: 'user@ybl' }

let newUser = user
newUser.email = "Vishal@gmail.com"

console.log(user)
// { email: 'Vishal@gmail.com', upi: 'user@ybl' }    <= Value has changed

