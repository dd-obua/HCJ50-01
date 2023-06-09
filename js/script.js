'use strict';

const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

const activatePanel = panel => panel.classList.add('panel--active');
const deactivatePanel = panel => panel.classList.remove('panel--active');

container.addEventListener('click', function (event) {
  event.preventDefault();

  if (event.target.classList.contains('panel')) {
    const panel = event.target;
    const siblings = panel.closest('.container').querySelectorAll('.panel');
    siblings.forEach(sibling => {
      if (sibling !== panel) deactivatePanel(sibling);
    });
    activatePanel(panel);
  }
});
