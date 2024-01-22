const promisOne = new Promise(function(resolve,reject) {
    // Do an async task
    // DB calls / Cryptography related / Network related

    setTimeout(() => {
        // console.log(`Async task is complete`)
        resolve()
    }, 1000);

})
 
// for consumption
promisOne.then(function() {
    // console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        // console.log(`Async task 2`);
        resolve()
    }, 1000);
}).then(() => {  // used by resolved
    // console.log(`Async 2 resolved`);
})


const promise3 = new Promise(function(resolve, reject) {
     setTimeout(() => {
        resolve({userame:"chai", email:"bhavya@gmail.com"})
     }, 1000);
})

promise3.then((userdata) => {
    // console.log(userdata);
})



const promise4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false        
        if(!error) { resolve( {userName:"Bhavya", password:"1267543"} )}
        else { reject(`Error! Something went wrong`) }
    }, 2000);
})

const user = promise4
.then((user) => {
    // console.log(user);
    return user.userName
})
.then((userNam) => {
    // console.log(userNam);
})
.catch((err) => {
    // console.log(err);
})
.finally(() => console.log(`Finally the promise is either resolved or rejected`))



const promise5 = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({username:"javaScript", password:"123"})
        }
        else {
            reject(`ERROR, JS went wrong`)
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promise5
        console.log(response);
    }catch (error) {
        console.log(error);
    }
}

consumePromiseFive()







async function getAllUsers() {
    try{
        const response1 = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response1.json()  // Converting to JSON takes time so make it await
        // console.log(data);
    }
    catch(e1) {
        // console.log(`E: `,e1);
    }
}

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/uers')
.then ((responseABC) => {
    return responseABC.json();
})
.then ((aboveResponse) => {
    console.log(aboveResponse);
})
.catch ((err1) => {
    console.log(`Error Occured: `,err1);
})
.finally (() => {
    console.log(`Everything got handled properly`);
})


// ++++++++++++++++++++++++++++++++++++++++ How Fetch Works ++++++++++++++++++++++++++++++++++++++++
/**
 * Whenever fetch is mentined 2 fields run:
 * 1. Web Browser / Node
 * 2. Variable & Data Reservation
 * 
 * 
 * + Fetch has a high priority queue.
 * 
 * 
 * 
 * Step ..1.. Web Browser / Node:
 * + So if a network request is sent any response that we get, is handled by Onfulfilled[] (response). {eg: even 404:File not found }
 * + And if the network rquest is not sent than we get a rejection, handled by OnRejection[] (reject).
 * 
 * 
 * Step ..2..  VAriable and Data Resetvation
 * + There are two different array's which are private and you cannot access it:
 *      +*+ Onfulfilled[] :- promise(response)
 *      +*+ OnRejection[] :- promise(reject)
 * 
 * 
 * Step ..2.. Fulfilling Data
 * + Once all the operations are done either response or request gets fired and fulfills either of the array, which have function in them, 
 *   than in result fulfill the response available in your Global Memory
 * 
 * 
 */