function SetUserName(userName) {
    //complex calculations && copmplex DB connections
    this.userName = userName
}


/**
 * 
 * We use .call because we need to hold the reference of the function, if we do not hold,
 * then after the execution of SetUserName method all the variables gets destroyed
 * 
 * And also we need to pass `this` as the first argument in .call(), as it denotes the `this`
 * of createUser function so when SetUserName uses `this` it uses the creatUser's 'this'
 * 
 */

function createUser(userName, email, password) {
    SetUserName.call(this, userName)  // This function gets called only after writing .call
    this.email = email
    this.password = password
    
}

const user = new createUser("Bhavya", "bvs@gmail.com", "123@ewq")
console.log(user);