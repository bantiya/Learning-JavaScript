// Immediately Invoked Function Expresssions (IIFE)

/**
 * Functions that are immediately executed are called IIFE.
 * 
 * Sometimes problem occur due to Global Scope pollution (variables, or any other declaration)
 *    so for that reason we use IIFE.
 */

/**
 * 
 *       (  )        (  )
 *        ^           ^
 *   ( Function     ( Function
 *   Definition )     Execution )
 */


// IIFE with normal function **** Named IIFE ******
(function chai() {
    console.log(`DB CONNECTED`)
})();


// IIFE with Explicit Arrow Function   ********* Unnamed IIFE ***********
((name) => { console.log(`DB CONNECTED ${name}`) }) ('Bhavya');


// IIFE with Implicit Arrow Function   ********* Unnamed IIFE ***********
(() => (console.log(`DB CONNECTED`)) ) ()

