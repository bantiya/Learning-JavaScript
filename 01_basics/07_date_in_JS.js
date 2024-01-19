//Dates

let myDate = new Date // <= initialized Date object
// console.log(typeof myDate); // object
// console.log(myDate.toString()) // Fri Jan 19 2024 11:24:02 GMT-0500 (Eastern Standard Time)
// console.log(myDate.toISOString()) // 2024-01-19T16:24:02.652Z
// console.log(myDate.toDateString()); // Fri Jan 19 2024
// console.log(myDate.toLocaleDateString()); // 1/19/2024
// console.log(myDate.toLocaleTimeString()); // 11:24:02 AM

let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()) // <= Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 9, 12, 5, 3)
// console.log(myCreatedDate2.toLocaleString()) // <= 10/12/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate3.toLocaleString()) // <= 1/13/2023, 7:00:00 PM

let myCreatedDate4 = new Date("01-14-2023")
// console.log(myCreatedDate4.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);// => 1697144635315, millisec value from 1970

// console.log((myTimeStamp - myCreatedDate.getTime()))

let newDate = new Date()
console.log(newDate.getMonth()); // <= 0


// You can use toLocalString if you want to edit the date
newDate.toLocaleString('default', {
    weekday: "long"
})
