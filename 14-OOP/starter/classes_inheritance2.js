const PersonProto = {
    calcAge() {
        console.log(2021 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto)

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto)

jay.init('Jay', 2010, 'Computer Science')
jay.introduce()


//Additional information about classes.


class Account {

    // Public fields 
    locale = navigator.language
    // Private fields
    #movements = [];

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val) {
        this.#movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    _approveLoan(val) {
        return true
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val)
            console.log('The Loan is approved.');
        }
    }

    getMovements() {
        return this.#movements
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250)
acc1.withdraw(140)