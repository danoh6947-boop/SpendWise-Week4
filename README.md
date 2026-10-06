# SpendWise

SpendWise is an interactive budgeting application that helps users track expenses, calculate their remaining balance, and understand their budget status.

## Improvements Made This Week

This week, SpendWise was improved from a basic budgeting dashboard into an interactive application.

The main improvements include:

- Adding an expense form.
- Adding expenses dynamically.
- Using arrays to store multiple expense records.
- Using loops to process expense records.
- Using conditional statements to evaluate the budget.
- Updating the dashboard dynamically using the DOM.
- Using event listeners to respond to user actions.
- Displaying expense records directly on the webpage.

## Conditionals

Conditional statements are used to evaluate the user's budget.

SpendWise checks the remaining balance and provides appropriate feedback.

For example:

```javascript
if (remainingBalance < 0) {
    budgetStatus = "Over Budget";
} else if (remainingBalance <= 5000) {
    budgetStatus = "Warning: Budget is almost finished";
} else {
    budgetStatus = "Good: You are within your budget";
}