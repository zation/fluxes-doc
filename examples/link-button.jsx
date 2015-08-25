var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  alert: function() {
    alert('Alert!');
  },

  render: function() {
    return (
      <div>
        <Link onClick={this.alert}>Button Link</Link> <br/>
      </div>
    );
  }
});