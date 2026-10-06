# SpendWise

SpendWise is a simple budgeting dashboard that helps users understand their spending and manage their monthly budget.

## JavaScript Concepts Implemented

This project uses the following JavaScript concepts:

- Variables
- User input with `prompt()`
- Number conversion with `Number()`
- Arithmetic calculations
- Functions
- Return values
- Console output with `console.log()`

## How Variables Are Used

Variables are used to store important budgeting information.

Examples include:

- `appName` stores the application name.
- `budgetAmount` stores a default budget amount.
- `expenseName` stores the name of an expense.
- `expenseAmount` stores the expense amount.
- `budget` stores the budget entered by the user.
- `expense` stores the expense entered by the user.

## How User Input Is Collected

The JavaScript `prompt()` function is used to collect the user's budget and expense.

The `Number()` function converts the entered values from text into numbers.

Example:

```javascript
let budget = Number(prompt("Enter your budget:"));
let expense = Number(prompt("Enter your expense:"));