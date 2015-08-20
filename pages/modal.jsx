var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Modal</h2>

        <p>Modal Component</p>

        <Example code={require('!!raw!../examples/modal.jsx')}
                 component={require('../examples/modal.jsx')}/>
      </div>
    );
  }
});
