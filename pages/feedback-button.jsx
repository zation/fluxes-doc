var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample doc={require('raw!../documents/feedback-button.md')}
                       context={{
                       FeedbackButton: require('fluxes/components/feedback-button.jsx')
                       }}>
      </PageWithExample>
    );
  }
});
