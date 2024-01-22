class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe() {
        console.log(`User ${this.userName} added`);
    }

    static createId() {
        return `123`
    }
}

const bhavya = new User('chai')
// console.log(bhavya.logMe());

const chai = User.createId()
// console.log(chai);

class Teacher extends User {
    constructor(userName,email) {
        super(userName)
        this.email = email
    }
}
    
const iphone = new Teacher("tea", "tea@tea.com")
console.log(Teacher.createId());