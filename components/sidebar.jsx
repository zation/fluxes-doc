var React = require('react');
var Link = require('fluxes/components/link.jsx');
var _ = require('lodash');

var SidebarRoutes = require('../constants/sidebar-routes');

module.exports = React.createClass({
  render: function() {
    var list = _.map(SidebarRoutes, function(route, index) {
      return (
        <li key={index}>
          <Link href={route.path}>{route.text}</Link>
        </li>
      );
    });

    return (
      <nav>
        <ul className="nav">
          {list}
        </ul>
      </nav>
    );
  }
});