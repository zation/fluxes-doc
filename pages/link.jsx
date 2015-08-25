var React = require('react');

var Document = require('../components/document.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Document markdown={require('raw!../documents/link.md')}
                context={{
                Link: require('fluxes/components/link.jsx')
                }}/>
    );
  }
});
