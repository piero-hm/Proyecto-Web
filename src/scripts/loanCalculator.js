// src/scripts/loanCalculator.js
document.addEventListener('DOMContentLoaded', function() {
  const formSim = document.getElementById('formSim');
  if (formSim) {
    formSim.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat(document.getElementById('monto').value || 0);
      const tea = parseFloat(document.getElementById('tasa').value || 0) / 100;
      const n = parseInt(document.getElementById('meses').value || 0, 10);

      // Formula sistema francés: A = P * i / (1 - (1+i)^-n)
      const i = Math.pow(1 + tea, 1 / 12) - 1; // TEM a partir de TEA
      const A = (i > 0 && n > 0) ? (P * i) / (1 - Math.pow(1 + i, -n)) : 0;

      const cuotaElement = document.getElementById('cuota');
      cuotaElement.textContent = 'S/ ' + A.toFixed(2);

      // Add class for glow animation
      const resultCard = cuotaElement.closest('.card');
      if (resultCard) {
        resultCard.classList.add('result-updated');
        setTimeout(() => {
          resultCard.classList.remove('result-updated');
        }, 1200); // Match animation duration
      }
    });
  }
});
