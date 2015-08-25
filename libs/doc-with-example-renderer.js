var marked = require('marked');
var renderer = new marked.Renderer();

var originalCodeRenderer = renderer.code;

renderer.code = function(code, language) {
  if (language === 'js' || language === 'javascript') {
    return '<div class="example">' +
      '<div class="preview"></div>' +
      originalCodeRenderer.call(renderer, code, language) +
      '</div>';
  } else {
    return originalCodeRenderer.call(renderer, code, language);
  }
};

module.exports = renderer;