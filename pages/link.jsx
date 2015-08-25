var React = require('react');

var Example = require('../components/example.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Link</h2>

        <p>
          Link component will use the same props as <code>a</code> tag.
        </p>

        <h3>Internal Link</h3>

        <p>
          A link which <code>href</code>  is an internal link. will go to another page inside your app.
        </p>

        <Example code={require('!!raw!../examples/link-internal.jsx')}
                 component={require('../examples/link-internal.jsx')}/>

        <h3>Button Link</h3>

        <p>
          A link without <code>href</code> is a button link.
          It will call the function of <code>onClick</code>.
        </p>

        <Example code={require('!!raw!../examples/link-button.jsx')}
                 component={require('../examples/link-button.jsx')}/>

        <h3>External Link</h3>

        <p>
          A link which <code>href</code> starts with "http" or <code>target</code> is <code>blank</code>
          is an external link. It will go to another page outside your app.
        </p>

        <Example code={require('!!raw!../examples/link-external.jsx')}
                 component={require('../examples/link-external.jsx')}/>
      </div>
    );
  }
});
