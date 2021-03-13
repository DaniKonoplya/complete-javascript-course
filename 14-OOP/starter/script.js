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