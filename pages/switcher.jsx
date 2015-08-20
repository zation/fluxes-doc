var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Switcher</h2>

        <p>Switcher Component</p>

        <Example code={require('!!raw!../examples/switcher.jsx')}
                 component={require('../examples/switcher.jsx')}/>
      </div>
    );
  }
});
