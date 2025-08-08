document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');

  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'modal-close') {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) {
      modal.hidden = true;
      document.body.style.overflow = '';
    }
  });
});
