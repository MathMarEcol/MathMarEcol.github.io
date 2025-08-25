// Theme persistence fix for Quarto websites
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or default to light mode
  const savedTheme = localStorage.getItem('quarto-color-scheme') || 'light';
  document.documentElement.setAttribute('data-bs-theme', savedTheme);
  
  // Update toggle button state
  const toggleBtn = document.querySelector('.quarto-color-scheme-toggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-pressed', savedTheme === 'dark');
  }
  
  // Listen for theme toggle clicks
  document.addEventListener('click', function(e) {
    if (e.target.closest('.quarto-color-scheme-toggle')) {
      setTimeout(function() {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        localStorage.setItem('quarto-color-scheme', currentTheme);
      }, 100);
    }
  });
});