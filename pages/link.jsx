var React = require('react');
var Playground = require('component-playground');

var Link = require('fluxes/components/link.jsx');
var LinkExample = require('../examples/link.text');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Playground collapsableCode codeText={LinkExample} scope={{React: React, Link: Link}}/>
      </div>
    );
  }
});
