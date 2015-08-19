require('style!css!stylus!./styles/index.styl');

var React = require('react');
global.jQuery = require('jquery');

var Router = require('fluxes/libs/router');
var Page = require('./components/page.jsx');

global.CodeMirror = require('codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/htmlembedded/htmlembedded');

React.render(React.createElement(Page), window.document.getElementById('page'));

Router.create(require('./routes'));
