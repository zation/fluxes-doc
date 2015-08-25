var marked = require('marked');
var renderer = new marked.Renderer();

var originalCodeRenderer = renderer.code;

renderer.code = function(code, language) {
  if (language === 'js-example') {
    return '<div class="example">' +
      '<div class="preview"></div>' +
      originalCodeRenderer.call(renderer, code, 'js') +
      '</div>';
  } else {
    return originalCodeRenderer.call(renderer, code, language);
  }
};

module.exports = renderer;