
const myList = document.getElementById("my-list");
const themeSelect = document.getElementById("theme-select");
const listSelect = document.getElementById("list-select");


const items = ["Red", "Blue", "Green", "Orange", "Purple"];
for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  myList.appendChild(li);
}

const savedTheme = localStorage.getItem("theme");
const savedListStyle = localStorage.getItem("listStyle");


const defaultTheme = "default";
const defaultListStyle = "default";


if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(defaultTheme);
}


if (savedListStyle) {
  setListStyle(savedListStyle);
} else {
  setListStyle(defaultListStyle);
}

themeSelect.addEventListener("change", function() {
  const selectedTheme = themeSelect.value;
  setTheme(selectedTheme);
  localStorage.setItem("theme", selectedTheme);
});


listSelect.addEventListener("change", function() {
  const selectedListStyle = listSelect.value;
  setListStyle(selectedListStyle);
  localStorage.setItem("listStyle", selectedListStyle);
});

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
