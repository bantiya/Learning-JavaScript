// console.log("2" > 1); // => true
// console.log("02" > 1); // => true


/**
 * The reason is that an equality check == and comparisons >, <, >=, <= work differently.
 * Comparisons convert null to a number, treating it as 0.
 * That's why (3) null > = 0 is true and (1) null > 0 is false.
 */

// console.log(null > 0); // => false
// console.log(null == 0); // => false
// console.log(null >= 0); // => true
// console.log(null <= 0); // => true


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

console.log("2" === 2);