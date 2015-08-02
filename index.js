var React = require('react');

var Router = require('fluxes/libs/router');
var Page = require('./components/page.jsx');
var routes = require('./routes');

global.CodeMirror = require('codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/htmlembedded/htmlembedded');

React.render(React.createElement(Page), window.document.getElementById('page'));

Router.create(routes);
