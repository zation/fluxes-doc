var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Link href="http://github.com">External Link in current tab</Link> <br/>
        <Link target="_blank" href="//github.com">External Link in a new tab</Link> <br/>
      </div>
    );
  }
});