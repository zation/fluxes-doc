var React = require('react');
var HighLight = require('highlight.js');
var marked = require('marked');
var $ = require('jquery');

module.exports = React.createClass({
  componentDidMount: function() {
    $(this.getDOMNode()).find('pre code').each(function(index, block) {
      HighLight.highlightBlock(block);
    });
  },

  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html: marked(require('raw!../documents/getting-started.md'))}}></div>
    );
  }
});