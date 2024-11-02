document.addEventListener("DOMContentLoaded", function() {
    const accountItems = document.querySelectorAll(".account-item");
    
    accountItems.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You selected: ${item.querySelector("h2").innerText}`);
        });
    });
    
    const helpButton = document.querySelector(".help-btn");
    helpButton.addEventListener("click", () => {
        alert("How can we assist you?");
    });
});
