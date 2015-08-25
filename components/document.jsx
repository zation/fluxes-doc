var React = require('react');
var marked = require('marked');
var Babel = require('babel-core/browser');
var $ = require('jquery');
var HighLight = require('highlight.js');
var _ = require('lodash');

var renderer = require('../libs/doc-with-example-renderer');

module.exports = React.createClass({
  updatePreview: function() {
    var context = _.clone(this.props.context);
    if (_.isUndefined(context)) {
      $(this.getDOMNode()).find('pre code').each(function() {
        HighLight.highlightBlock(this);
      });
      return;
    }

    context.React = React;
    var contextValues = [];
    var contextNames = [];
    _.forEach(context, function(value, name) {
      contextNames.push(name);
      contextValues.push(value);
    });

    $(this.getDOMNode()).find('pre code').each(function(index, element) {
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

  componentDidMount: function() {
    this.updatePreview();
  },

  componentDidUpdate: function() {
    this.updatePreview();
  },

  render: function() {
    var html = marked(this.props.markdown, {renderer: renderer});
    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
});
