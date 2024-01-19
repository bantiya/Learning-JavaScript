const name = "Bhavya"
const newName = new String("Bhavya")  // <= Makes a String object

// console.log(name); // => Bhavya
// console.log(newName); // => [String: 'Bhavya'] <= Makes a String object

// console.log(name[2]); // => a
// console.log(newName[2]); // => a

const repoCount = 5

// DO NOT USE THIS METHOD TO CONCADINATE STRINGS: """"""USE BACKTICKS""""""
// console.log(name + " " + repoCount + " Value"); // => Bhavya 5 Value

// *************************** BACKTICKS *************************** Much better and mordern way 

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); // => Hello my name is Bhavya and my repocount is 5

// console.log(newName.length);
// console.log(newName.toUpperCase());
// console.log(newName.toLowerCase());
// console.log(newName.charAt(2));
// console.log(newName.indexOf("a"));

let newString = newName.substring(1,3)
// console.log(newString);

let newString1 = newName.slice(1,3)
// console.log(newString1);

let newString2 = "      Bhavya.    "
// console.log(newString2.trim()); // => "Bhavya"
// console.log(newString2.trimStart()); // => "Bhavya     "
// console.log(newString2.trimEnd()); // => "     Bhavya"

const url = "https://Bhavya.com/bhavya%20antiya"
// console.log(url.replace('%20','-')); // => https://Bhavya.com/bhavya-antiya

// console.log(url.includes("bhavya")); // => true (to check if the keyword is present in the string)

let gameName = "Bhavya Antiya"
let newGameName = gameName.split(" ")
console.log(newGameName); // => [ 'Bhavya', 'Antiya' ]

let string101 = "Bhavya"
let string102 = "Good"
console.log(`${string102} Morning ${string101}, hope you are doing good`)
// Good Morning Bhavya, hope you are doing good