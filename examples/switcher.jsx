var React = require('react');
var Switcher = require('fluxes/components/switcher.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Switcher/> <br/>
        <Switcher equal/> <br/>
        <Switcher type="flat"/> <br/>
        <Switcher type="flat" equal/>
      </div>
    );
  }
});
