const myNums = [1,2,3,4,5,6,7,8,9,10]

// ++++++++++++++++++++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++++++++

/**
 * map() method of Array instances creates a new array populated with the results
 *   of calling a provided function on every element in the calling array. 
 */

const newNums = myNums.map( (num) => num + 10 ) 
console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// ********************************** Chainning *************************************

const newNums2 = myNums
                    .map( (num) => num * 100 )
                    .map( (item) => item + 1 )
                    .filter( (x) => x > 500 )
    
console.log(newNums2);