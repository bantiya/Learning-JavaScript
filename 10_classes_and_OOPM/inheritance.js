class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe() {
        console.log(`Entered user is: ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName, email, password) {
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course was added by ${this.userName}`);
    }
}

const t1 = new Teacher("chai", "chai@chai.com", "1234") 

t1.addCourse()
