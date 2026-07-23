// ギャラリーモーダル
function initGalleryModal() {
  const modal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = modal.querySelector('.modal-close');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const fullSrc = thumb.getAttribute('data-full');
      modalImage.src = fullSrc;
      modalImage.alt = thumb.querySelector('img').alt;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGalleryModal();
});