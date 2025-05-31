export function setupScrollReveal(selector = '.reveal-section') {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
          target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.25 }
  );

  document.querySelectorAll(selector).forEach((el) => {
    observer.observe(el);
  });
}
