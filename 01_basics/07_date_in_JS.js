//Dates

let myDate = new Date
// console.log(typeof myDate);
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 9, 12)
// console.log(myCreatedDate.toDateString())

let myCreatedDate2 = new Date(2023, 9, 12, 5, 3)
// console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate3.toLocaleString())

let myCreatedDate4 = new Date("01-14-2023")
// console.log(myCreatedDate4.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp);// => 1697144635315 <= millisec value from 1970

console.log(myTimeStamp - myCreatedDate.getTime())
