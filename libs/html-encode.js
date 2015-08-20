module.exports = function(value) {
  return value.
    replace(/&/g, '&amp;').
    replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(value) {
      var hi = value.charCodeAt(0);
      var low = value.charCodeAt(1);
      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
    }).
    replace(/([^\#-~| |!])/g, function(value) {
      return '&#' + value.charCodeAt(0) + ';';
    }).
    replace(/</g, '&lt;').
    replace(/>/g, '&gt;');
};