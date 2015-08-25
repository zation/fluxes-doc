var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample doc={require('raw!../documents/back-button.md')}
                       context={{
                       BackButton: require('fluxes/components/back-button.jsx')
                       }}>
      </PageWithExample>
    );
  }
});
