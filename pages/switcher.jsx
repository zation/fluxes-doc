var React = require('react');
var Playground = require('component-playground');

var Switcher = require('fluxes/components/switcher.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Switcher</h2>

        <p>Switcher Component</p>

        <Playground codeText={require('../examples/switcher.text')}
                    lineNumbers
                    previewFirst
                    noRender={false}
                    mode="htmlembedded"
                    theme="base16-light"
                    scope={{React: React, Switcher: Switcher}}/>
      </div>
    );
  }
});
