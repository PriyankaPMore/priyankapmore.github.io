// Animate sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  const sliders = document.querySelectorAll(".animate-up");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationPlayState = "running";
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.style.animationPlayState = "paused";
    appearOnScroll.observe(fader);
  });

  sliders.forEach(slider => {
    slider.style.animationPlayState = "paused";
    appearOnScroll.observe(slider);
  });
});