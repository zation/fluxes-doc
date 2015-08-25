var _ = require('lodash');

var PageAction = require('fluxes/actions/pages');
var SidebarRoutes = require('./constants/sidebar-routes');
var Document = require('./components/document.jsx');

module.exports = _.reduce(SidebarRoutes, function(result, route) {
  result[route.path] = function() {
    PageAction.render(Document, {context: route.context, markdown: route.markdown});
  };
  return result;
}, {});