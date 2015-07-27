var PageAction = require('fluxes/actions/pages');

var Home = require('./pages/home.jsx');

module.exports = {
  '/': function() {
    PageAction.render(Home);
  }
};