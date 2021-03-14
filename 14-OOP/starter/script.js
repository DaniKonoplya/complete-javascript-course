'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}
//Methods should always be added to a prototype of the object
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}

Person.hey = function () {
    console.log('Hi there !');
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
jonas.calcAge()

console.log(jonas.__proto__);
console.log(Person.prototype.isPrototypeOf(jonas));

//Shared properties can be created inside the prototype.

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstname'));

console.log(Person.prototype.constructor);

const array = [3, 5, 5, 6, 7, 6]

Array.prototype.unique = function () {
    return [...new Set(this)]
}

console.log(array.unique());

console.dir(x => x + 1)

console.log('some');

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(this.speed);
}

const one_car = new Car('m', 20)
const two_car = new Car('c', 30)

one_car.accelerate()
one_car.accelerate()
one_car.brake()

two_car.accelerate()
two_car.accelerate()
two_car.brake()

console.log(Array.from(document.querySelectorAll('h1')));

Person.hey()

//Additional information about classes.


class Account {

    // Public fields 
    locale = navigator.language
    // Private fields
    #movements = [];
    #pin;
    //Static method

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val) {
        this.#movements.push(val)
        return this
    }

    withdraw(val) {
        this.deposit(-val)
        return this
    }


    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val)
            console.log('The Loan is approved.');
            return this
        }
    }

    getMovements() {
        return this.#movements
    }

    //Static method

    static helper() {
        console.log('Helper');
    }

    //Private methods

    #approveLoan(val) {
        return true
    }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250)
acc1.withdraw(140)
acc1.requestLoan(500)
console.log(acc1.getMovements());

Account.helper()

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)

console.log(acc1.getMovements());


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
        return this
    }

    brake() {
        this.speed -= 5;
        console.log(this.speed);
    }
}

class EVCl extends CarCl {

    #charge;

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge
    }

    get charge() {
        return this.#charge
    }

    chargeBattery(val) {
        this.#charge = val
        return this
    }

    brake(val) {
        if (val <= this.speed) {
            this.speed -= val
        }
        else {
            this.speed = 0;
        }
    }

}

const ev = new EVCl('cc', 30, 25)

console.log(ev);
console.log(ev.charge);

ev.accelerate()
ev.brake(10)
ev.chargeBattery(27)
console.log(ev.charge);

console.log(ev);