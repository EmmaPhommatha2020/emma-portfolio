// Dark mode toggle (Bootstrap 5.3 data-bs-theme)
(() => {
  const root = document.documentElement;
  const key = 'theme';
  const saved = localStorage.getItem(key);
  if (saved) root.setAttribute('data-bs-theme', saved);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-bs-theme', next);
    localStorage.setItem(key, next);
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mailto-first contact form (works offline/GitHub Pages)
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // simple validation
    if (!data.name || !data.email || !data.message) {
      status.textContent = 'Please fill in all fields.';
      return;
    }
    const subject = encodeURIComponent(`Website inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    );
    window.location.href = `mailto:emma.phommatha@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app…';
    form.reset();
  });
})();
