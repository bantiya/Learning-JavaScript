"use strict"

/**
 * ************** Primitive **************
 * 
 * Types: => String, Number, Boolearn, null, undefined, Symbol, BigInt
 * 
 * ************** Reference (Non primitive) **************
 * 
 * Types: => Array, Objects, Functions
 */


//alert(3+3) // This won't work as we are using Node.js, not browser

let name ="bhavya"
let age = 29
let isLoggedIn = false

/**
 * Number => 2 to power 53
 * bigint
 * string => " " 
 * boolean => true/false
 * null => standalone value (Representation of empty value eg. let customerName = null) {IT's an object} 
 *         [This means like there is a customer but we don't know the name of the customer]
 * undefined => Defined a variale but no value is assigned
 * symbol => to uniquely identify the components
 */


/**
 * object
 *         
 */

// console.log(typeof null)


// ************** Symbol **************
const id  = Symbol("123")
const anotherId  = Symbol("123")

// console.log(id); // => Symbol(123)
// console.log(anotherId == id); // => false


// ************** Reference(Non-Primitive) **************
const heros = ["A", "B", "C"] // array

let myObj = {                 // object
    name :"Bhavya",
    age : 67,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros) // => Object
console.log(typeof myObj) // => Object
console.log(typeof myFunction) // => Function Object