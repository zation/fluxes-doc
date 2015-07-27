var React = require('react');

var Router = require('fluxes/libs/router');
var Page = require('./components/page.jsx');
var routes = require('./routes');


React.render(React.createElement(Page), window.document.getElementById('page'));

Router.create(routes);
