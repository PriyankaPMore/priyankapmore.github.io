// Animate sections when scrolled into view
const fadeElems = document.querySelectorAll('.fade-in, .animate-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElems.forEach(el => {
  observer.observe(el);
});