var PageAction = require('fluxes/actions/pages');

var Home = require('./pages/home.jsx');
var Link = require('./pages/link.jsx');
var BackButton = require('./pages/back-button.jsx');

module.exports = {
  '/': function() {
    PageAction.render(Home);
  },
  '/components/link': function() {
    PageAction.render(Link);
  },
  '/components/back-button': function() {
    PageAction.render(BackButton);
  }
};