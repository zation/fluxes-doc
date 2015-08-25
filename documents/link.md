## Link

Link component will use the same props as `a` tag.

### Internal Link

A link which `href` is an internal link. will go to another page inside your app.

```js
var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Link href="/">Internal Link to Homepage</Link>
      </div>
    );
  }
});
```

### Button Link

A link without `href` is a button link. It will call the function of `onClick`.

```js
var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  alert: function() {
    alert('Alert!');
  },

  render: function() {
    return (
      <div>
        <Link onClick={this.alert}>Button Link</Link> <br/>
      </div>
    );
  }
});
```

### External Link

A link which `href` starts with "http" or `target` is `blank` is an external link.
It will go to another page outside your app.

```js
var React = require('react');
var Link = require('fluxes/components/link.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Link href="http://github.com">External Link in current tab</Link> <br/>
        <Link target="_blank" href="//github.com">External Link in a new tab</Link> <br/>
      </div>
    );
  }
});
```