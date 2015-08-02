var React = require('react');
var Playground = require('component-playground');

var BackButton = require('fluxes/components/back-button.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Back Button</h2>

        <p>Click to back to previous page.</p>

        <Playground codeText={require('../examples/back-button.text')}
                    lineNumbers
                    previewFirst
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, BackButton: BackButton}}/>
      </div>
    );
  }
});
