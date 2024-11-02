// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all account options
    const accountOptions = document.querySelectorAll(".account-option");
    const helpButton = document.querySelector(".help-button");

    // Add click event listeners to each account option
    accountOptions.forEach((option, index) => {
        option.addEventListener("click", () => {
            // Toggle active state for clicked option
            accountOptions.forEach(opt => opt.classList.remove("active"));
            option.classList.add("active");

            // Display a unique alert message based on the selected option
            const optionText = option.querySelector("h2").innerText;
            alert(`You selected: ${optionText}`);
        });
    });

    // Help button click event
    helpButton.addEventListener("click", () => {
        // Display a help message or guide
        alert("Need help? Here you can manage your account, including orders, login security, addresses, payments, or deleting your account.");
    });
});
