var React = require('react');
var Playground = require('component-playground');

var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Link</h2>

        <p>Link Component wrapper. Add route support.</p>

        <Playground codeText={require('../examples/link.example')}
                    lineNumbers
                    previewFirst
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, Link: Link}}/>
      </div>
    );
  }
});
