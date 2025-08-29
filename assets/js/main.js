
// Simple JS: mobile nav toggle handled by CSS checkbox; below is contact form demo
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if(!form) return;
  const status = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // For a static site we just simulate success; replace with your backend later.
    console.log('Contact form data:', data);
    status.textContent = 'Thank you! Your message has been recorded.';
    form.reset();
  });
});
