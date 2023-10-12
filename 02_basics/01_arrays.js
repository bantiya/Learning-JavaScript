//arrays

const myArr = [0,1,2,3,4,5, true, "bhavya"]
const myHeros = [ "shaktiman", "ironman"]

const newArr = [0,1,2,3,4,5]
// newArr.unshift(9) // => [9,0,1,2,3,4,5]
// newArr.shift() // => [0,1,2,3,4,5]

// console.log(newArr.includes(3));

// console.log(typeof newArr) // => object
const  newnewArr = newArr.join() // Used to convertarray to string
// console.log(typeof newnewArr); // => String


const arr1 = [1,2,3,4,5,6]
console.log(`A: [${arr1}]`);


/**
 * Slicing make a new array with the sliced elements
 */

const arr2 = arr1.slice(1,3)
console.log(`After slicing original array at (1,3): [${arr1}]`);
console.log(`B: new array [${arr2}]`);


/**
 * Splice removes the elements from the original array and adds to the new array
 */

const arr3 = arr1.splice(1,3)
console.log(`After splicing original array at (1,3): [${arr1}]`);
console.log(`C: new array [${arr3}]`);



