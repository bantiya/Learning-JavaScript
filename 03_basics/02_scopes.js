// ************************** Global Scope: var **************************

/**
 * Scope that is outside the { } is global scope and var is the only variable that has 
 * Golbal scope
 */



// ************************** Inner Scope : let, const **************************

/**
 * Scope that is inside any { } (i.e. if, for, etc) is Inner Scope.
 * let and const are the only variables that have an Inner Scope
 */




// Inner scope can access the variables of outer scope but not vice versa


console.log(addOne(5))  // 6
function addOne(number) {
    return addOne + 1
}

addTwo(8)    // ERROR :- because we have called before initialization
const addTwo = function(nums) {
    return nums + 2
}