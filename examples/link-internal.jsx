var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Link href="/">Internal Link to Homepage</Link>
      </div>
    );
  }
});