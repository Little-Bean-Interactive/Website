// app.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert(`Thank you for your message!\n\nWe'll get back to you soon.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      document.getElementById("contact-form").reset();
    } else {
      alert("Please fill out all fields.");
    }
  });