// Arrays can store any dataType
const myArr = [0,1,2,3,4,5, true, "bhavya"]
const myHeros = [ "shaktiman", "ironman"]


// ****** Metho *******
const newArr = [0,1,2,3,4,99]

// newArr.push(90) // push element in array
// newArr.pop() // removes the last element frm the array
// newArr.unshift() // => [9,0,1,2,3,4,5] (Used to add element at 0th index)
// newArr.shift() // => [0,1,2,3,4,5] (Removes element from the 0th index)
// console.log(newArr.includes(5)); // true
// console.log(newArr.indexOf(99)); // 5
// console.log(typeof newArr) // => object
const  newArr2 = newArr.join() // Used to convert array to string
console.log(newArr2); // => String


const arr1 = [1,2,3,4,5,6]
// console.log(`A: [${arr1}]`);

/**+++++++++++++++++++++++++++ Slice ++++++++++++++++++++++++++++++++++++++++++++++
 * 
 * Slicing make a new array with the sliced elements
 */

const arr2 = arr1.slice(1,3)
console.log(`After slicing original array at (1,3): [${arr1}]`);
console.log(`B: new array [${arr2}]`);


/**+++++++++++++++++++++++++++ Splice ++++++++++++++++++++++++++++++++++++++++++++++++
 * 
 * Splice removes the elements from the original array and adds to the new array
 */

const arr3 = arr1.splice(1,3)
console.log(`After splicing original array at (1,3): [${arr1}]`);
console.log(`C: new array [${arr3}]`);



