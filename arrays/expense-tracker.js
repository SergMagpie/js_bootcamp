const account = {
    name: 'Serhii',
    expenses: [],
    incomes: [],
    addExpense: function (name, amount) {
        this.expenses.push({
            name: name,
            amount: amount
        })
    },
    addIncome : function (name, amount) {
        this.incomes.push({
            name: name,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let summary = 0
        for (let item in this.expenses) {
            summary -= this.expenses[item].amount
        }
        for (let item in this.incomes) {
            summary += this.incomes[item].amount
        }
        return summary
    }
}



account.addIncome('Salary', 1500)
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())
console.log(account)