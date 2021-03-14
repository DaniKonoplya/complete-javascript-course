class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(this.speed);
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
}