var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <header className="navbar">
        <div className="container">
          <div className="navbar-header">
            <Link href="/" className="navbar-brand">Fluxes</Link>
          </div>
        </div>
      </header>
    );
  }
});