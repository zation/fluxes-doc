var React = require('react');

var Document = require('../components/document.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Document markdown={require('raw!../documents/back-button.md')}
                context={{
                BackButton: require('fluxes/components/back-button.jsx')
                }}>
      </Document>
    );
  }
});
