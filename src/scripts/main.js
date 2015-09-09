import $ from 'jquery';
import 'normalize-css';

import '../styles/index.styl';

$(() => {
  const $projects = $('#projects');
  $projects
    .on('click', '.image', function() {
      $(this).closest('.project').find('.image-fullscreen').fadeIn(250);
    })
    .on('click', '.image-fullscreen', function() {
      $(this).fadeOut(250);
    });
});
