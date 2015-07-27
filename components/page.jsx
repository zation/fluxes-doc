var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var PageStore = require('fluxes/stores/pages');
var Sidebar = require('./sidebar.jsx');

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
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <PageComponent/>
            </div>
            <div className="col-md-3">
              <Sidebar/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});