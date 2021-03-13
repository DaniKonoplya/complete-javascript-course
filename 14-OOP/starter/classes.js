
class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Method will be added to the prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    get age() {
        return 2037 - this.birthYear
    }

    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name
        } else {
            alert(`${name} is not a full name!`)
        }
    }

    get fullName() {
        return this._fullName
    }

    static hey() {
        console.log('Hey there!');
        console.log(this);
    }

}

const jessica = new Person('Jessica Davis', 1996)
console.log(jessica);

jessica.calcAge();

Person.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}

jessica.greet()

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }

}

console.log(account.latest);
account.latest = 50
console.log(account.latest);


console.log(jessica.age);
Person.hey()