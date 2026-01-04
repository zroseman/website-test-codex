const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-state') === 'open';
    nav.setAttribute('data-state', isOpen ? 'closed' : 'open');
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });
}

document.querySelectorAll('.faq-item').forEach((item) => {
  item.addEventListener('click', () => {
    const isExpanded = item.getAttribute('aria-expanded') === 'true';
    item.setAttribute('aria-expanded', String(!isExpanded));
  });
});

document.querySelector('.cta-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.querySelector('input[name="email"]').value.trim();
  const role = form.querySelector('input[name="role"]').value.trim();
  const teamSize = form.querySelector('select[name="team-size"]').value;
  alert(`Draft created for ${role || 'your next role'} (team size: ${teamSize}). We\'ll follow up at ${email}.`);
});
