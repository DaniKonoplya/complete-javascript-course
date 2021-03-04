'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';
    movements.forEach((mov, i) => {
        const _type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${_type}">${i + 1} ${_type}</div>
          <div class="movements__value">${mov} 🇪🇺</div>
        </div>
       ` ;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    });
}

/////////////////////////////////////////////////

const createUsernames = function (accounts) {
    accounts.forEach(account => {
        account
            .username = account.owner
                .toLowerCase()
                .split(' ')
                .map((username) => username[0])
                .join('')
    });
}

createUsernames(accounts)

const updateUI = function (currentAccount) {

    displayMovements(currentAccount.movements)

    calcDisplayBalance(currentAccount)

    calcDisplaySummary(currentAccount)

}

const calcDisplayBalance = function (account) {
    account.balance = account.movements.reduce((acc, mov) => {
        return acc + mov
    }, 0)
    labelBalance.textContent = `${account.balance} EUR`
}

const calcDisplaySummary = function (account) {
    const incomes = account.movements
        .filter(movement => movement > 0)
        .reduce((acc, mov) => acc + mov, 0)
    labelSumIn.textContent = `${incomes} 🇪🇺`
    const out = account.movements
        .filter(movement => movement < 0)
        .reduce((acc, mov) => acc - mov, 0)
    labelSumOut.textContent = `${out} 🇪🇺`
    const interest = account.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * account.interestRate) / 100)
        .filter(inter => inter >= 1)
        .reduce((acc, inter) => acc + inter, 0)
    labelSumInterest.textContent = `${interest} 🇪🇺`
}

const account = accounts.find(account => account.owner === 'Jessica Davis')
console.log(account)

const acc = function (accounts) {
    for (const account of accounts) {
        if (account.owner === 'Jessica Davis') {
            return account
        }
    }
    return null
}

let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    currentAccount = accounts.find(account => account.username === inputLoginUsername.value)
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
        containerApp.style.opacity = 100;

        inputLoginPin.value = inputLoginUsername.value = ''
        inputLoginPin.blur();

        updateUI(currentAccount)
    }
})


btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value)
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)
    console.log(amount, receiverAcc)

    inputTransferAmount.value = inputTransferTo.value = ''

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username) {
        currentAccount.movements.push(-amount)
        receiverAcc.movements.push(amount)
    }
    console.log(currentAccount)

    updateUI(currentAccount)
})

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(account => account.username === currentAccount.username)
        console.log(index)
        accounts.splice(index, 1)
        containerApp.style.opacity = 0
    }

    inputCloseUsername.value = inputClosePin.value = ''
})