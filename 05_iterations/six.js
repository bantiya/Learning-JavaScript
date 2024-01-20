const coding = ["ruby","js","java","python","cpp"]

// coding.forEach((item) => {console.log(item);})

const myNums = [1,2,3,4,5,6,7,8,9,10]

// ++++++++++++++++++++++++++ Filter ++++++++++++++++++++++++++

/**
 * The filter() method of Array instances creates a shallow copy of a 
 *    portion of a given array, filtered down to just the elements from the 
 *    given array that pass the test implemented by the provided function.
 */

// const newNums = myNums.filter((num) => num > 4) 

console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]


/**
 * You can also do the above process using ForEach
 */

const newNums2 = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums2.push(num)  // push value of num into newNums2
    }
})

// console.log(newNums2); // [ 5, 6, 7, 8, 9, 10 ]

