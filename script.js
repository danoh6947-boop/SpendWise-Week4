// ========================================
// SPENDWISE JAVASCRIPT FOUNDATION
// ========================================


// STEP 2: STORE APPLICATION DATA

const appName = "SpendWise";

let budgetAmount = 50000;

let expenseName = "Lunch";

let expenseAmount = 500;


// STEP 3: COLLECT USER INPUT

let budget = Number(
    prompt("Enter your budget:")
);

let expense = Number(
    prompt("Enter your expense:")
);


// STEP 4: CREATE REUSABLE FUNCTIONS

function calculateBalance(budget, expense) {
    return budget - expense;
}


function calculateWeeklyBudget(monthlyBudget) {
    return monthlyBudget / 4;
}


// STEP 5: STORE RETURNED RESULTS

let balance = calculateBalance(
    budget,
    expense
);

let weeklyBudget = calculateWeeklyBudget(
    budget
);


// STEP 6: DISPLAY RESULTS IN THE CONSOLE

console.log(
    "Application:",
    appName
);

console.log(
    "Budget:",
    budget
);

console.log(
    "Expense:",
    expense
);

console.log(
    "Expense Name:",
    expenseName
);

console.log(
    "Expense Amount:",
    expenseAmount
);

console.log(
    "Remaining Balance:",
    balance
);

console.log(
    "Weekly Budget:",
    weeklyBudget
);