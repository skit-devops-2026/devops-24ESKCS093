function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function calculateRemainingBudget(totalBudget, expenses) {
    const totalExpenses = calculateTotalExpenses(expenses);
    return totalBudget - totalExpenses;
}

function isValidExpenseAmount(amount) {
    return typeof amount === "number" && amount > 0;
}

function calculateExpensePercentage(totalBudget, expenses) {
    if (totalBudget <= 0) {
        return 0;
    }

    const totalExpenses = calculateTotalExpenses(expenses);
    return (totalExpenses / totalBudget) * 100;
}

module.exports = {
    calculateTotalExpenses,
    calculateRemainingBudget,
    isValidExpenseAmount,
    calculateExpensePercentage
};