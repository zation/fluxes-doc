var React = require('react');

var Document = require('../components/document.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Document markdown={require('raw!../documents/modal.md')}
                context={{
                Modal: require('fluxes/components/modal.jsx')
                }}>
      </Document>
    );
  }
});
