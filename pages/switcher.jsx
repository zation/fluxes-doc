var React = require('react');

var Document = require('../components/document.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Document markdown={require('raw!../documents/switcher.md')}
                context={{
                Switcher: require('fluxes/components/switcher.jsx')
                }}>
      </Document>
    );
  }
});
