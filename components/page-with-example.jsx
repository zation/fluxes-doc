var React = require('react');
var marked = require('marked');
var Babel = require('babel-core/browser');
var $ = require('jquery');
var HighLight = require('highlight.js');
var _ = require('lodash');

var markdown = require('raw!../documents/back-button.md');
var renderer = require('../libs/doc-with-example-renderer');
var html = marked(markdown, {renderer: renderer});

module.exports = React.createClass({
  componentDidMount: function() {
    var context = _.clone(this.props.context);
    context.React = React;
    var contextValues = [];
    var contextNames = [];
    _.forEach(context, function(value, name) {
      contextNames.push(name);
      contextValues.push(value);
    });

    $(this.getDOMNode()).find('code').each(function(index, element) {
      var $element = $(element);
      HighLight.highlightBlock(element);

      if ($element.hasClass('lang-js')) {
        var code = '(function(' + contextNames.join(',') + ') {' + $element.text() + '})';
        code = code.replace(/var.*=.*require.*;/g, '');
        code = code.replace(/module.exports.*=/, 'return ');
        var transformedCode = Babel.transform(code).code;

        React.render(
          React.createElement(eval(transformedCode).apply(null, contextValues)),
          $element.parent().siblings('.preview')[0]
        );
      }
    });
  },

  render: function() {
    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
});
