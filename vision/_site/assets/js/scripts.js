document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
  
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuToggle.classList.toggle('is-active');
    });
  });

  // Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});