// app.js
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Add playful cat animation
  const button = form.querySelector('button');
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending... <i class="fas fa-paw"></i>';
  
  // Simulate a cat-like delay (because cats take their time)
  await new Promise(resolve => setTimeout(resolve, 1500));

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
      // Playful success message
      button.innerHTML = '<i class="fas fa-check"></i> Message Sent! <i class="fas fa-paw"></i>';
      form.reset();
      
      // Add a fun cat emoji celebration
      const celebration = document.createElement('div');
      celebration.innerHTML = '🐾';
      celebration.style.position = 'fixed';
      celebration.style.fontSize = '2rem';
      celebration.style.animation = 'floatUp 2s forwards';
      celebration.style.left = `${Math.random() * 80 + 10}%`;
      celebration.style.bottom = '0';
      document.body.appendChild(celebration);
      
      setTimeout(() => {
        celebration.remove();
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message <i class="fas fa-paw"></i>';
      }, 2000);
    } else {
      button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Try Again <i class="fas fa-paw"></i>';
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message <i class="fas fa-paw"></i>';
      }, 2000);
    }
  } catch (error) {
    console.error('Error:', error);
    button.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Oops! Try Again <i class="fas fa-paw"></i>';
    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message <i class="fas fa-paw"></i>';
    }, 2000);
  }
});

// Add floating animation for the celebration
const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);