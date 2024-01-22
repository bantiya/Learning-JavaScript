// +++++++++++++++++++++++ Everything in JavaScript is an Object +++++++++++++++++++++++

/**
 * Array ===> Object ===> Null
 * Stringn ===> Object ===> Null
 */


function myfun(number) {
    return number * 5
}

/**
 * Function is function as well as Object, becuase at the end everything ends up on Object.
 * 
 * """Prototype Inheritance""" :- Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object 
 *                                to share and utilize the properties of a parent class using a child class. 
 * 
 * "Prototypes" are hidden objects that are used to share the properties and methods of a parent class to child classes.
 */

// console.log(myfun(5));  // 25
// console.log(myfun.power);  // undefined

// .prototype gives the p;rototype of thge function, but in the above function we are not having any properties so it gives null value
// console.log(myfun.prototype);  // {} ()


// ""this"" keyword is also related to "Prototype"

function createUser(username, score) {
    this.username = username
    this.score = score
}

// Creating your own method and """"Injecting in the Prototype"""" of other method 
// So later on we can use createUser.increment to increment the score value just like we use arr.length()
createUser.prototype.increment = function() {
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`Score is: ${this.score}`);
}

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea", 50)

chai.increment()
console.log(chai.score);  // 26 (Value incremented by 1')  
 
tea.printMe()  //  Score is: 50


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/