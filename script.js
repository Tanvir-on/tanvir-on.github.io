// ================== ANCHOR LINK SMOOTH SCROLL WITH NAVBAR OFFSET ==================
const navbarHeight = 70; // adjust to your navbar height

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const bodyRect = document.body.getBoundingClientRect().top;
    const targetRect = target.getBoundingClientRect().top;
    const scrollTo = window.scrollY + targetRect - bodyRect - navbarHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
});

// ================== HAMBURGER NAV LINKS ==================
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active'); // optional for X animation
  });
});