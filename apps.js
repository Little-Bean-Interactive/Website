const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const button = form.querySelector('button');
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  try {
    const formData = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/myzwzypd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      }),
    });

    if (response.ok) {
      button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      form.reset();
    } else {
      button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      alert('There was an error sending your message. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
    alert('There was an error sending your message. Please try again later.');
  }
});
