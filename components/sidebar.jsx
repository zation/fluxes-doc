var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <nav>
        <ul className="nav">
          <li>
            <Link href="/components/link">Link</Link>
          </li>
          <li>
            Test 2
          </li>
        </ul>
      </nav>
    );
  }
});