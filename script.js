const items = document.querySelectorAll('.item');
const targetContainer = document.getElementById('target-container');
let draggedItem = null;

// Add event listeners for drag events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Function to handle drag start event
function dragStart(e) {
  draggedItem = e.target;
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragging');
}

// Function to handle drag end event
function dragEnd(e) {
  draggedItem = null;
  e.target.classList.remove('dragging');
}

// Function to handle drag enter event
function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('dragover');
}

// Function to handle drag over event
function dragOver(e) {
  e.preventDefault();
}

// Function to handle drag leave event
function dragLeave(e) {
  e.target.classList.remove('dragover');
}

// Function to handle drop event
function drop(e) {
  e.preventDefault();
  e.target.classList.remove('dragover');

  if (e.target === targetContainer && draggedItem !== null) {
    targetContainer.appendChild(draggedItem);

    // Add success class to the dropped item
    draggedItem.classList.add('success');
    showMessage('Item dropped successfully!');
  }
}

// Reset containers and messages
function resetContainers() {
  items.forEach(item => {
    item.classList.remove('success');
    document.querySelector('.container').appendChild(item);
  });
  showMessage('');
}

// Show success message
function showMessage(message) {
  const messageContainer = document.getElementById('message');
  messageContainer.textContent = message;
}
