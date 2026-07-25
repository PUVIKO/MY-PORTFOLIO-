// MODE TOGGLE: Marketing <-> Photography
const dialButtons = document.querySelectorAll('.dial-btn');
const modePanels = document.querySelectorAll('.mode-panel');

dialButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    dialButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    modePanels.forEach(p => p.classList.toggle('active', p.id === mode));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// PHOTOGRAPHY GALLERY: simple fade-in animation
const galleryItems = document.querySelectorAll('.masonry-item');

// FADE-IN ANIMATION on load for gallery items
window.addEventListener('DOMContentLoaded', () => {
  galleryItems.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(16px)';
    item.style.transition = 'opacity .5s ease, transform .5s ease';
    item.style.transitionDelay = `${i * 80}ms`;
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 100);
  });
});
