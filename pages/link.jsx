var React = require('react');
var Playground = require('component-playground');

var Link = require('fluxes/components/link.jsx');
var LinkExample = require('../examples/link.text');


module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Link</h2>

        <p>Link Component</p>

        <Playground codeText={LinkExample}
                    lineNumbers
                    previewFirst
                    mode="htmlembedded"
                    theme="base16-light"
                    noRender={false}
                    scope={{React: React, Link: Link}}/>
      </div>
    );
  }
});
