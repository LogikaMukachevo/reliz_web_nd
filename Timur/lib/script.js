const links = document.querySelectorAll('.fixed-nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const topPosition = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  });
});
