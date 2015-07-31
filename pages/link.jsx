var React = require('react');
var Playground = require('component-playground');

var Link = require('fluxes/components/link.jsx');
var LinkExample = require('../examples/link.text');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Playground codeText={LinkExample}
                    lineNumbers
                    theme="monokai"
                    noRender={false}
                    scope={{React: React, Link: Link}}/>
      </div>
    );
  }
});
