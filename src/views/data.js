var marked = require('marked');

var projects = [
  {
    id: 'sparkl',
    name: 'Sparkl',
    description: 'Virtual brainstorming for creative collaboration.',
    link: 'https://sparkl.us',
    linkText: 'Launch site',
    type: 'Web app',
  },
  {
    id: 'cropit',
    name: 'cropit',
    description: 'A "customizable crop and zoom" jQuery plugin.',
    link: 'http://scottcheng.github.io/cropit/',
    linkText: 'See demo',
    type: 'Code',
  },
  {
    id: 'conversive',
    name: 'Conversive',
    description:
      'Bringing real-time classroom-style discussion to MOOC. '
        + 'Prototype validated on [a popular Coursera course](https://www.coursera.org/course/algo) with real MOOC learners.',
    link: '/assets/projects/conversive.pdf',
    linkText: 'Read paper',
    type: 'Academic / web prototype',
  },
  {
    id: 'cofound',
    name: 'Co.found',
    description:
      'Cofounder networking platform for the Stanford community. '
      + 'Class project for [CS147](http://hci.stanford.edu/cs147/).',
    link: 'https://co-found.herokuapp.com/',
    linkText: 'Launch app',
    type: 'Mobile web app',
    browser: false,
  },
  {
    id: 'weibo',
    name: 'Weibo Visualization',
    description: 'An experimental visualization of a Weibo dataset, trying to illustrate the time-wise evolution of topics.',
    link: 'http://scottcheng.github.io/weibo-time-vis/',
    linkText: 'Open visualization',
    type: 'Visualization',
  },
  {
    id: 'bj-air',
    name: 'Visualization of Beijing Air Pollution',
    description: 'This interactive visualization demonstrates the intensity distribution of several major pollutants in Beijing over two weeks.',
    link: 'http://scottcheng.github.io/bj-air-vis/',
    linkText: 'Open visualization',
    type: 'Visualization',
  },
  {
    id: 'd3-101',
    name: 'D3.js 101',
    description: 'A technical intro to D3.js visualization library.',
    link: 'http://scottcheng.github.io/d3js-101/',
    linkText: 'See slides',
    type: 'Talk',
  },
  {
    id: 'css3',
    name: 'The Revolutionary CSS3',
    description: 'A non-technical intro to CSS level 3.',
    link: 'http://scottcheng.github.io/revolutionary-css3/',
    linkText: 'See slides',
    type: 'Talk',
  },
].map(function(p) {
  p.description = marked(p.description);
  if (p.browser == null) { p.browser = true; }
  return p;
});

var links = [
  { id: 'github', link: 'https://github.com/scottcheng', icon: 'github' },
  { id: 'dribbble', link: 'https://dribbble.com/scottcheng', icon: 'dribbble' },
  { id: 'instagram', link: 'http://instagram.com/scottcheng', icon: 'instagram' },
  { id: 'px', link: 'https://500px.com/ycheng', icon: '500px' },
  { id: 'twitter', link: 'https://twitter.com/scottcheng', icon: 'twitter' },
  { id: 'email', link: 'mailto:aloha@scottcheng.com', icon: 'send' },
];

module.exports = {
  projects: projects,
  links: links,
};
