const userEmail = "bhavya1303@gmail.com"

if (userEmail) {
    console.log("Got user Email");
}
else {
    console.log("Got user Email");
}


// ++++++++++++++++++++++++++++++++++++++++++ Falsy Values ++++++++++++++++++++++++++++++
/**
 * false
 * 0
 * -0
 * BigInt (0n)
 * null
 * undefined
 * NaN
 */


// ++++++++++++++++++++++++++++++++++++++++++ Truthy Values ++++++++++++++++++++++++++++++
/**
 * "0"
 * "false"
 * " "
 * []
 * {}
 * function(){}    // <== Empty funtion
 */


// ++++++++++++++++++++++++++++++++++++++++++ Nullish Coalescing Operator(??): null undefined ++++++++++++++++++++++++++++++
/**
 * Used for handling null and undefined values
 */

let val; 
val = null ?? 10
console.log(val);   // 10

var1 = undefined ?? 15 ?? 30 // 15


// ++++++++++++++++++++++++++++++++++++++++++ Terniary Operator ++++++++++++++++++++++++++++++
/**
 * condition ? first_value : second_value
 */

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater") : console.log("smaller")