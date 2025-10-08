// Sample Employee Data
const employees = [
  { name: "Aarav Patel", role: "Software Engineer", department: "IT", contact: "aarav.patel@example.com" },
  { name: "Diya Sharma", role: "HR Manager", department: "Human Resources", contact: "diya.sharma@example.com" },
  { name: "Rohan Singh", role: "Project Lead", department: "Operations", contact: "rohan.singh@example.com" },
  { name: "Isha Mehta", role: "UI/UX Designer", department: "Design", contact: "isha.mehta@example.com" },
  { name: "Kabir Khan", role: "Marketing Executive", department: "Marketing", contact: "kabir.khan@example.com" },
];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const employeeList = document.getElementById("employeeList");

// Display all employees on load
displayEmployees(employees);

// Search functionality
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query)
  );
  displayEmployees(filtered);
});

// Display employee cards
function displayEmployees(list) {
  employeeList.innerHTML = "";
  if (list.length === 0) {
    employeeList.innerHTML = "<p>No employees found.</p>";
    return;
  }

  list.forEach(emp => {
    const card = document.createElement("div");
    card.classList.add("employee-card");

    card.innerHTML = `
      <h3>${emp.name}</h3>
      <p class="role">${emp.role}</p>
      <p class="department">${emp.department}</p>
      <p>📧 ${emp.contact}</p>
    `;
    employeeList.appendChild(card);
  });
}
