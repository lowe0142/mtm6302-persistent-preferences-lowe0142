// Get references to DOM elements
const myList = document.getElementById("my-list");
const themeSelect = document.getElementById("theme-select");
const listSelect = document.getElementById("list-select");

// Add items to the list
const items = ["Red", "Blue", "Green", "Orange", "Purple"];
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  myList.appendChild(li);
}

// Load preferences from local storage
const savedTheme = localStorage.getItem("theme");
const savedListStyle = localStorage.getItem("listStyle");

// Set default preferences if not saved
const defaultTheme = "default";
const defaultListStyle = "default";

// Set theme based on saved preference or default
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(defaultTheme);
}

// Set list style based on saved preference or default
if (savedListStyle) {
  setListStyle(savedListStyle);
} else {
  setListStyle(defaultListStyle);
}

// Set theme based on user selection
themeSelect.addEventListener("change", function() {
  const selectedTheme = themeSelect.value;
  setTheme(selectedTheme);
  localStorage.setItem("theme", selectedTheme);
});

// Set list style based on user selection
listSelect.addEventListener("change", function() {
  const selectedListStyle = listSelect.value;
  setListStyle(selectedListStyle);
  localStorage.setItem("listStyle", selectedListStyle);
});

// Helper functions
function setTheme(theme) {
  document.body.className = "";
  if (theme !== "default") {
    document.body.classList.add(theme + "-theme");
  }
}

function setListStyle(listStyle) {
  myList.className = "";
  if (listStyle !== "default") {
    myList.classList.add(listStyle + "-list");
  }
}
