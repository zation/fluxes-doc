var PageAction = require('fluxes/actions/pages');

var Home = require('./pages/home.jsx');
var Link = require('./pages/link.jsx');
var BackButton = require('./pages/back-button.jsx');
var Modal = require('./pages/modal.jsx');
var Confirmation = require('./pages/confirmation.jsx');
var FeedbackButton = require('./pages/feedback-button.jsx');
var Switcher = require('./pages/switcher.jsx');

module.exports = {
  '/': function() {
    PageAction.render(Home);
  },
  '/components/link': function() {
    PageAction.render(Link);
  },
  '/components/back-button': function() {
    PageAction.render(BackButton);
  },
  '/components/modal': function() {
    PageAction.render(Modal);
  },
  '/components/confirmation': function() {
    PageAction.render(Confirmation);
  },
  '/components/feedback-button': function() {
    PageAction.render(FeedbackButton);
  },
  '/components/switcher': function() {
    PageAction.render(Switcher);
  }
};