var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');
var BackButton = require('fluxes/components/back-button.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample context={{BackButton: BackButton}}></PageWithExample>
    );
  }
});
