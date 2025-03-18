// Clear user session and redirect to home page
document.addEventListener("DOMContentLoaded", function() {
    localStorage.removeItem("loggedInUser"); // Remove logged-in user
    sessionStorage.clear(); // Clear session storage (if used)

    // Redirect to home page after 2 seconds (optional delay)
    setTimeout(function() {
        window.location.href = "eazys_cars.html";
    }, 2000); // Adjust time if needed
});

// Function to redirect immediately when button is clicked
function redirectToHome() {
    window.location.href = "eazys_cars.html";
}
