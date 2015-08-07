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
            <Link href="/components/back-button">Back Button</Link>
          </li>
          <li>
            <Link href="/components/modal">Modal</Link>
          </li>
          <li>
            <Link href="/components/confirmation">Confirmation</Link>
          </li>
          <li>
            <Link href="/components/feedback-button">Feedback Button</Link>
          </li>
          <li>
            <Link href="/components/switcher">Switcher</Link>
          </li>
        </ul>
      </nav>
    );
  }
});