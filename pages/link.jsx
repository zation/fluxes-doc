var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Link</h2>

        <p>Link Component wrapper. Add route support.</p>

        <Example code={require('!!raw!../examples/link.jsx')}
                 component={require('../examples/link.jsx')}/>
      </div>
    );
  }
});
