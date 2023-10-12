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

// console.log(typeof heros) // => Object
// console.log(typeof myObj) // => Object
// console.log(typeof myFunction) // => Function Object




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Stack (Primitive datatype) , Heap (Non-Primitive datatype)

// Whenever Stack memory is used whatever variable you declared you will get a copy of it.
// Whenever you use Heap memory you get a reference, so whatever you change reflects in the original variable

// ************** Stack Memory **************

let channelname = "Good World"
let anotherChannel = channelname

// console.log(channelname, anotherChannel); // => Good World Good World

anotherChannel = "Bad World"

// console.log(channelname, anotherChannel); // => Good World Bad World
// Over here the channelname variable does not change


// ************** Heap Memory **************

let userOne = {
    name: "Bhavya",
    upi : "b@ypl"
}

let userTwo = userOne

// console.log(userOne.name, userOne.upi) // => Bhavya b@ypl
// console.log(userTwo.name, userTwo.upi) // => Bhavya b@ypl

userTwo.name = "Vishal"

// console.log(userOne.name, userOne.upi) // => Vishal b@ypl
// console.log(userTwo.name, userTwo.upi) // => Vishal b@ypl
// Over here the userOne variable does change as both of them are references to the same object

