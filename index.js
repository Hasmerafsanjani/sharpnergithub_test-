document.addEventListener('DOMContentLoaded', function() {
  loadOrdersFromLocalStorage();

  document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const price = document.getElementById('price').value;
      const item = document.getElementById('item').value;
      const tableNumber = document.getElementById('tableNumber').value;

      const order = {
          price: price,
          item: item,
          tableNumber: tableNumber
      };

      saveOrderToLocalStorage(order);
      appendOrderToTable(order);
      sendOrderToBackend(order);

      // Clear form fields after submission
      document.getElementById('orderForm').reset();
      document.getElementById('tableNumber').selectedIndex = 0;
  });
});

function saveOrderToLocalStorage(order) {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrdersFromLocalStorage() {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.forEach(order => appendOrderToTable(order));
}

function appendOrderToTable(order) {
  const ordersTableBody = document.querySelector('#ordersTable tbody');

  const newRow = document.createElement('tr');

  const tableNumberCell = document.createElement('td');
  tableNumberCell.textContent = order.tableNumber;

  const priceCell = document.createElement('td');
  priceCell.textContent = `$${order.price}`;

  const itemCell = document.createElement('td');
  itemCell.textContent = order.item;

  const deleteButtonCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function() {
      deleteOrder(order, newRow);
  });
  deleteButtonCell.appendChild(deleteButton);

  newRow.appendChild(tableNumberCell);
  newRow.appendChild(priceCell);
  newRow.appendChild(itemCell);
  newRow.appendChild(deleteButtonCell);

  ordersTableBody.appendChild(newRow);
}

function deleteOrder(order, rowElement) {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders = orders.filter(o => o.price !== order.price || o.item !== order.item || o.tableNumber !== order.tableNumber);
  localStorage.setItem('orders', JSON.stringify(orders));
  rowElement.remove();
}

function sendOrderToBackend(order) {
  fetch('https://crudcrud.com/api/ca51b1f400334591a41856c2223a1eaa/orders', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Order successfully sent to backend:', data);
  })
  .catch(error => {
      console.error('Error sending order to backend:', error);
  });
}
