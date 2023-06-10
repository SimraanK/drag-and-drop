function handleDragOver(event) {
    event.preventDefault();
    event.currentTarget.classList.add('dragging-over');
}

function handleDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('dragging-over');
    const draggedItem = document.querySelector('.item.dragging');
    event.currentTarget.appendChild(draggedItem);
    showMessage('Item dropped successfully!');
}

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

function showMessage(message) {
    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    document.body.appendChild(successMessage);
    setTimeout(() => {
        successMessage.remove();
    }, 2000);
}

function resetContainers() {
    const draggableContainer = document.querySelector('.draggable');
    const droppableContainer = document.querySelector('.droppable');
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        draggableContainer.appendChild(item);
    });

    while (droppableContainer.firstChild) {
        droppableContainer.removeChild(droppableContainer.firstChild);
    }
}
