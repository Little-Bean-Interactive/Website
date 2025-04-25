// app.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
    forwardTo: 'dev@littlebeaninteractive.com'
  };

  try {
    const response = await fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Your message has been sent successfully!');
      form.reset();
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error sending your message. Please try again later.');
  }
});