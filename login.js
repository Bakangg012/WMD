// Hardcoded users (Replace this with backend authentication for real security)
const users = {
    "admin": "admin",
    "user1": "user1",
    "test": "test123"
};

// Function to validate login
function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("uname").value;
    let password = document.getElementById("psw").value;

    if (users[username] && users[username] === password) {
        alert("Login Successful!");
        document.getElementById("id01").style.display = "none"; // Close modal
        localStorage.setItem("loggedInUser", username); // Store session
        return true;
    } else {
        alert("Invalid username or password.");
        return false;
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("id01");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
