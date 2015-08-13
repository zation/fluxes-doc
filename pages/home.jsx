var React = require('react');
var HighLight = require('highlight.js');

module.exports = React.createClass({
  componentDidMount: function() {
    HighLight.initHighlighting();
  },

  render: function() {
    return (
      <div>
        <h2>Getting Started</h2>

        <h3>Install</h3>

        <p>You can install with NPM:</p>

        <pre>
          <code className="bash">
            $ npm install fluxes
          </code>
        </pre>

        <h3>Project Structure</h3>

        <p>
          A Fluxes project should have below structure:
        </p>

        <pre>
          <code className="bash">
            project/{'\n'}
            ├── styles/{'\n'}
            ├── components/{'\n'}
            ├── constants/{'\n'}
            ├── pages/{'\n'}
            ├── actions/{'\n'}
            ├── stores/{'\n'}
            ├── test/{'\n'}
            ├── index.js{'\n'}
            └── routes.js{'\n'}
          </code>
        </pre>

        <p>Each folder could have sub folder to organize files by functionality.</p>

        <h3>Page and Layout</h3>

        <p>
          Fluxes provide page action and page store, so that you can render your layout like below:
        </p>

        <pre>
          <code>
            
          </code>
        </pre>

        <h3>Page</h3>
      </div>
    );
  }
});