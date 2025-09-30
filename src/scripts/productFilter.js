// src/scripts/productFilter.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.onclick = () => {
      const cat = btn.dataset.filter;
      document.querySelectorAll('.producto').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });

      // Update active state for buttons
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    };
  });
});
