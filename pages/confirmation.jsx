var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Confirmation</h2>

        <p>Confirmation component.</p>

        <Example code={require('!!raw!../examples/confirmation.jsx')}
                 component={require('../examples/confirmation.jsx')}/>

      </div>
    );
  }
});
