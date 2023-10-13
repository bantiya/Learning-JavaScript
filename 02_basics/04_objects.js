// const tinder = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Bhavya"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUSer = {
    email : "bvs@google.com",
    fullName : {
        userFullName : {
            firstName : "Bhavya",
            lastName : "Antiya"
        }
    }
}

// console.log(regularUSer.fullName.userFullName.firstName);


/**
 * Merging Objects
 */

const obj1  = {
    1: "a",
    2: "b"
} 

const obj2 = {
    3:"a",
    4:"b"
}

const obj3 = {obj1, obj2} // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) //=> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// The empty object in the start is the target which means all the data from other objects will be copied to the target one(i.e. first object)
// console.log(obj4);

// **************** OR ****************         Use Spread operator

const obj5  = {...obj1, ...obj2}
// console.log(obj5);


/** 
 * Get all Keys from the object in array
 */
console.log(Object.keys(obj5));

/** 
 * Get all Values from the object in array
 */
console.log(Object.values(obj5));

/** 
 * Get all Entries from the object in array
 */
console.log(Object.entries(obj5));


/** 
 * To check if a property exist in an object
 */
console.log(obj5.hasOwnProperty('1'));    // => True
console.log(obj5.hasOwnProperty('age'));  // => False