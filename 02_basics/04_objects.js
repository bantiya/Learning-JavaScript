// ++++++++++++++++++++++++++++++++++ 2 ways to Declare Object ++++++++++++++++++++++++++++++++

// ************** 1. SINGLETON OBJECT **************
// const tinder = new Object()

// ************** LITERAL OBJECT **************
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Bhavya"
tinderuser.isLoggedIn = false

console.log(tinderuser);  // { id: '123abc', name: 'Bhavya', isLoggedIn: false }

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


// ++++++++++++++++++++++++++++++++++ Merging Objects ++++++++++++++++++++++++++++++++

const obj1  = {
    1: "a",
    2: "b"
} 

const obj2 = {
    3:"a",
    4:"b"
}

// Puts obj1, and obj2 in obj3
const obj3 = {obj1, obj2} 
// console.log(obj3)   // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// ****************** OBJECT.assign ****************

const obj4 = Object.assign({}, obj1, obj2) //=> { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// The empty object in the start is the target which means all the data from other objects will be copied to the target one(i.e. first object)
// console.log(obj4);

// **************** OR USE SPREAD OPERATOR ****************

const obj5  = {...obj1, ...obj2}
// console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// **************** Get all Keys from the object in array ****************
// console.log(Object.keys(obj5)); // [ '1', '2', '3', '4' ]


// **************** Get all Values from the object in array ****************
// console.log(Object.values(obj5)); // [ 'a', 'b', 'a', 'b' ]


// **************** Get all Entries from the object in array ****************
// console.log(Object.entries(obj5));  // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'a' ], [ '4', 'b' ] ]


// **************** To check if a property exist in an object ****************
// console.log(obj5.hasOwnProperty('1'));    // => True
// console.log(obj5.hasOwnProperty('age'));  // => False


// ++++++++++++++++++++++++++++++++++++++++ DeStructuring Objects ++++++++++++++++++++++++++++++++++++++++++
const course ={
    name : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// If you don't want to write course.courseInstructor each and every time so we use the below Syntax
const {courseInstructor} = course
          // OR
const{courseInstructor : Instructor} = course


// console.log(courseInstructor) // Hitesh
// console.log(Instructor)  // Hitesh


