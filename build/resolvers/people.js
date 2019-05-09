'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _getCategoryFromUrl = require('../helpers/getCategoryFromUrl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var UrlLoader = new _dataloader2.default(function (urls) {
  return Promise.all(urls.map(getFromUrl));
});
var getFromUrl = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios2.default)(url);

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getFromUrl(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = {
  Person: {
    homeworld: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3, args, context, info) {
        var _homeworld = _ref3.homeworld;

        var _ref4, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return UrlLoader.load(_homeworld);

              case 2:
                _ref4 = _context2.sent;
                data = _ref4.data;
                return _context2.abrupt('return', data);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function homeworld(_x2, _x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }(),
    species: function species(_ref5, args, context, info) {
      var _species = _ref5.species;

      var res = _species.map(function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(s) {
          var _ref7, data;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return UrlLoader.load(s);

                case 2:
                  _ref7 = _context3.sent;
                  data = _ref7.data;
                  return _context3.abrupt('return', data);

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, undefined);
        }));

        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }());
      return res;
    },
    films: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref9, args, context, info) {
        var _films = _ref9.films;
        var res;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                res = _films.map(function () {
                  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(f) {
                    var _ref11, data;

                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return UrlLoader.load(f);

                          case 2:
                            _ref11 = _context4.sent;
                            data = _ref11.data;
                            return _context4.abrupt('return', data);

                          case 5:
                          case 'end':
                            return _context4.stop();
                        }
                      }
                    }, _callee4, undefined);
                  }));

                  return function (_x11) {
                    return _ref10.apply(this, arguments);
                  };
                }());
                return _context5.abrupt('return', res);

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function films(_x7, _x8, _x9, _x10) {
        return _ref8.apply(this, arguments);
      };
    }()
  },
  Query: {
    people: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(parent, _ref13, context, info) {
        var url = _ref13.url;

        var _ref14, data, category, people, res, results;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return UrlLoader.load(url);

              case 2:
                _ref14 = _context8.sent;
                data = _ref14.data;
                category = (0, _getCategoryFromUrl.getCategory)(url);

                if (!(category === "people")) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt('return', data);

              case 7:
                people = category === "planets" ? "residents" : "people";
                _context8.next = 10;
                return Promise.all(data.results.map(function () {
                  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(categoryRes) {
                    var residents;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return Promise.all(categoryRes[people].map(function () {
                              var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(p) {
                                var person;
                                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                  while (1) {
                                    switch (_context6.prev = _context6.next) {
                                      case 0:
                                        _context6.next = 2;
                                        return UrlLoader.load(p);

                                      case 2:
                                        person = _context6.sent;
                                        return _context6.abrupt('return', person.data);

                                      case 4:
                                      case 'end':
                                        return _context6.stop();
                                    }
                                  }
                                }, _callee6, undefined);
                              }));

                              return function (_x17) {
                                return _ref16.apply(this, arguments);
                              };
                            }()));

                          case 2:
                            residents = _context7.sent;
                            return _context7.abrupt('return', residents);

                          case 4:
                          case 'end':
                            return _context7.stop();
                        }
                      }
                    }, _callee7, undefined);
                  }));

                  return function (_x16) {
                    return _ref15.apply(this, arguments);
                  };
                }()));

              case 10:
                res = _context8.sent;
                results = [].concat.apply([], res);
                return _context8.abrupt('return', _extends({}, data, {
                  results: results
                }));

              case 13:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, undefined);
      }));

      return function people(_x12, _x13, _x14, _x15) {
        return _ref12.apply(this, arguments);
      };
    }()
  }

};
//# sourceMappingURL=people.js.map