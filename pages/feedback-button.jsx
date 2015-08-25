var React = require('react');

var Document = require('../components/document.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <Document markdown={require('raw!../documents/feedback-button.md')}
                context={{
                FeedbackButton: require('fluxes/components/feedback-button.jsx')
                }}>
      </Document>
    );
  }
});
