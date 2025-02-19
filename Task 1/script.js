document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
  
      if (!nameInput.value.trim() || !emailInput.value.trim()) {
        alert('Please fill in all required fields.');
        return;
      }
  
      alert(`submitted, ${nameInput.value}!`);
      form.reset();
    });
  
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
      alert('CTA button clicked!');
    });
});