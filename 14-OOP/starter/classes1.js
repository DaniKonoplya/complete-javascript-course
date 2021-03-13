const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven = Object.create(PersonProto)
console.log(steven);

steven.name = 'Steven'
steven.birthYear = 2002

steven.calcAge();

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10
        console.log(this.speed);
    }

    brake() {
        this.speed -= 5
        console.log(this.speed);
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(value) {
        this.speed = value * 1.6
    }
}

car = new Car('xx', 30)

car.accelerate()
car.brake()

console.log(car.speedUS);
car.speedUS = 30

console.log(car.speedUS);
console.log(car.speed);

console.log();