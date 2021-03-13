
const Car = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(this.speed);
}

Car.prototype.brake = function () {
    this.speed -= 5
    console.log(this.speed);
}


const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo
}

EV.prototype.accelerate = function () {
    this.speed += 20
    this.charge--
    console.log(`Tesla going at ${this.speed} km/h, with charge of ${this.charge} %`);
}


n_car = new EV('cc', 20, 22)

n_car.accelerate()
n_car.brake()