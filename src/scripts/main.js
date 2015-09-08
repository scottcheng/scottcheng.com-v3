import $ from 'jquery';
import 'normalize-css';

import '../styles/index.styl';

$(() => {
  const $body = $(document.body);
  ['github', 'dribbble', 'instagram', 'px', 'twitter', 'email'].forEach((key) => {
    const selector = `#${key}`;
    const className = `color ${key}`;
    $body
      .on('mouseenter', selector, () => {
        $body.addClass(className);
      })
      .on('mouseleave', selector, () => {
        $body.removeClass(className);
      });
  });
});
