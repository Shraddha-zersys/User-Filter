const users = [
  { name: "Shraddha", age: 22 },
  { name: "Sachin", age: 30 },
  { name: "Mamtha", age: 28 },
  { name: "Shravya", age: 19 },
  { name: "Raghav", age: 35 },
];

function filterUsers() {
  const ageInput = document.getElementById("ageFilter").value;
  const filtered = users.filter((user) => user.age > ageInput);

  const userHtml = filtered
    .map((user) => `<div class="user">${user.name}, Age: ${user.age}</div>`)
    .join("");

  document.getElementById("output").innerHTML = userHtml;

  const total = filtered.reduce((count) => count + 1, 0);
  document.getElementById("totalUsers").innerText = `Total users: ${total}`;
}

// Show initial users over 25
window.onload = filterUsers;
