var React = require('react');
var Playground = require('component-playground');

var FeedbackButton = require('fluxes/components/feedback-button.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Feedback Button</h2>

        <p>Button based on ladda</p>

        <Playground codeText={require('../examples/feedback-button.example')}
                    lineNumbers
                    previewFirst
                    noRender={false}
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, FeedbackButton: FeedbackButton}}/>
      </div>
    );
  }
});
