'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCategory = exports.getCategory = function getCategory(url) {
  var str = url.substring(21, url.length);
  if (str.indexOf('/') === -1) {
    return str.substring(0, str.length);
  }
  return str.substring(0, str.indexOf('/'));
};
//# sourceMappingURL=getCategoryFromUrl.js.map