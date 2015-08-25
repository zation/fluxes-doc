var React = require('react');
var $ = require('jquery');
var HighLight = require('highlight.js');

var htmlEncode = require('../libs/html-encode');

module.exports = React.createClass({
  componentDidMount: function() {
    HighLight.highlightBlock(this.refs.code.getDOMNode());
  },

  render: function() {
    var Component = this.props.component;

    return (
      <div className="example">
        <div className="preview">
          <Component/>
        </div>
          <pre>
            <code className="javascript"
                  ref="code"
                  dangerouslySetInnerHTML={{__html: htmlEncode(this.props.code)}}></code>
          </pre>
      </div>
    );
  }
});