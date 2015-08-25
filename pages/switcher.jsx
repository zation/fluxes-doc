var React = require('react');

var PageWithExample = require('../components/page-with-example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <PageWithExample doc={require('raw!../documents/switcher.md')}
                       context={{
                       Switcher: require('fluxes/components/switcher.jsx')
                       }}>
      </PageWithExample>
    );
  }
});
