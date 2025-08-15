// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Success message transition for contact form
const contactFormWrapper = document.getElementById('contact-form');
const contactForm = contactFormWrapper ? contactFormWrapper.querySelector('form') : null;
const formSuccess = document.getElementById('form-success');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Submit via AJAX to Formspree
    const data = new FormData(contactForm);
    fetch(contactForm.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        contactFormWrapper.style.opacity = 0;
        setTimeout(() => {
          contactFormWrapper.style.display = 'none';
          formSuccess.style.display = 'block';
          formSuccess.style.opacity = 1;
        }, 500);
      } else {
        response.json().then(data => {
          alert(data.error || 'There was a problem submitting your form.');
        });
      }
    }).catch(() => {
      alert('There was a problem submitting your form.');
    });
  });
}