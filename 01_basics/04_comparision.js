// console.log("2" > 1); // => true
// console.log("02" > 1); // => true


/** 
 * For the below given code
 * The reason is that an equality check == and comparisons >, <, >=, <= work differently.
 * Comparisons convert null to a number, treating it as 0.
 * That's why (3) null > = 0 is true and (1) null > 0 is false.
 */

// 1. console.log(null > 0); // => false
// 2. console.log(null == 0); // => false
// 3. console.log(null >= 0); // => true
// 4. console.log(null <= 0); // => true


/**
 * Because undefined is not defined
 */

// console.log(undefined > 0); // => false
// console.log(undefined == 0); // => false
// console.log(undefined >= 0); // => false
// console.log(undefined <= 0); // => false


/**
 * === (Strict Check) [It also check the Datatype of the 2 variables]
 */

console.log("2" === 2); // => false [Because it check the datatypes as well]