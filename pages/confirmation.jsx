var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample doc={require('raw!../documents/confirmation.md')}
                       context={{
                       Confirmation: require('fluxes/components/confirmation.jsx'),
                       ConfirmationAction: require('fluxes/actions/confirmation')
                       }}>
      </PageWithExample>
    );
  }
});
