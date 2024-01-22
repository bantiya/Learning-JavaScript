const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descriptor);


const chai = {
    name : 'ginger tea',
    price : 250,
    isAvailable : true,

    orange : function() {
        console.log("Ni Bani chai")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai, 'name', { writable: false,
                                      enumerable: false,
                                      configurable: false })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(key, value);
    }
    
}
