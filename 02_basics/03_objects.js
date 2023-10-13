// Objects

/** ******* Singleton ********
 * Whenever you make an object from constructor it is a Singleton object {Object.create}
 * 
 * Otherwise it is a Literal object {const JSuser = {}}
 */

const mySym = Symbol("Keys1")

const JSuser = {
    name : "Bhavya",
    age : 18,
    [mySym] : "myKey1",            // to link the Symbol mySym from above we need to use the brackets []
    location : "Jaipur",
    email : "bvs@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// Printing and Accessing the objects
// console.log(JSuser.name);
// console.log(JSuser["email"]);
// console.log(JSuser[mySym]);             // To access the Symbol you need to add brckets []
// console.log(JSuser["email"]);

// Freeze the object so that no one can change the data in the object
// Object.freeze(JSuser)

// console.log(JSuser); // => {
                        //     name: 'Bhavya',
                        //     age: 18,
                        //     location: 'Jaipur',
                        //     email: 'bvs@google.com',
                        //     isLoggedIn: false,
                        //     lastLoginDays: [ 'Monday', 'Saturday' ],
                        //     [Symbol(Keys1)]: 'myKey1'
                        //   }

// Adding function to a Object
JSuser.greetings = function () {
    console.log("Hello JS Users")
}

JSuser.greetingsTwo = function () {
    console.log(`Hello JS Users, ${this.name}`)    // this is used to refer to the same object {JSuser}
}

console.log(JSuser);
console.log(JSuser.greetingsTwo());


