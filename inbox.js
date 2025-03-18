// Function to display received messages
document.addEventListener("DOMContentLoaded", function () {
    let user = localStorage.getItem("loggedInUser");
    let welcomeMessage = document.getElementById("welcomeMessage");
    let messageList = document.getElementById("messageList");

    if (!user) {
        alert("You need to log in first!");
        window.location.href = "login.html";
    } else {
        welcomeMessage.innerHTML = `<h2>Welcome, ${user}!</h2>`;

        // Get stored messages
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        let userMessages = messages.filter(msg => msg.to === user);

        if (userMessages.length === 0) {
            messageList.innerHTML = "<li>No messages yet.</li>";
        } else {
            userMessages.forEach(msg => {
                let li = document.createElement("li");
                li.innerHTML = `<b>From:</b> ${msg.from}<br>${msg.text}`;
                messageList.appendChild(li);
            });
        }
    }
});

// Function to send a message
function sendMessage(event) {
    event.preventDefault();

    let sender = localStorage.getItem("loggedInUser");
    let recipient = document.getElementById("recipient").value.trim();
    let messageText = document.getElementById("message").value.trim();

    if (!sender) {
        alert("You need to log in first!");
        return;
    }

    if (!recipient || !messageText) {
        alert("Recipient and message cannot be empty!");
        return;
    }

    // Get stored messages
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    // Add new message
    messages.push({
        from: sender,
        to: recipient,
        text: messageText,
        timestamp: new Date().toLocaleString()
    });

    // Save messages
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message sent successfully!");
    document.getElementById("recipient").value = "";
    document.getElementById("message").value = "";
}
