var React = require('react');
var Playground = require('component-playground');

var BackButton = require('fluxes/components/back-button.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Back Button</h2>

        <p>Click to back to previous page.</p>

        <Playground codeText={require('raw!../examples/back-button.example')}
                    lineNumbers
                    previewFirst
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, BackButton: BackButton}}/>
      </div>
    );
  }
});
