window.onload = function() {
    displayExpenses();
};

function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses') || '[]');
}

function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description.trim() === '' || isNaN(amount)) {
        alert('Please fill out both fields correctly.');
        return;
    }

    const newExpense = { id: Date.now(), description, amount };
    const expenses = getExpenses();
    expenses.push(newExpense);
    saveExpenses(expenses);
    displayExpenses();
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function displayExpenses() {
    const expenses = getExpenses();
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    expenses.forEach(expense => {
        const expenseDiv = document.createElement('div');
        expenseDiv.className = 'expense-item';
        expenseDiv.innerHTML = `
            <p>Description: ${expense.description}</p>
            <p>Amount: ₹${expense.amount.toFixed(2)}</p><button onclick="editExpense(${expense.id})">Edit</button>
            <button onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        expensesList.appendChild(expenseDiv);
    });
}

function editExpense(expenseId) {
    const expenses = getExpenses();
    const index = expenses.findIndex(expense => expense.id === expenseId);
    const expense = expenses[index];

    const newDescription = prompt('Edit Description:', expense.description);
    const newAmount = parseFloat(prompt('Edit Amount:', expense.amount));
    if (newDescription !== null && newDescription.trim() !== '' && !isNaN(newAmount)) {
        expense.description = newDescription;
        expense.amount = newAmount;
        saveExpenses(expenses);
        displayExpenses();
    }
}

function deleteExpense(expenseId) {
    let expenses = getExpenses();
    expenses = expenses.filter(expense => expense.id !== expenseId);
    saveExpenses(expenses);
    displayExpenses();
}
