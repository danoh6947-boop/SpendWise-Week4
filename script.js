// ========================================
// SPENDWISE INTERACTIVE JAVASCRIPT
// ========================================


// Application information
const appName = "SpendWise";


// Monthly budget
let budget = 50000;


// ========================================
// EXPENSE ARRAY
// ========================================

// The array stores multiple expense records.
let expenses = [
    {
        name: "Lunch",
        amount: 500,
        category: "Food"
    },
    {
        name: "Bus Fare",
        amount: 300,
        category: "Transport"
    }
];

// ========================================
// DISPLAY EXPENSE RECORDS
// ========================================

const expenseList = document.getElementById("expense-list");

expenseList.innerHTML = "";

for (let i = 0; i < expenses.length; i++) {

    const expenseItem = document.createElement("div");

    expenseItem.className = "expense-item";

    expenseItem.innerHTML = `
        <strong>${expenses[i].name}</strong>
        <span>KSh ${expenses[i].amount.toLocaleString()}</span>
        <span>${expenses[i].category}</span>
    `;

    expenseList.appendChild(expenseItem);
}

// ========================================
// HANDLE ADD EXPENSE FORM
// ========================================

const expenseForm = document.getElementById("expense-form");

expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("expense-name").value;

    const amount = Number(
        document.getElementById("expense-amount").value
    );

    const category = document.getElementById("expense-category").value;


    // Add the new expense to the array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });


    // Show a message in the console
    console.log("New expense added:", name, amount, category);


    // Clear the form
    expenseForm.reset();

});
// ========================================
// UPDATE THE DASHBOARD
// ========================================

document.getElementById("budget-display").textContent =
    "KSh " + budget.toLocaleString();

document.getElementById("total-expenses").textContent =
    "KSh " + totalExpenses.toLocaleString();

document.getElementById("remaining-balance").textContent =
    "KSh " + remainingBalance.toLocaleString();

document.getElementById("budget-status").textContent =
    budgetStatus;

// ========================================
// BUDGET DECISION MAKING
// ========================================

let remainingBalance = budget - totalExpenses;

let budgetStatus;

if (remainingBalance < 0) {

    budgetStatus = "Over Budget";

} else if (remainingBalance <= 5000) {

    budgetStatus = "Warning: Budget is almost finished";

} else {

    budgetStatus = "Good: You are within your budget";

}

console.log("Remaining Balance:", remainingBalance);

console.log("Budget Status:", budgetStatus);


// ========================================
// CHECK THE DATA
// ========================================

// ========================================
// PROCESS EXPENSES WITH A LOOP
// ========================================

let totalExpenses = 0;

for (let i = 0; i < expenses.length; i++) {

    totalExpenses = totalExpenses + expenses[i].amount;

}

// ========================================
// REFRESH THE DASHBOARD AFTER NEW EXPENSE
// ========================================

function updateDashboard() {

    // Reset total expenses
    totalExpenses = 0;

    // Calculate total using a loop
    for (let i = 0; i < expenses.length; i++) {

        totalExpenses = totalExpenses + expenses[i].amount;

    }


    // Calculate remaining balance
    remainingBalance = budget - totalExpenses;


    // Decide budget status
    if (remainingBalance < 0) {

        budgetStatus = "Over Budget";

    } else if (remainingBalance <= 5000) {

        budgetStatus = "Warning: Budget is almost finished";

    } else {

        budgetStatus = "Good: You are within your budget";

    }


    // Update dashboard numbers
    document.getElementById("budget-display").textContent =
        "KSh " + budget.toLocaleString();

    document.getElementById("total-expenses").textContent =
        "KSh " + totalExpenses.toLocaleString();

    document.getElementById("remaining-balance").textContent =
        "KSh " + remainingBalance.toLocaleString();

    document.getElementById("budget-status").textContent =
        budgetStatus;


    // Update expense records
    const expenseList =
        document.getElementById("expense-list");

    expenseList.innerHTML = "";


    for (let i = 0; i < expenses.length; i++) {

        const expenseItem =
            document.createElement("div");

        expenseItem.className = "expense-item";

        expenseItem.innerHTML = `
            <strong>${expenses[i].name}</strong>
            <span>KSh ${expenses[i].amount.toLocaleString()}</span>
            <span>${expenses[i].category}</span>
        `;

        expenseList.appendChild(expenseItem);

    }
}

console.log("Total Expenses:", totalExpenses);

console.log("Application:", appName);

console.log("Budget:", budget);

console.log("Expenses:", expenses);