const elements = document.querySelectorAll('.animate-on-scroll');

function checkViewport() {
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Check viewport on page load
checkViewport();

// Check viewport on scroll
window.addEventListener('scroll', checkViewport);
