#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).description(_package2.default.description);

_commander2.default.option('-U, --user <user>', 'Username to fetch repositories from').description('Buscar repositorios de um usuário').parse(process.argv);

(0, _request2.default)(_commander2.default.user);