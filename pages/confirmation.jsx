var React = require('react');
var Playground = require('component-playground');

var Confirmation = require('fluxes/components/confirmation.jsx');
var ConfirmationAction = require('fluxes/actions/confirmation');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Confirmation</h2>

        <p>Confirmation component.</p>


        <Playground codeText={require('../examples/confirmation.example')}
                    lineNumbers
                    previewFirst
                    noRender={false}
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, Confirmation: Confirmation, ConfirmationAction: ConfirmationAction}}/>
      </div>
    );
  }
});
