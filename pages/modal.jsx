var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample doc={require('raw!../documents/modal.md')}
                       context={{
                       Modal: require('fluxes/components/modal.jsx')
                       }}>
      </PageWithExample>
    );
  }
});
