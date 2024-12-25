// Add the drag-and-drop functionality
let dragItem = document.getElementById("statusWindow");
let dragHandle = document.getElementById("dragHandle");
let isDragging = false;
let offsetX, offsetY;

// When mouse is pressed down on the handle
dragHandle.addEventListener("mousedown", function(e) {
    isDragging = true;
    offsetX = e.clientX - dragItem.getBoundingClientRect().left;
    offsetY = e.clientY - dragItem.getBoundingClientRect().top;
    document.body.style.userSelect = "none"; // Disable text selection while dragging
});

// When mouse is moved
document.addEventListener("mousemove", function(e) {
    if (isDragging) {
        dragItem.style.left = `${e.clientX - offsetX}px`;
        dragItem.style.top = `${e.clientY - offsetY}px`;
    }
});

// When mouse button is released
document.addEventListener("mouseup", function() {
    isDragging = false;
    document.body.style.userSelect = "auto"; // Re-enable text selection
});
