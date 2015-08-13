var _ = require('lodash');

var PageAction = require('fluxes/actions/pages');
var SidebarRoutes = require('./constants/sidebar-routes');

module.exports = _.reduce(SidebarRoutes, function(result, route) {
  result[route.path] = function() {
    PageAction.render(route.component);
  };
  return result;
}, {});