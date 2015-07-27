var PageAction = require('fluxes/actions/pages');

var Home = require('./pages/home.jsx');
var Link = require('./pages/link.jsx');

module.exports = {
  '/': function() {
    PageAction.render(Home);
  },
  '/components/link': function() {
    PageAction.render(Link);
  }
};