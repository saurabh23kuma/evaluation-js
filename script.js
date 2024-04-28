const baseUrl = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees";
let currentPage = 1;
const limit = 10;

function fetchEmployees() {
  const url = `${baseUrl}?page=${currentPage}&limit=${limit}`;
  // Fetch data from API and update table
}

function filterEmployees() {
  const department = document.getElementById("department").value;
  const gender = document.getElementById("gender").value;
  const sort = document.getElementById("sort").value;
  // Apply filters and sorting to fetch the updated data
}

function updatePagination() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = false; // Update based on the last page
  document.getElementById("page-num").innerText = `Page ${currentPage}`;
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentPage--;
  fetchEmployees();
  updatePagination();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentPage++;
  fetchEmployees();
  updatePagination();
});

document.getElementById("department").addEventListener("change", filterEmployees);
document.getElementById("gender").addEventListener("change", filterEmployees);
document.getElementById("sort").addEventListener("change", filterEmployees);

// Initial fetch when the page loads
fetchEmployees();
