'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var searchRepos = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
    var options, repositories;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              uri: 'https://api.github.com/users/' + user + '/repos',
              headers: {
                'User-Agent': 'Request-Promise'
              },
              json: true
            };
            _context.next = 3;
            return (0, _requestPromise2.default)(options);

          case 3:
            repositories = _context.sent;
            return _context.abrupt('return', repositories);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function searchRepos(_x) {
    return _ref.apply(this, arguments);
  };
}();

var showRepos = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'dougtq';
    var repos;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            spinner.start();
            _context2.next = 4;
            return searchRepos(user.toString());

          case 4:
            repos = _context2.sent;

            spinner.stop();
            repos.map(function (repo) {
              return console.info(_chalk2.default.blue(repo.name));
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](0);

            console.error(_chalk2.default.red('Sorry, an error ocurred. Try again!'));

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 9]]);
  }));

  return function showRepos() {
    return _ref2.apply(this, arguments);
  };
}();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _ora = require('ora');

var _ora2 = _interopRequireDefault(_ora);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var spinner = (0, _ora2.default)({
  text: 'Fetching user repos...',
  color: 'magenta'
});

exports.default = showRepos;