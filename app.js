// Minimalist JS logic for Ritik Chauhan Portfolio (Multi-page)

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const menuToggle = document.getElementById('menu-toggle') || document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Adjust header transparency on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.backgroundColor = 'rgba(245, 240, 232, 0.98)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.02)';
    } else {
      header.style.backgroundColor = 'rgba(245, 240, 232, 0.85)';
      header.style.boxShadow = 'none';
    }
  });

  // Mobile navigation menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Close nav menu on clicking active links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // Highlight active link based on current path
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath.includes('/portfolio/') && href.includes('portfolio')) {
      link.classList.add('active');
    } else if (currentPath.includes('/services/') && href.includes('services')) {
      link.classList.add('active');
    } else if (currentPath.includes('/about/') && href.includes('about')) {
      link.classList.add('active');
    } else if (currentPath.includes('/contact/') && href.includes('contact')) {
      link.classList.add('active');
    }
  });

  // Scroll In & Out transitions
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // removes when scrolled out
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "-20px 0px -20px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
});
