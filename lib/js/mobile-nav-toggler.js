let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
let navLinkContainer = document.querySelector('.navbar .nav-link-container');
mobileNavToggle.addEventListener('click', event => {
  let navLinkContainerAfter = document.createElement('span');
  navLinkContainerAfter.textContent = '>';
  navLinkContainerAfter.classList.add('after');
  navLinkContainer.appendChild(navLinkContainerAfter);
  navLinkContainer.classList.add('nav-link-container-active');
  navLinkContainerAfter.addEventListener('click', event => {
    navLinkContainer.classList.remove('nav-link-container-active');
  });
});
let navLinks = [...document.querySelectorAll('.nav-link.scrollto')];
navLinks.forEach(navLink => {
  navLink.addEventListener('click', event => {
    if (!navLink.classList.contains('active')) {
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});