var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({


  render: function() {
    return (
      <div>
        <h2>Back Button</h2>

        <p>Click to back to previous page.</p>

        <Example code={require('!!raw!../examples/back-button.jsx')}
                 component={require('../examples/back-button.jsx')}/>
      </div>
    );
  }
});
