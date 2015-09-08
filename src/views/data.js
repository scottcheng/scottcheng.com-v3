var marked = require('marked');

var projects = (function() {
  var sparkl = {
    id: 'sparkl',
    name: 'Sparkl',
    description: 'Virtual brainstorming for creative collaboration.',
    link: 'https://sparkl.us',
    type: 'web-app',
  };

  var cropit = {
    id: 'cropit',
    name: 'cropit',
    description: 'A "customizable crop and zoom" jQuery plugin',
    link: 'http://scottcheng.github.io/cropit/',
    type: 'code',
  };

  var conversive = {
    id: 'conversive',
    name: 'Conversive',
    description:
      'Bringing real-time classroom-style discussion to MOOC. '
        + 'Prototype validated on [a popular Coursera course](https://www.coursera.org/course/algo) with real MOOC learners.',
    type: 'web-prototype',
  };

  var cofound = {
    id: 'cofound',
    name: 'Co.found',
    description:
      'Cofounder networking platform for the Stanford community. '
      + 'Class project for [CS147](http://hci.stanford.edu/cs147/).',
    link: 'https://co-found.herokuapp.com/',
    type: 'web-app',
  };

  var weibo = {
    id: 'weibo',
    name: 'Weibo Visualization',
    description: 'An experimental visualization of a Weibo dataset, trying to illustrate the time-wise evolution of topics.',
    link: 'http://scottcheng.github.com/weibo-time-vis/',
    type: 'vis',
  };

  var bjAir = {
    id: 'bj-air',
    name: 'Visualization of Beijing Air Pollution',
    description: 'This interactive visualization demonstrates the intensity distribution of several major pollutants in Beijing over two weeks.',
    link: 'http://scottcheng.github.com/bj-air-vis/',
    type: 'vis',
  };

  var css3 = {
    id: 'css3',
    name: 'The Revolutionary CSS3',
    description: 'A non-technical intro to CSS level 3.',
    link: 'http://scottcheng.github.com/revolutionary-css3/',
    type: 'talk',
  };

  return [
    sparkl,
    cropit,
    conversive,
    cofound,
    weibo,
    bjAir,
    css3,
  ].map(function(p) {
    p.description = marked(p.description);
    return p;
  });
})();

module.exports = {
  projects: projects,
};
