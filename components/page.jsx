var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var PageStore = require('fluxes/stores/pages');

module.exports = React.createClass({
  mixins: [Reflux.connect(PageStore, 'page')],

  render: function() {
    var PageComponent = this.state.page.component;
    if (_.isUndefined(PageComponent)) {
      return null;
    }

    return (
      <div>
        <Header/>
        <PageComponent/>
        <Footer/>
      </div>
    );
  }
});