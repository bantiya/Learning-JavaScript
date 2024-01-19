console.log(this) // {} <= on Node

// Global object in NODE is an empty object 

console.log(this) // Window {...} <= on Browner
// Global object in browsers is Window object


const chai = () => {
    let username = "Bhavya"
    console.log(this.username)  // you cannot use this. in a function, only available for an object
}

// ************************************** ARROW FUNCTION *********************************

/** 
 *          Explicit return of the Arrow Function
*/

const addTwo = (num1, num2) => {
    return num1 + num2 
}

/** 
 *          Implicit return of the Arrow Function
*/

const implicitReturn = (num1, num2) => ( num1 + num2 )

// Return an object

const newimplicitReturn = (num1, num2) => ({username: "Bhavya"})

console.log(newimplicitReturn(1,2))


/**
 * () => {return }
 * () => ()
 */