// ++++++++++++++++++++++++++++++++++++++ FOR Of ++++++++++++++++++++++++++++++++++++++

const array = [1,2,3,4,5]

for (const iterator of array) {
    // console.log(iterator);
}


// ++++++++++++++++++++++++++++++++++++++ FOR IN ++++++++++++++++++++++++++++++++++++++

const myObject = {
    game1 : "NFS",
    game2 : "Spider Man"
}

for (const key in myObject) {
    console.log(`This is the:  ${myObject[key]}`);
}

for (const key in array) {
    console.log(array[key]);
}

// ++++++++++++++++++++++++++++++++++++++ MAP ++++++++++++++++++++++++++++++++++++++

const myMap = new Map()
myMap.set(1,'a')
myMap.set(2,'b')
myMap.set(3,'c')
myMap.set(4,'d')
// console.log(myMap);