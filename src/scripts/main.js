import domready from 'domready';
import 'normalize-css';

import '../styles/index.styl';

domready(() => {
  const forEach = Array.prototype.forEach;
  forEach.call(document.querySelectorAll('#projects .image'), (e) => {
    e.addEventListener('click', function() {
      if (window.innerWidth < 1000) { return; }

      const modal = this.querySelector('.image-fullscreen');
      modal.style.display = 'block';
      window.setTimeout(() => {
        modal.classList.add('active');
      });
    });
  });
  forEach.call(document.querySelectorAll('#projects .image-fullscreen'), (e) => {
    e.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.remove('active');
      window.setTimeout(() => {
        this.style.display = 'none';
      }, 250);
    });
  });
});
