var React = require('react');
var HighLight = require('highlight.js');
var marked = require('marked');

module.exports = React.createClass({
  componentDidMount: function() {
    HighLight.initHighlighting();
  },

  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html: marked(require('../documents/getting-started.md'))}}></div>
    );
  }
});