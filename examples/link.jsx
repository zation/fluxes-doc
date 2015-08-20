var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Link onClick={function() {alert("Alert!")}}>Button Link</Link> <br/>
        <Link href="http://github.com">External Link</Link> <br/>
        <Link target="_blank" href="//github.com">Another External Link</Link> <br/>
        <Link href="/">Internal Link to Homepage</Link>
      </div>
    );
  }
});