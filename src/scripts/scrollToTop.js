
document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTopBtn');

  if (scrollToTopButton) {
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('hidden');
      } else {
        scrollToTopButton.classList.add('hidden');
      }
    });

    // Scroll to top when the button is clicked
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
