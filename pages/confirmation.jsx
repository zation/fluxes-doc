var React = require('react');

var Document = require('../components/document.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Document markdown={require('raw!../documents/confirmation.md')}
                context={{
                Confirmation: require('fluxes/components/confirmation.jsx'),
                ConfirmationAction: require('fluxes/actions/confirmation')
                }}>
      </Document>
    );
  }
});
