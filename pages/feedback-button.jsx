var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Feedback Button</h2>

        <p>Button based on ladda</p>

        <Example code={require('!!raw!../examples/feedback-button.jsx')}
                 component={require('../examples/feedback-button.jsx')}/>
      </div>
    );
  }
});
