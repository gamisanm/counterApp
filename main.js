// Get the necessary elements from the DOM
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");
const incrementBtn = document.getElementById("incrementBtn");
const countSpan = document.getElementById("count");

// Initialize the count variable
let count = 0;

// Function to update the count value and display it
function updateCount() {
  countSpan.textContent = count;
}

// Event listeners for the buttons
decrementBtn.addEventListener("click", () => {
  count--;
  updateCount();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCount();
});

incrementBtn.addEventListener("click", () => {
  count++;
  updateCount();
});

// Initial display of the count
updateCount();
