var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample doc={require('raw!../documents/link.md')}
                       context={{
                       Link: require('fluxes/components/link.jsx')
                       }}>
      </PageWithExample>
    );
  }
});
