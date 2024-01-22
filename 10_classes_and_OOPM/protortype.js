let myHeros = ["Thor","SpiderMan"]

let heroPower = {
    thor : 'Hammer',
    spiderMan : 'Laser',

    getSpidyPower : function() {
        // console.log(`Spidy power: ${this.spiderMan}`);
    }
} 

// EveryOne can access the hitesh() because everything is object in JavaScript
Object.prototype.bhavya = function() {
    // console.log(`Bhavya is present in all objects`);
}

// OverHere we have only given power to array so if we try to access
//   heyBhavya through String we will encounter an error
Array.prototype.heyBhavya = function() {
    // console.log(`Bhavya is present in all objects`);
}

// heroPower.bhavya()  // Bhavya is present in all objects 
// myHeros.bhavya() // Bhavya is present in all objects

// myHeros.heyBhavya() // Bhavya is present in all objects

// // Over here we get an error because heroPower is an Object and cannot access its child's method
// heroPower.bhavya() // ERROR!!!!!!!!

// +++++++++++++++++++++++++++++++++ Inheritance +++++++++++++++++++++++++++++++++

const User = { 
    name :'chai',
    email : 'chai@chai.com'
}

const Teacher = {
    makeVide : true
}

const TeachingSuypport = {
    isAvailable : false
}

const TaSupport = {
    fullTime : true,
    __proto__ : TeachingSuypport // TaSupport is child class, and TeachingSupport is the parent class l;ike Object
}

// User is parent class like Object, & Teacher is the Child class
Teacher.__proto__ = User




// ************************** Mordern Syntax For Declaring Inheritance **************************

// Sets the prototype of a TeachingSuypport(Parent) to Teacher(Child)
Object.setPrototypeOf(TeachingSuypport, Teacher)






/**
 * Add a property to a String class named trueLength that with get you the actual length of the string except the whitespaces
 */

let myName = "Bhavya     "  //  give tyhe count of only character using treueLength()

String.prototype.trueLength = function() {
    return (this.trim()).length
}

console.log(`True Length of you given string is:  `,myName.trueLength())