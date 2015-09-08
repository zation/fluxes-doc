require('style!css!stylus!./styles/index.styl');

var React = require('react');
global.jQuery = require('jquery');

var Router = require('fluxes/libs/router');
var Page = require('./components/page.jsx');

React.render(React.createElement(Page), window.document.getElementById('page'));

var router = Router.create(require('./routes'));
router.init();
