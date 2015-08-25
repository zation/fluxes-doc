## Feedback Button

Button based on Ladda

```js-example
var React = require('react');
var FeedbackButton = require('fluxes/components/feedback-button.jsx');

module.exports = React.createClass({
  onClick: function() {
    return new Promise(function(resolve) {
      window.setTimeout(resolve, 1000);
    });
  },

  render: function() {
    return (
      <FeedbackButton className="btn btn-primary"
                      onClick={this.onClick}>Feedback Button</FeedbackButton>
    );
  }
});
```