class User {
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${this.userName.toUpperCase()}`
    }
}

const user = new User('chai','chai@chai.copm', '1234')
console.log(user.encryptPassword())
console.log(user.changeUserName())