<script>
    // Select all account option elements
    const accountOptions = document.querySelectorAll('.account-option');
    const helpButton = document.querySelector('.help-button');

    // Loop through each account option
    accountOptions.forEach((option, index) => {
        // Add click event listener
        option.addEventListener('click', () => {
            // Alternate colors for clicked items
            if (index % 2 === 0) {
                option.style.backgroundColor = '#2A9D8F'; // Greenish color for even options
            } else {
                option.style.backgroundColor = '#E76F51'; // Red-orange color for odd options
            }

            // Show an alert describing the functionality of each option
            let message;
            switch (index) {
                case 0:
                    message = "Your Orders: Track, return, or cancel an order.";
                    break;
                case 1:
                    message = "Login & Security: Edit login, name, and mobile number.";
                    break;
                case 2:
                    message = "Your Addresses: Edit, remove, or set a default address.";
                    break;
                case 3:
                    message = "Your Payments: Manage transactions, payment methods, and settings.";
                    break;
                case 4:
                    message = "Delete Account: Permanently delete your account.";
                    break;
                default:
                    message = "Unknown option.";
            }
            alert(message);
        });

        // Reset background color on mouseout
        option.addEventListener('mouseout', () => {
            option.style.backgroundColor = (index % 2 === 0) ? '#007BFF' : '#FF6347';
        });
    });

    // Help button functionality
    helpButton.addEventListener('click', () => {
        alert("Need Help? This section allows you to manage your account settings. Select any option above to view and modify details.");
        helpButton.style.backgroundColor = '#218838'; // Change color on click
    });

    // Reset Help button color on mouseout
    helpButton.addEventListener('mouseout', () => {
        helpButton.style.backgroundColor = '#28a745';
    });
</script>
