// Objects

// ++++++++++++++++++++++++++++++++++ 2 types of Objects ++++++++++++++++++++++++++++++++

/**
 * SingleTon Object:- Whenever you make an object from constructor it is a Singleton object 
 *                    {we can use Object.create to create a singleton object}
 * 
 * Literal Object:- Any other object is a Literal object { const JSuser = {} }
 */

 
// Declaring Symbol to add in object JSuser
const mySum = Symbol("myKey1") 

// Object Literal
const JSuser = {
    name : "Bhavya",
    age : 18,
    [mySum] : "myKey1",            // to link the Symbol mySym from above we need to use the brackets []
    location : "Jaipur",
    email : "bvs@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}


// ********************************** Printing and accessing Objects **********************************

// console.log(JSuser.name);
// console.log(JSuser["email"]);
// console.log(JSuser[mySum]);    // To access the Symbol you need to add brckets []

JSuser.email = "b1234!@gmail.com"
// console.log(JSuser["email"]);   // b1234!@gmail.com


// ********************************** FREEZE OBJECTS **********************************

// so that no one can change the data in the object
// Object.freeze(JSuser)


// ********************************** Function in Objects **********************************

JSuser.greeting = function () {
    console.log("Hello JS Users")
}

// console.log(JSuser.greeting())

JSuser.greetingTwo = function() {
    console.log(`Hello ${this.name}, how are you`)  // this is used for referring to the same object
}

// console.log(JSuser.greetingsTwo());   // Hello Bhavya, how are you


// ********************************** JSuser at the end **********************************

// JSuser  =       
            // {
            //     name: 'Bhavya',
            //     age: 18,
            //     location: 'Jaipur',
            //     email: 'b1234!@gmail.com',
            //     isLoggedIn: false,
            //     lastLoginDays: [ 'Monday', 'Saturday' ],
            //     greeting: [Function (anonymous)],
            //     greetingTwo: [Function (anonymous)],
            //     [Symbol(myKey1)]: 'myKey1'
            //   }


