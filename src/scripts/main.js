import $ from 'jquery';
import 'normalize-css';

import '../styles/index.styl';

$(() => {
  const $splash = $('#splash');
  ['github', 'dribbble', 'instagram', 'px', 'twitter', 'email'].forEach((key) => {
    const selector = `.link.${key}`;
    const className = `color ${key}`;
    $splash
      .on('mouseenter', selector, () => {
        $splash.addClass(className);
      })
      .on('mouseleave', selector, () => {
        $splash.removeClass(className);
      });
  });

  const $projects = $('#projects');
  $projects
    .on('click', '.image', function() {
      $(this).closest('.project').find('.image-fullscreen').fadeIn(250);
    })
    .on('click', '.image-fullscreen', function() {
      $(this).fadeOut(250);
    });
});
