//map 


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movement_USD = movements.map(function (mov) {
    return mov * eurToUsd;
})

console.log(movement_USD)

const movement_five = movements.map((item) => {
    return item * 5
})


const movementsDescriptions = movements.map((mov, i, arr) => {
    const action = mov > 0 ? 'deposited' : 'withdrew'
    return `Movement ${i + 1}: You ${action} ${Math.abs(mov)}`
})

console.log(movementsDescriptions)

console.log('text')

const deposits = movements.filter((item) => {
    return item > 0
});

console.log(deposits)

const withdraws = movements.filter((item) => {
    return item < 0
})

console.log(withdraws)

const mov_sum = movements.reduce((acc, current) => {
    return acc + current
}, 0)

console.log(mov_sum)

const max = movements.reduce((acc, mov) => {
    mov > acc && (acc = mov)
    return acc
}, movements[0])

console.log(max)

const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

movements?.cool ? console.log('ss') : console.log('xx')

console.log(totalDepositsUSD)

const firstWithdrawal = movements.find(move => move < 0)
console.log(firstWithdrawal)


const owners = ['Jonas', 'Zach', 'Adam', 'Martha']

console.log(owners.sort())

movements.sort((a, b) => a - b)
console.log(movements)

movements.sort((a, b) => a > b)
console.log(movements)

movements.sort((a, b) => {
    if (a < b) return -1
    return 1
})
console.log(movements)