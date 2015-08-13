var React = require('react');
var Link = require('fluxes/components/link.jsx');
var _ = require('lodash');
var Reflux = require('reflux');
var classnames = require('classnames');

var RoutesStore = require('fluxes/stores/routes');
var SidebarRoutes = require('../constants/sidebar-routes');

module.exports = React.createClass({
  mixins: [Reflux.connectFilter(RoutesStore, 'currentRoute', function(routes) {
    return _.last(routes);
  })],

  render: function() {
    var currentRoute = this.state.currentRoute;
    var list = _.map(SidebarRoutes, function(route, index) {
      return (
        <li key={index} className={classnames({active: currentRoute === route.path})}>
          <Link href={route.path}>{route.text}</Link>
        </li>
      );
    });

    return (
      <nav>
        <ul className="nav nav-pills nav-stacked">
          {list}
        </ul>
      </nav>
    );
  }
});