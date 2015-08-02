var React = require('react');
var Playground = require('component-playground');

var Modal = require('fluxes/components/modal.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Modal</h2>

        <p>Modal Component</p>

        <Playground codeText={require('../examples/modal.text')}
                    lineNumbers
                    previewFirst
                    noRender={false}
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, Modal: Modal}}/>
      </div>
    );
  }
});
