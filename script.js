// ========================================
// SPENDWISE JAVASCRIPT FOUNDATION
// ========================================


// ========================================
// 1. STORE APPLICATION DATA
// ========================================

// Monthly budget
let monthlyBudget = 30000;

// Expense data
let foodExpense = 8500;
let transportExpense = 4200;
let rentExpense = 12000;
let entertainmentExpense = 3000;
let utilitiesExpense = 2800;

// Savings
let savingsAmount = 6500;


// ========================================
// 2. CALCULATE TOTAL EXPENSES
// ========================================

let totalExpenses =
    foodExpense +
    transportExpense +
    rentExpense +
    entertainmentExpense +
    utilitiesExpense;


// ========================================
// 3. CREATE A REUSABLE FUNCTION
// ========================================

function calculateRemainingBalance(budget, expenses) {

    let remainingBalance = budget - expenses;

    return remainingBalance;
}


// ========================================
// 4. CREATE A REPORT FUNCTION
// ========================================

function displayBudgetReport(budget, expenses, savings) {

    let remainingBalance =
        calculateRemainingBalance(budget, expenses);

    console.log("================================");
    console.log("       SPENDWISE BUDGET REPORT");
    console.log("================================");

    console.log("Monthly Budget: KSh " + budget);

    console.log("Total Expenses: KSh " + expenses);

    console.log("Savings: KSh " + savings);

    console.log(
        "Remaining Balance: KSh " + remainingBalance
    );

    console.log("================================");
}


// ========================================
// 5. COLLECT USER INPUT
// ========================================

let userBudget = prompt(
    "Enter your monthly budget in Kenyan Shillings:"
);


// ========================================
// 6. CONVERT USER INPUT TO A NUMBER
// ========================================

userBudget = Number(userBudget);


// ========================================
// 7. CALCULATE USER'S REMAINING BALANCE
// ========================================

let userRemainingBalance =
    calculateRemainingBalance(
        userBudget,
        totalExpenses
    );


// ========================================
// 8. DISPLAY USER RESULTS
// ========================================

console.log("================================");
console.log("       YOUR SPENDWISE RESULTS");
console.log("================================");

console.log(
    "Your Budget: KSh " + userBudget
);

console.log(
    "Total Expenses: KSh " + totalExpenses
);

console.log(
    "Remaining Balance: KSh " + userRemainingBalance
);

console.log("================================");


// ========================================
// 9. DISPLAY APPLICATION REPORT
// ========================================

displayBudgetReport(
    monthlyBudget,
    totalExpenses,
    savingsAmount
);