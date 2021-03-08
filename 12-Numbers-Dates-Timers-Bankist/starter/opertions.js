console.log(Math.sqrt(25))
console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))
console.log(Math.max(1, 2, 3, 4))
console.log(Math.min(1, 2, 3, 4))
console.log(Math.PI * Number.parseFloat('10px') ** 2)
console.log(Math.trunc(Math.random() * 6) + 1)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

for (let index = 0; index < 10; index++) {
    console.log(randomInt(10, 20))
}

console.log((2.7).toFixed(0))
console.log((2.7).toFixed(3))
console.log(+(2.7).toFixed(3))

const isEven = n => n % 2 === 0;

console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future)

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24))
console.log(days1)

const now = new Date()
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
}
console.log(new Intl.DateTimeFormat('he-IL', options).format(now));

const num = 3884764.23

const opt = {
    style: 'currency',
    unit: 'mile-per-hour',
    currency: 'EUR'
}

console.log('US:', new Intl.NumberFormat('en-US', opt).format(num));
console.log('Germany:', new Intl.NumberFormat('de-DE', opt).format(num));
console.log('Israel:', new Intl.NumberFormat('he-IL', opt).format(num));

const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} ${ing2}`)
}, 3000, ...ingredients);

console.log('Waiting...')

if (ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer)
}

//setInterval

setInterval(function () {
    const nw = new Date()
    const hours = nw.getHours()
    const minutes = nw.getMinutes()
    const seconds = nw.getSeconds()
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000)