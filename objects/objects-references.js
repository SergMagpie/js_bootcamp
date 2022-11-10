let myAccount = {
    name: 'Serhii',
    expences: 0,
    income:0
}

let addExpence = function (account, amount) {
    account.expences = account.expences + amount
}
let addIncome = function (account, amount) {
    account.income = account.income + amount
}

addExpence(myAccount, 2.50)

console.log(myAccount)