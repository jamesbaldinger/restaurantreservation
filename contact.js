// contact.js
function validateContactForm() {
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    if (!name || !email || !message) {
        alert('All fields are required.');
        return false;
    }

    // Send data to server here
    alert('Message sent. We will get back to you soon!');
    return true;
}
