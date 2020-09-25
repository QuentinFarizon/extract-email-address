"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tlds = _interopRequireDefault(require("tlds"));

var _normalizeInput = _interopRequireDefault(require("./normalizeInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (input) {
  const matches = (0, _normalizeInput.default)(input).match(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g);

  if (!matches) {
    return [];
  }

  return matches.map(function (email) {
    return email;
  }).filter(function (email) {
    var i;
    for (i = 0; i < _tlds.default.length; i++) {
      var tld = _tlds.default[i]
      if (email.endsWith('.' + tld)) {
        return true;
      }
    }

    return false;
  }).filter(function (email, index, self) {
    return self.indexOf(email) === index;
  }).map(function (email) {
    var ret = {}
    ret.email = email
    return ret
  });
};

exports.default = _default;
//# sourceMappingURL=extractEmail.js.map
