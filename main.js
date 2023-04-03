const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

// Get the unordered list element
const myList = document.getElementById('myList');

// Loop through the color names array and generate list items
colors.forEach((color) => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.textContent = color;
  myList.appendChild(li);
});