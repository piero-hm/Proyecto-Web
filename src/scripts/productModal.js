// src/scripts/productModal.js
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modalProducto');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalImg = document.getElementById('modalImg');
  const closeButton = modal ? modal.querySelector('[data-bs-dismiss="modal"]') : null;

  // Function to show the modal
  function showModal() {
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block'; // Ensure it's visible
      document.body.classList.add('overflow-hidden'); // Prevent scrolling
    }
  }

  // Function to hide the modal
  function hideModal() {
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none'; // Hide it
      document.body.classList.remove('overflow-hidden');
    }
  }

  // Event listener for buttons that open the modal
  document.querySelectorAll('[data-bs-toggle="modal"][data-bs-target="#modalProducto"]').forEach(btn => {
    btn.addEventListener('click', function() {
      if (modalTitle && modalPrice && modalImg) {
        modalTitle.textContent = this.dataset.title;
        modalPrice.textContent = this.dataset.price;
        modalImg.src = this.dataset.img;
        modalImg.className = 'w-full h-48 object-cover'; // Tailwind classes for image
        modalImg.alt = this.dataset.title;
      }
      showModal();
    });
  });

  // Event listener for the close button inside the modal
  if (closeButton) {
    closeButton.addEventListener('click', hideModal);
  }

  // Close modal when clicking outside (backdrop) or pressing Escape
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        hideModal();
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
      hideModal();
    }
  });
});