'use strict';

const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

container.addEventListener('click', function (event) {
  if (event.target.classList.contains('panel')) {
    const panel = event.target;
    const siblings = panel.closest('.container').querySelectorAll('.panel');
    siblings.forEach(sibling => {
      if (sibling !== panel) sibling.classList.remove('panel--active');
    });
    panel.classList.add('panel--active');
  }
});
