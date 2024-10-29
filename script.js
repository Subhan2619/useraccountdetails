// Get modal and address section elements
const addressModal = document.getElementById("addressModal");
const addressSection = document.getElementById("addressSection");
const closeModal = document.getElementById("closeModal");

// Open modal when "Your Addresses" section is clicked
addressSection.addEventListener("click", () => {
  addressModal.style.display = "block";
});

// Close modal when "X" is clicked
closeModal.addEventListener("click", () => {
  addressModal.style.display = "none";
});

// Close modal when clicking outside of modal content
window.addEventListener("click", (event) => {
  if (event.target === addressModal) {
    addressModal.style.display = "none";
  }
});

// Function to handle saving the address (can be expanded for actual save functionality)
function saveAddress() {
  const address = document.getElementById("addressInput").value;
  alert("Address saved: " + address); // Placeholder for saving address functionality
  addressModal.style.display = "none"; // Close modal after saving
}
