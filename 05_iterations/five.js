const coding = ["js","ruby","py","cpp"]


// ******************* ForEach function inbuilt in arrays *******************

//coding.forEach( function (i) { console.log(i); })

// coding.forEach((item, index, arr) => (console.log(item, index, arr)))


// ******************* You can even pass a function in forEach *******************

function printMe(item) {
    //console.log(item);
}

coding.forEach(printMe)  // Do not execute the function by adding printMe(), just pass the function


/**
 * forEach for object
 */

const myCoding = [
    {
        languageName : "javascript",
        langaugeFileName : "js"
    },
    {
        languageName : "java",
        langaugeFileName : "java"
    },
    {
        languageName : "python",
        langaugeFileName : "py"
    }
]

myCoding.forEach((obj) => {console.log(obj.langaugeFileName, obj.languageName)})