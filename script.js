document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const submenuToggle = document.querySelector('.submenu-toggle');
  const submenuParent = document.querySelector('.has-submenu');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  if (submenuToggle && submenuParent) {
    submenuToggle.addEventListener('click', () => {
      const isOpen = submenuParent.classList.toggle('open');
      submenuToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Close mobile menu after navigating
  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
