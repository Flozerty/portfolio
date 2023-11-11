document.querySelectorAll('a[href^="#"]').forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    const href = element.getAttribute('href');
    const ancre = document.querySelector(href);

    window.scrollTo({
      top: ancre.offsetTop,
      behavior: 'smooth'
    })
  });
});