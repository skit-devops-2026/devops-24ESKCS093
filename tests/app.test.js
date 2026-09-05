const {
    calculateTotalExpenses,
    calculateRemainingBudget,
    isValidExpenseAmount,
    calculateExpensePercentage
} = require("../js/app.js");

const expenses = [
    { amount: 500 },
    { amount: 250 },
    { amount: 750 }
];

console.log("Running Billbook automated tests...");

// Test 1: Total expenses
const total = calculateTotalExpenses(expenses);

if (total !== 1500) {
    throw new Error(`Expected total expenses to be 1500, but got ${total}`);
}

console.log("✓ Total expense calculation passed");

// Test 2: Remaining budget
const remaining = calculateRemainingBudget(2000, expenses);

if (remaining !== 500) {
    throw new Error(`Expected remaining budget to be 500, but got ${remaining}`);
}

console.log("✓ Remaining budget calculation passed");

// Test 3: Valid expense amount
if (!isValidExpenseAmount(500)) {
    throw new Error("Expected 500 to be a valid expense amount");
}

if (isValidExpenseAmount(0)) {
    throw new Error("Expected 0 to be an invalid expense amount");
}

if (isValidExpenseAmount(-100)) {
    throw new Error("Expected -100 to be an invalid expense amount");
}

console.log("✓ Expense validation passed");

// Test 4: Expense percentage
const percentage = calculateExpensePercentage(2000, expenses);

if (percentage !== 75) {
    throw new Error(`Expected expense percentage to be 75, but got ${percentage}`);
}

console.log("✓ Expense percentage calculation passed");

console.log("All Billbook tests passed successfully!");