// Ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Handle Read More buttons
  const buttons = document.querySelectorAll('.read-more');
  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const info = this.nextElementSibling;

      // Toggle current info
      if (info.style.display === 'block') {
        info.style.display = 'none';
      } else {
        // Hide all other info sections
        document.querySelectorAll('.info').forEach(el => {
          el.style.display = 'none';
        });

        // Show current one
        info.style.display = 'block';
        info.style.animation = 'fadeIn 0.5s ease';
      }
    });
  });

  // Responsive menu toggle
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
     }

  // Add fadeIn animation dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
});