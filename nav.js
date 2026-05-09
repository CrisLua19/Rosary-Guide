document.addEventListener('DOMContentLoaded', function() {
  // Smooth back navigation
  document.querySelectorAll('a[href="index.html"]').forEach(link => {
    link.addEventListener('click', function() {
      window.scrollTo({top:0,behavior:'smooth'});
      setTimeout(() => window.location.href='index.html', 150);
    });
  });

  // Animate prayer cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px)');
    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
  });

  // Keyboard escape to home
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') window.location.href = 'index.html';
  });
});