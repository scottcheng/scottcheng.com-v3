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
});
